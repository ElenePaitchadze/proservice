'use client';
import styles from './details.module.css';
import { Link } from '@/i18n/navigation';
import calendar from '@/img/calendar.svg';
import facebook from '@/img/facebook1.svg';
import twitter from '@/img/twitter.svg';
import mail from '@/img/mailIcon.svg';
import link from '@/img/link.svg';
import NewsCard from '../NewsCard/NewsCard';
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';
import url from '@/app/api/url';

export default function NewsDetails({ item, similarNews, type }: any) {
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('ბმული დაკოპირდა');
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  return (
    <>
      <div className={styles.goback}>
        <Link href={type == 'news' ? '/news' : '/blogs'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20.051" height="11.647" viewBox="0 0 20.051 11.647">
            <path d="M21.637,12.409H4m0,0L8.409,8M4,12.409l4.409,4.409" transform="translate(-2.586 -6.586)" />
          </svg>
          <span>უკან დაბრუნება</span>
        </Link>
      </div>
      <section className="Container news-cont">
        <div className="content">
          <div className={styles.news}>
            <p className={styles.title}>{item.newstitle}</p>
            <p className={styles.date}>
              <img src={calendar.src} alt="calendar icon" />
              <span>{item.newsdate}</span>
            </p>
            <img className={styles.newsImg} src={`${url}/${item.img}`} alt="news image" />
            <div
              className={styles.text}
              dangerouslySetInnerHTML={{
                __html: item.text
              }}
            />
            <div className='share'>
              <span>გაზიარება</span>
              <div>
                <FacebookShareButton url={'https://proservice.ge/'} title={item.title}>
                  <img src={facebook.src} alt="facebook icon" />
                </FacebookShareButton>
                <TwitterShareButton url={'https://proservice.ge/'} title={item.title}>
                  <img src={twitter.src} alt="twitter icon" />
                </TwitterShareButton>
                <button className='copybtn' title="Copy link" onClick={handleCopyLink}>
                  <img src={link.src} alt="link icon" />
                </button>
                <EmailShareButton url={'https://proservice.ge/'} title={item.title}>
                  <img src={mail.src} alt="mail icon" />
                </EmailShareButton>
              </div>
            </div>
          </div>
          <div className={styles.otherNews}>
            <p>{type == 'news' ? 'სხვა სიახლეები' : 'სხვა ბლოგები'}</p>
            <div className={styles.newsGrid}>
              {similarNews.map((news: any) => (
                <NewsCard key={news.newsid} news={news} direction={type} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}