export interface SubCategory {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  subCategories: SubCategory[];
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'آرایشی بهداشتی',
    slug: 'health-beauty',
    icon: '🧴',
    subCategories: [
      { id: '1-1', name: 'شوینده' },
      { id: '1-2', name: 'سلولزی' },
      { id: '1-3', name: 'آرایشی' },
    ],
  },
  {
    id: '2',
    name: 'مواد غذایی و آشامیدنی',
    slug: 'food-beverage',
    icon: '🍔',
    subCategories: [
      { id: '2-1', name: 'فرآورده‌های لبنی' },
      { id: '2-2', name: 'غلات و حبوبات' },
      { id: '2-3', name: 'انواع روغن' },
    ],
  },
  {
    id: '3',
    name: 'ساختمان و تأسیسات',
    slug: 'building-construction',
    icon: '🏗️',
    subCategories: [
      { id: '3-1', name: 'سنگ، کاشی و سرامیک' },
      { id: '3-2', name: 'لوله و اتصالات' },
      { id: '3-3', name: 'شیرآلات و فرآورده‌های چینی' },
      { id: '3-4', name: 'تأسیسات ساختمانی' },
    ],
  },
  {
    id: '4',
    name: 'لوازم خانگی و اداری',
    slug: 'home-office',
    icon: '💺',
    subCategories: [
      { id: '4-1', name: 'مبلمان و کالای خواب' },
      { id: '4-2', name: 'ظروف و لوازم آشپزخانه' },
      { id: '4-3', name: 'فرش و موکت' },
    ],
  },
  {
    id: '5',
    name: 'خدمات سلامت و درمان',
    slug: 'health-medical',
    icon: '🩺',
    subCategories: [
      { id: '5-1', name: 'تجهیزات پزشکی و آزمایشگاهی' },
      { id: '5-2', name: 'محصولات دارویی و گیاهی' },
      { id: '5-3', name: 'مکمل‌ها' },
    ],
  },
  {
    id: '6',
    name: 'خدمات تجاری و صنعتی',
    slug: 'commercial-services',
    icon: '📦',
    subCategories: [
      { id: '6-1', name: 'حمل و نقل و لجستیک' },
      { id: '6-2', name: 'خدمات فناوری و ارتباطات (IT)' },
      { id: '6-3', name: 'نفت، گاز و پتروشیمی' },
      { id: '6-4', name: 'بسته‌بندی و چاپ' },
      { id: '6-5', name: 'نمایشگاه و رویداد' },
    ],
  },
];
