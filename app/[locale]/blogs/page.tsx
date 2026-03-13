import NewsPreview from "@/components/NewsPreview/NewsPreview";
import NewsCard from "@/components/NewsCard/NewsCard";
import styles from './page.module.css';
import getNews from "@/app/api/news";
import PaginationControls from "@/components/PaginationControls/PaginationControls";

import { getTranslations, getLocale } from 'next-intl/server';

type Props = {
  searchParams: Promise<{ page?: string }>
}

export default async function Blogs({ searchParams }: Props) {

  const { page } = await searchParams;
  const currentPage = parseInt(page ?? '1');

  const t = await getTranslations('HomePage');
  const locale = await getLocale();

  let newsItems: any = { data: [] };

  try {
    newsItems = await getNews(742, locale === 'ge' ? 'geo' : 'eng', currentPage);
  } catch (error) {
    console.error('Failed to fetch news:', error);
  }

  return (
    <>
      <section className="Container blogs-cont">
        <div className="content1">
          <p className="pageTitle">ბლოგები</p>
          {newsItems.data.length > 0 ? (
            <>
              <div className={styles.newsGrid}>
                {newsItems.data.map((news: any) => (
                  <NewsCard key={news.newsid} news={news} />
                ))}
              </div>

              <PaginationControls
                total={newsItems.navbar}
                destination="blogs"
              />
            </>
          ) : (
            <p className='noDetailsFound'>
              ინფორმაცია არ მოიძებნა
            </p>
          )}
        </div>
      </section>
    </>
  );
}