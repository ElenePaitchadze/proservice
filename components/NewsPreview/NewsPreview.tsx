import styles from './newspreview.module.css';
import { Link } from '@/i18n/navigation';
import calendar from '@/img/calendar.svg';
import url from '@/app/api/url';

export default function NewsPreview({ news }: { news: any }) {
  return (
    <section className='Container newsPreview'>
      <div className='content1'>
        <div className={styles.head}>
          <Link href={'/news'}>სიახლეები</Link>
          <Link href={'./'}><span>ინციდენტები</span></Link>
        </div>
        <div className={styles.intro}>
          <span>
            იყავით ინფორმირებული ჩვენი ექსპერტების გუნდის უახლესი ფუნქციების, უსაფრთხოების 
            გაუმჯობესებებისა და ჰოსტინგის რჩევების შესახებ.
          </span>
          <Link href={'/news'}>ყველა სიახლე</Link>
        </div>
        <div className={styles.latest}>
          <img src={`${url}/${news.img}`} alt="news image" />
          <div>
            <p className={styles.title}>{news.newstitle}</p>
            <div
              className={styles.desc}
              dangerouslySetInnerHTML={{
                __html: news.newsintro
              }}
            />
            <div className={styles.inDetail}>
              <div className='newsDate'>
                <img src={calendar.src} alt="calendar icon" />
                <span>{news.newsdate}</span>
              </div>
              <Link href={`/news/${news.newsid}`} className='learnMore'>
                <span>გაიგე მეტი</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="17.811" height="10.121" viewBox="0 0 17.811 10.121">
                  <path d="M20,12H4m16,0L16,8m4,4-4,4" transform="translate(-3.25 -6.939)" fill="none" stroke="#1492e6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}