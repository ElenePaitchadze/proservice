import NewsPreview from "@/components/NewsPreview/NewsPreview";
import NewsCard from "@/components/NewsCard/NewsCard";
import newsImg from '@/img/newsDummy.png';
import styles from './page.module.css';
import { getTranslations } from 'next-intl/server';

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
    img: newsImg,
    slug: 'quality-hosting'
  },
  { id: '129',
    title: 'კომპანია „პროსერვისი“ 2023 წლის Golden Brand-ის გამარჯვებულია',
    title_en: "Proservice Company is the winner of the 2023 Golden Brand",
    desc: 'კომპანია „პროსერვისი“ 2023 წლის Golden Brand-ის გამარჯვებულია. კომპანიამ ჯილდო ჰოსტინგ პროვაიდერის ნომინაციაში მოიპოვა.',
    desc_en: 'The company "Proservice" is the winner of the 2023 Golden Brand. The company won the award in the Hosting Provider nomination.',
    date: '11 ნოე, 2025',
    img: newsImg,
    slug: 'golden-brand-winner'
  },
  { id: '130',
    title: 'სიახლე ახალ მომხმარებლებს!',
    title_en: "News for new users!",
    desc: 'კომპანია „პროსერვისი“ 2023 წლის Golden Brand-ის გამარჯვებულია. კომპანიამ ჯილდო ჰოსტინგ პროვაიდერის ნომინაციაში მოიპოვა.',
    desc_en: 'The company "Proservice" is the winner of the 2023 Golden Brand. The company won the award in the Hosting Provider nomination.',
    date: '11 მაი, 2023',
    img: newsImg,
    slug: 'news-for-new-users'
  },
  { id: '131',
    title: 'ახალი თაობის ღრუბლოვანი ინფრასტრუქტურა: 40%-ით უფრო სწრაფი მუშაობა',
    title_en: "Next-generation cloud infrastructure: 40% faster performance",
    desc: 'ჩვენ განვაახლეთ ჩვენი მონაცემთა ცენტრები უახლესი ტექნოლოგიებით, რაც თქვენი ვებსაიტებისა და აპლიკაციებისთვის უპრეცედენტო სიჩქარესა და საიმედოობას უზრუნველყოფს..',
    desc_en: 'We have upgraded our data centers with the latest technologies, providing unprecedented speed and reliability for your websites and applications.',
    date: '18 ნოე, 2025',
    img: newsImg,
    slug: 'wooCommerce-plugins'
  },
  { id: '132',
    title: 'რატომ არის ხარისხიანი ჰოსტინგი მნიშვნელოვანი',
    title_en: "Why quality hosting is important",
    desc: 'კომპანია „პროსერვისი“ 2023 წლის Golden Brand-ის გამარჯვებულია. კომპანიამ ჯილდო ჰოსტინგ პროვაიდერის ნომინაციაში მოიპოვა.',
    desc_en: 'The company "Proservice" is the winner of the 2023 Golden Brand. The company won the award in the Hosting Provider nomination.',
    date: '11 ნოე, 2025',
    img: newsImg,
    slug: 'quality-hosting'
  },
  { id: '133',
    title: 'კომპანია „პროსერვისი“ 2023 წლის Golden Brand-ის გამარჯვებულია',
    title_en: "Proservice Company is the winner of the 2023 Golden Brand",
    desc: 'კომპანია „პროსერვისი“ 2023 წლის Golden Brand-ის გამარჯვებულია. კომპანიამ ჯილდო ჰოსტინგ პროვაიდერის ნომინაციაში მოიპოვა.',
    desc_en: 'The company "Proservice" is the winner of the 2023 Golden Brand. The company won the award in the Hosting Provider nomination.',
    date: '11 ნოე, 2025',
    img: newsImg,
    slug: 'golden-brand-winner'
  },
  { id: '134',
    title: 'სიახლე ახალ მომხმარებლებს!',
    title_en: "News for new users!",
    desc: 'კომპანია „პროსერვისი“ 2023 წლის Golden Brand-ის გამარჯვებულია. კომპანიამ ჯილდო ჰოსტინგ პროვაიდერის ნომინაციაში მოიპოვა.',
    desc_en: 'The company "Proservice" is the winner of the 2023 Golden Brand. The company won the award in the Hosting Provider nomination.',
    date: '11 მაი, 2023',
    img: newsImg,
    slug: 'news-for-new-users'
  },
  { id: '135',
    title: 'ახალი თაობის ღრუბლოვანი ინფრასტრუქტურა: 40%-ით უფრო სწრაფი მუშაობა',
    title_en: "Next-generation cloud infrastructure: 40% faster performance",
    desc: 'ჩვენ განვაახლეთ ჩვენი მონაცემთა ცენტრები უახლესი ტექნოლოგიებით, რაც თქვენი ვებსაიტებისა და აპლიკაციებისთვის უპრეცედენტო სიჩქარესა და საიმედოობას უზრუნველყოფს..',
    desc_en: 'We have upgraded our data centers with the latest technologies, providing unprecedented speed and reliability for your websites and applications.',
    date: '18 ნოე, 2025',
    img: newsImg,
    slug: 'wooCommerce-plugins'
  },
];

export default async function News() {
  const t = await getTranslations('HomePage');

  return (
    <>
      <NewsPreview news={newsItems[0]}/>
      <section className="Container">
        <div className="content1">
          {newsItems.length > 0 ? (
            <>
              <div className={styles.newsGrid}>
                {newsItems.map((news: any) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            </>
          ) : (
            <p className='noDetailsFound'>{t('informationNotFound')}</p>
          )}
        </div>
      </section>
    </>
  )
}