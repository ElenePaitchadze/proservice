import { setRequestLocale } from 'next-intl/server';
import NewsPreview from '@/components/NewsPreview/NewsPreview';
import NewsSwiper from '@/components/NewsSwiper/NewsSwiper';
import ServerRoom from '@/components/ServerRoom/ServerRoom';
import Portfolio from '@/components/Portfolio/Portfolio';
import Banner from '@/components/Banner/Banner';
import Packages from '@/components/Packages/Packages';
import InfoPreview from '@/components/InfoPreview/InfoPreview';

import newsImg from '@/img/newsDummy.png';
import sitelogo1 from '@/img/sitelogo1.png';
import sitelogo2 from '@/img/sitelogo2.png';
import sitelogo3 from '@/img/sitelogo3.png';
import siteimg1 from '@/img/site1.png';
import siteimg2 from '@/img/site2.png';
import siteimg3 from '@/img/site3.png';

import getNews from '@/app/api/news';

const portfolio = [
  { id: '1', logo: sitelogo1, img: siteimg1, href: 'https://hotsale.ge/' },
  { id: '2', logo: sitelogo2, img: siteimg2, href: 'https://moneymuseum.nbg.gov.ge/' },
  { id: '3', logo: sitelogo3, img: siteimg3, href: 'https://foris.ge/' },
];

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  let newsItems: any[] = [];

  try {
    const newsResponse = await getNews(8, locale === 'ge' ? 'geo' : 'eng', 1);
    newsItems = newsResponse.data || [];
  } catch (error) {
    console.error('Failed to fetch news for homepage:', error);
  }

  return (
    <div>
      <Banner />
      <Packages />
      <ServerRoom />
      <InfoPreview />
      <Portfolio portfolios={portfolio} />
      {newsItems.length > 0 && (
        <>
          <NewsPreview news={newsItems[0]} />
          <NewsSwiper news={newsItems.slice(0, 4)} />
        </>
      )}
    </div>
  );
}