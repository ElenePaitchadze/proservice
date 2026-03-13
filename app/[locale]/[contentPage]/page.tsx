import styles from './page.module.css';
import getContent from '@/app/api/content';

type Props = {
  params: Promise<{ contentPage: string; locale: string }>;
};

export default async function ContentPage({ params }: Props) {
  const { locale, contentPage } = await params;
  const contentIds: Record<string, string> = {
    terms: '669',
    'hotel-management': '679',
    company: '714',
    contact: '724',
  };

  const catId = contentIds[contentPage];

  if (!catId) {
    return <div>Content page not found</div>;
  }

  let contentData: any = null;
  try {
    const response = await getContent(catId, locale === 'ge' ? 'geo' : 'eng');
    contentData = response?.data?.[0] || null;
  } catch (error) {
    console.error('Failed to fetch content:', error);
  }

  // 5️⃣ Render content
  return (
    <section className={`Container ${styles.contentCont}`}>
      <div className="content1">
        <p className="pageTitle">{contentData.title}</p>
        <div className={styles.contentText}>
          {contentData ? (
            <div dangerouslySetInnerHTML={{ __html: contentData.content }} />
          ) : (
            <p>Content not found or failed to load.</p>
          )}
        </div>
      </div>
    </section>
  );
}