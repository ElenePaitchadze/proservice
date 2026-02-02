import styles from './newscard.module.css';
import { Link } from '@/i18n/navigation';
import calendar from '@/img/calendar.svg';
import arrow from '@/img/arrowright.png';


export default function NewsCard({ news }: { news: any }) {
  return (
    <Link href={`/news/${news.slug}`} className={styles.card}>
      <div className={styles.cardImg}>
        <img src={news.img.src} alt="news image" />
      </div>
      <div className={styles.desc}>
        <p>{news.title}</p>
        <div>{news.desc}</div>
        <div className='newsDate'>
          <img src={calendar.src} alt="calendar icon" />
          <span>{news.date}</span>
        </div>
        <img src={arrow.src} alt="arrow icon" />
      </div>
    </Link>
  );
}