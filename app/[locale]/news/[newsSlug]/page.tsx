import { Metadata } from 'next'
import NewsDetails from '@/components/NewsDetails/NewsDetails'
import { getTranslations } from 'next-intl/server'
import getNews, { getNewsItem } from '@/app/api/news'
import url from '@/app/api/url'

type Props = {
  params: Promise<{
    newsSlug: string
    locale: string
  }>
}

function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '')
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const { newsSlug, locale } = await params;

  try {
    const newsDetails = await getNewsItem(locale === 'ge' ? 'geo' : 'eng', newsSlug);

    if (newsDetails.data.length > 0) {
      const news = newsDetails.data[0];

      const sanitizedText = news.text
        ? stripHtmlTags(news.text).slice(0, 200)
        : 'News article';

      return {
        title: news.newstitle,
        description: sanitizedText,
        openGraph: {
          title: news.title,
          description: sanitizedText,
          images: news.img ? [`${url}${news.img}`] : [],
        },
        twitter: {
          card: 'summary_large_image',
          title: news.newstitle,
          description: sanitizedText,
          images: news.img ? [`${url}${news.img}`] : [],
        }
      };
    }

  } catch (error) {
    console.error('Metadata fetch failed:', error);
  }

  return {
    title: 'News Article Not Found',
    description: 'The requested news article could not be found.',
  };
}

export default async function Page({
  params
}: {
  params: Promise<{ locale: string; newsSlug: string }>
}) {
  const { locale, newsSlug } = await params;

  const t = await getTranslations('news')

  let newsDetails: any = { data: [] };
  let similarNews: any[] = [];

  try {
    newsDetails = await getNewsItem(locale === 'ge' ? 'geo' : 'eng', newsSlug);
    const newsList = await getNews(8, locale === 'ge' ? 'geo' : 'eng', 1);
    similarNews = newsList.data.slice(0, 3);

  } catch (error) {
    console.error('Failed to fetch news:', error)
  }

  return (
    <>
      {newsDetails.data.length > 0 ? (
        <NewsDetails
          item={newsDetails.data[0]}
          similarNews={similarNews}
        />
      ) : (
        <div className='customNotFound'>
          {t('informationNotFound')}
        </div>
      )}
    </>
  )
}