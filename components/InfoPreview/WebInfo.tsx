'use client';
import { useState } from 'react';
import styles from './infopreview.module.css';
import { Link } from '@/i18n/navigation';

import webimg1 from '@/img/webinfo.png';
import webimg2 from '@/img/webimg1.png';
import webimg3 from '@/img/webimg2.png';
import webimg4 from '@/img/webimg3.png';
import webimg5 from '@/img/webimg4.png';
import art1 from '@/img/art1.png';
import art2 from '@/img/art2.png';
import art3 from '@/img/art3.png';
import art4 from '@/img/art4.png';
import art5 from '@/img/art5.png';
import art6 from '@/img/art6.png';
import art7 from '@/img/art7.png';
import art8 from '@/img/art8.png';
import art9 from '@/img/art9.png';

export default function WebInfo() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`${styles.webCard} ${isOpen ? styles.open : ''}`}>
      <div>
        <p>ვებ დიზაინი</p>
        <p>ჩვენთან ერთად იდეის რეალობად ქცევა მარტივია</p>
      </div>
      <img src={webimg1.src} alt="web image" />
      <img src={webimg2.src} alt="web image" />
      <img src={webimg3.src} alt="web image" />
      <img src={webimg4.src} alt="web image" />
      <img src={webimg5.src} alt="web image" />
      <div className={styles.latestwork}>
        <a href="" target='_blank'><img src={art1.src} alt="site img" /></a>
        <a href="" target='_blank'><img src={art2.src} alt="site img" /></a>
        <a href="" target='_blank'><img src={art3.src} alt="site img" /></a>
        <a href="" target='_blank'><img src={art4.src} alt="site img" /></a>
        <a href="" target='_blank'><img src={art5.src} alt="site img" /></a>
        <a href="" target='_blank'><img src={art6.src} alt="site img" /></a>
        <a href="" target='_blank'><img src={art7.src} alt="site img" /></a>
        <a href="" target='_blank'><img src={art8.src} alt="site img" /></a>
        <a href="" target='_blank'><img src={art9.src} alt="site img" /></a>
      </div>
      <Link href={'/web-design'} className={styles.seeMore}>მეტის ნახვა</Link>
      <button
        className={styles.toggleBtn}
        onClick={() => setIsOpen(prev => !prev)} >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="12.674" height="11.131" viewBox="0 0 12.674 11.131">
            <path d="M3.87-12.278H5.994L1.082-6.91,6.337-1.147H4.214L.032-5.761-4.189-1.147H-6.337L-1.053-6.91l-4.906-5.368h2.145L.04-8.027Z"
                  transform="translate(6.337 12.278)" fill="rgba(0,0,0,0.3)"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <path d="M9.29,13.29,4,18.59V17a1,1,0,0,0-2,0v4a1.015,1.015,0,0,0,1,1H7a1,1,0,0,0,0-2H5.41l5.3-5.29a1,1,0,1,0-1.42-1.42ZM5.41,4H7A1,1,0,0,0,7,2H3A1.015,1.015,0,0,0,2,3V7A1,1,0,0,0,4,7V5.41l5.29,5.3a1,1,0,1,0,1.42-1.42ZM21,16a1,1,0,0,0-1,1v1.59l-5.29-5.3a1,1,0,0,0-1.42,1.42L18.59,20H17a1,1,0,0,0,0,2h4a1.015,1.015,0,0,0,1-1V17A1,1,0,0,0,21,16Zm.92-13.38A1.015,1.015,0,0,0,21,2H17a1,1,0,0,0,0,2h1.59l-5.3,5.29a1,1,0,1,0,1.42,1.42L20,5.41V7a1,1,0,0,0,2,0V3a1,1,0,0,0-.08-.38Z"
                  transform="translate(-2 -2)" fill="rgba(0,0,0,0.3)"/>
          </svg>
        )}
      </button>
    </div>
  );
}