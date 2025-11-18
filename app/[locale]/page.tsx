import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import NewsPreview from '@/components/NewsPreview/NewsPreview';
import newsImg from '@/img/newsDummy.png';

const newsItems = [
  { id: '127',
    title: 'ახალი თაობის ღრუბლოვანი ინფრასტრუქტურა: 40%-ით უფრო სწრაფი მუშაობა',
    title_en: "Next-generation cloud infrastructure: 40% faster performance",
    desc: 'ჩვენ განვაახლეთ ჩვენი მონაცემთა ცენტრები უახლესი ტექნოლოგიებით, რაც თქვენი ვებსაიტებისა და აპლიკაციებისთვის უპრეცედენტო სიჩქარესა და საიმედოობას უზრუნველყოფს..',
    desc_en: 'We have upgraded our data centers with the latest technologies, providing unprecedented speed and reliability for your websites and applications.',
    date: '18 ნოე, 2025',
    img: newsImg,
    slug: 'wooCommerce-plugins'
  },
  { id: '128',
    title: 'რატომ არის ხარისხიანი ჰოსტინგი მნიშვნელოვანი',
    title_en: "Why quality hosting is important",
    desc: 'კომპანია „პროსერვისი“ 2023 წლის Golden Brand-ის გამარჯვებულია. კომპანიამ ჯილდო ჰოსტინგ პროვაიდერის ნომინაციაში მოიპოვა.',
    desc_en: 'The company "Proservice" is the winner of the 2023 Golden Brand. The company won the award in the Hosting Provider nomination.',
    date: '11 ნოე, 2025',
    slug: 'quality-hosting'
  },
  { id: '129',
    title: 'კომპანია „პროსერვისი“ 2023 წლის Golden Brand-ის გამარჯვებულია',
    title_en: "Proservice Company is the winner of the 2023 Golden Brand",
    desc: 'კომპანია „პროსერვისი“ 2023 წლის Golden Brand-ის გამარჯვებულია. კომპანიამ ჯილდო ჰოსტინგ პროვაიდერის ნომინაციაში მოიპოვა.',
    desc_en: 'The company "Proservice" is the winner of the 2023 Golden Brand. The company won the award in the Hosting Provider nomination.',
    date: '11 ნოე, 2025',
    slug: 'golden-brand-winner'
  },
  { id: '130',
    title: 'სიახლე ახალ მომხმარებლებს!',
    title_en: "News for new users!",
    desc: 'კომპანია „პროსერვისი“ 2023 წლის Golden Brand-ის გამარჯვებულია. კომპანიამ ჯილდო ჰოსტინგ პროვაიდერის ნომინაციაში მოიპოვა.',
    desc_en: 'The company "Proservice" is the winner of the 2023 Golden Brand. The company won the award in the Hosting Provider nomination.',
    date: '11 მაი, 2023',
    slug: 'news-for-new-users'
  },
]

export default function Home( { params }: { params: Promise<{ locale: string }>} ) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('HomePage');

  return (
    <NewsPreview news={newsItems[0]}/>
  );
}