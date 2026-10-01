export interface TargetCountry {
  id: string;
  name: string;
  flag: string;
  price: number;
}

export const targetCountries: TargetCountry[] = [
  { id: 'iq', name: 'عراق', flag: '🇮🇶', price: 500000 },
  { id: 'ru', name: 'روسیه', flag: '🇷🇺', price: 800000 },
  { id: 'tr', name: 'ترکیه', flag: '🇹🇷', price: 700000 },
  { id: 'af', name: 'افغانستان', flag: '🇦🇫', price: 400000 },
  { id: 'pk', name: 'پاکستان', flag: '🇵🇰', price: 400000 },
  { id: 'am', name: 'ارمنستان', flag: '🇦🇲', price: 350000 },
  { id: 'tm', name: 'ترکمنستان', flag: '🇹🇲', price: 350000 },
  { id: 'tj', name: 'تاجیکستان', flag: '🇹🇯', price: 350000 },
  { id: 'az', name: 'آذربایجان', flag: '🇦🇿', price: 400000 },
  { id: 'om', name: 'عمان', flag: '🇴🇲', price: 600000 },
];

export function formatPrice(price: number): string {
  return price.toLocaleString('fa-IR') + ' تومان';
}
