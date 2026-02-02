import { Metadata } from 'next'
import newsImg from '@/img/newsDummy.png';
import NewsDetails from '@/components/NewsDetails/NewsDetails';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ newsSlug: string; locale: string }>;
}

const newsDetails = [
  { id: '127',
    title: 'ახალი თაობის ღრუბლოვანი ინფრასტრუქტურა: 40%-ით უფრო სწრაფი მუშაობა',
    title_en: "Next-generation cloud infrastructure: 40% faster performance",
    desc: 'ჩვენ განვაახლეთ ჩვენი მონაცემთა ცენტრები უახლესი ტექნოლოგიებით, რაც თქვენი ვებსაიტებისა და აპლიკაციებისთვის უპრეცედენტო სიჩქარესა და საიმედოობას უზრუნველყოფს..',
    desc_en: 'We have upgraded our data centers with the latest technologies, providing unprecedented speed and reliability for your websites and applications.',
    date: '18 ნოე, 2025',
    img: newsImg,
    slug: 'wooCommerce-plugins',
    similarNews: [
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
      { id: '133',
        title: 'კომპანია „პროსერვისი“ 2023 წლის Golden Brand-ის გამარჯვებულია',
        title_en: "Proservice Company is the winner of the 2023 Golden Brand",
        desc: 'კომპანია „პროსერვისი“ 2023 წლის Golden Brand-ის გამარჯვებულია. კომპანიამ ჯილდო ჰოსტინგ პროვაიდერის ნომინაციაში მოიპოვა.',
        desc_en: 'The company "Proservice" is the winner of the 2023 Golden Brand. The company won the award in the Hosting Provider nomination.',
        date: '11 ნოე, 2025',
        img: newsImg,
        slug: 'golden-brand-winner'
      },
    ]
  },
];

function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { newsSlug, locale } = await params;

  // const newsDetails = await innernews1(newsSlug);
  const newItem = newsDetails;
  const languageCode = locale === 'ge' ? 'geo' : 'eng';
  // const filteredNews = newItem.filter((c: any) => c.lang === languageCode);
  const filteredNews = newItem;

  if (filteredNews.length > 0) {
    const news = filteredNews[0];
    const sanitizedText = news.desc ? stripHtmlTags(news.desc).slice(0, 200) : 'News article';
    
    return {
      description: sanitizedText,
      openGraph: {
        title: news.title,
        description: sanitizedText,
        images: news.img ? [`${news.img}`] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: news.title,
        description: sanitizedText,
        images: news.img ? [`${news.img}`] : [],
      },
    }
  }

  return {
    title: 'News Article Not Found',
    description: 'The requested news article could not be found.',
  }
}

export default async function InnerNews({ params }: Props) {
  const { locale, newsSlug } = await params;
  const t = await getTranslations('news');
  
  return (
    <>
      {newsDetails.length > 0 ? (
        <NewsDetails item={newsDetails[0]}/>
      ) : (
        <div className='customNotFound'>
          {t('informationNotFound')}
        </div>
      )}
    </>
  );
}
