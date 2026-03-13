'use client';
import styles from './newscard.module.css';
import { Link } from '@/i18n/navigation';
import { useState } from 'react';
import calendar from '@/img/calendar.svg';
import arrow from '@/img/arrowright.png';
import url from '@/app/api/url';
import defaultImg from '@/img/noImage.png';

export default function NewsCard({ news, direction }: { news: any, direction: string }) {
  const [imgSrc, setImgSrc] = useState(news.img ? `${url}${news.img}` : defaultImg.src);

  const handleError = () => {
    setImgSrc(defaultImg.src);
  };

  return (
    <Link href={`/${direction}/${news.newsid}`} className={styles.card}>
      <div className={styles.cardImg}>
        <img src={imgSrc} alt="news image" onError={handleError} />
      </div>
      <div className={styles.desc}>
        <p>{news.newstitle}</p>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{
            __html: news.newsintro
          }}
        />
        <div className='newsDate'>
          <img src={calendar.src} alt="calendar icon" />
          <span>{news.newsdate}</span>
        </div>
        <img src={arrow.src} alt="arrow icon" />
      </div>
    </Link>
  );
}