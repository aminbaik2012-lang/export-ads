import { useState } from 'react';
import { ChevronLeft, Camera, Check, Wallet } from 'lucide-react';
import { categories } from './utils/categories';
import { targetCountries, formatPrice } from './utils/markets';

export default function App() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSub, setSelectedSub] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [walletBalance] = useState(1_500_000);

  const currentCategory = categories.find((c) => c.id === selectedCategory);

  const toggleCountry = (id: string) => {
    setSelectedCountries((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const totalCost = selectedCountries.reduce((sum, id) => {
    const country = targetCountries.find((c) => c.id === id);
    return sum + (country?.price || 0);
  }, 0);

  const canGoNext =
    (step === 1 && !!selectedCategory && !!selectedSub) ||
    (step === 2 && title.trim().length > 0) ||
    (step === 3 && selectedCountries.length > 0 && totalCost <= walletBalance);

  return (
    <div className="bg-gray-50 min-h-screen pb-24" dir="rtl">
      <div className="bg-white p-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
            <h1 className="text-lg font-bold text-gray-800 mr-2">درج اعلان صادراتی</h1>
          </div>
          <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
            <Wallet className="w-4 h-4 text-green-600 ml-1" />
            <span className="text-xs font-medium text-green-700">
              {formatPrice(walletBalance)}
            </span>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <div className={`flex-1 h-1 rounded-full ${step >= 1 ? 'bg-blue-600' : 'bg-gray-200'}`} />
          <div className={`flex-1 h-1 rounded-full mx-2 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
          <div className={`flex-1 h-1 rounded-full ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`} />
        </div>
      </div>

      <div className="p-4 space-y-4">
        {step === 1 && (
          <>
            <h2 className="font-bold text-gray-800">انتخاب دسته‌بندی</h2>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSelectedSub('');
                  }}
                  className={`p-3 rounded-xl border text-right ${
                    selectedCategory === cat.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="text-2xl">{cat.icon}</div>
                  <div className="text-sm font-medium mt-1">{cat.name}</div>
                </button>
              ))}
            </div>
            {currentCategory && (
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">زیردسته</h3>
                {currentCategory.subCategories.map((sub) => (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => setSelectedSub(sub.id)}
                    className={`w-full p-3 rounded-xl border text-right ${
                      selectedSub === sub.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="font-bold text-gray-800">جزئیات اعلان</h2>
            <label className="block">
              <span className="text-sm text-gray-600">عنوان</span>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 w-full p-3 rounded-xl border border-gray-200"
                placeholder="عنوان اعلان صادراتی"
              />
            </label>
            <label className="block">
              <span className="text-sm text-gray-600">توضیحات</span>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 w-full p-3 rounded-xl border border-gray-200 min-h-[120px]"
                placeholder="توضیحات محصول یا خدمت"
              />
            </label>
            <div className="flex items-center gap-2 p-3 rounded-xl border border-dashed border-gray-300 bg-white text-gray-500">
              <Camera className="w-5 h-5" />
              <span className="text-sm">افزودن تصویر (به‌زودی)</span>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="font-bold text-gray-800">بازارهای هدف</h2>
            <div className="space-y-2">
              {targetCountries.map((country) => {
                const selected = selectedCountries.includes(country.id);
                return (
                  <button
                    key={country.id}
                    type="button"
                    onClick={() => toggleCountry(country.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border ${
                      selected ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{country.flag}</span>
                      <span>{country.name}</span>
                    </span>
                    <span className="flex items-center gap-2 text-sm text-gray-600">
                      {formatPrice(country.price)}
                      {selected && <Check className="w-4 h-4 text-blue-600" />}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="p-3 rounded-xl bg-white border border-gray-200">
              <div className="flex justify-between text-sm">
                <span>جمع هزینه</span>
                <span className="font-bold">{formatPrice(totalCost)}</span>
              </div>
              {totalCost > walletBalance && (
                <p className="text-xs text-red-600 mt-2">موجودی کیف پول کافی نیست.</p>
              )}
            </div>
          </>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t flex gap-3">
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="flex-1 py-3 rounded-xl border border-gray-300"
          >
            قبلی
          </button>
        )}
        <button
          type="button"
          disabled={!canGoNext}
          onClick={() => {
            if (step < 3) setStep((s) => s + 1);
          }}
          className="flex-1 py-3 rounded-xl bg-blue-600 text-white disabled:opacity-40"
        >
          {step === 3 ? 'ثبت اعلان' : 'ادامه'}
        </button>
      </div>
    </div>
  );
}
