'use client';
import { useState, useEffect } from 'react';
import styles from './infopreview.module.css';
import DomainSearch from '../DomainSearch/DomainSearch';

import domainIcon from '@/img/icons/domain.png';
import transferIcon from '@/img/icons/transfer.png';
import contractIcon from '@/img/icons/contract.png';

export default function DomainInfo() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');

    const handleScroll = () => {
      if (isOpen && media.matches) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    };

    handleScroll();

    media.addEventListener('change', handleScroll);

    return () => {
      document.body.classList.remove('no-scroll');
      media.removeEventListener('change', handleScroll);
    };
  }, [isOpen]);
  
  return (
    <div className={`${styles.domainCard} ${isOpen ? styles.open : ''}`}>
      <div>
        <p>დომენები</p>
        <p>შეარჩიე შენთვის სასურველი დომენური სახელწოდება</p>
      </div>
      <div className={styles.searchCont}><DomainSearch /></div>
      <div className={styles.domainGrid}>
        <div>
          <div><img src={domainIcon.src} alt="icon" /></div>
          <div>
            <span>დომენის რეგისტრაცია</span>
            <span>შეარჩიე და შეიძინე სასურველი დომენი</span>
          </div>
        </div>
        <div>
          <div><img src={transferIcon.src} alt="icon" /></div>
          <div>
            <span>დომენის ტრანსფერი</span>
            <span>გადმოიტანე დომენი დაცულ დატა ცენტრში</span>
          </div>
        </div>
        <div>
          <div><img src={contractIcon.src} alt="icon" /></div>
          <div>
            <span>დომენის რეგისტრაციის ხელშეკრულებაა</span>
          </div>
        </div>
        <div>
          <div><img src={contractIcon.src} alt="icon" /></div>
          <div>
            <span>დომენის რეგისტრაციის წესები და პირობები</span>
          </div>
        </div>
        <div>
          <div><img src={contractIcon.src} alt="icon" /></div>
          <div>
            <span>პერსონალური დაცვის პოლიტიკა</span>
          </div>
        </div>
        <div>
          <div><img src={domainIcon.src} alt="icon" /></div>
          <div>
            <span>რატომ დომენი ჩვენთან?</span>
            <span>დაცული საერთაშორისო სტანდარტები</span>
          </div>
        </div>
      </div>
      <button
        className={styles.toggleBtn}
        onClick={() => setIsOpen(prev => !prev)} >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="12.674" height="11.131" viewBox="0 0 12.674 11.131">
            <path d="M3.87-12.278H5.994L1.082-6.91,6.337-1.147H4.214L.032-5.761-4.189-1.147H-6.337L-1.053-6.91l-4.906-5.368h2.145L.04-8.027Z"
                  transform="translate(6.337 12.278)" fill="#fff"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="8.638" height="14.037" viewBox="0 0 8.638 14.037">
            <path d="M8.574,13.836l6.695,6.8,6.695-6.8a1.044,1.044,0,0,0,0-1.512A.98.98,0,0,0,21.208,12H9.33a1.069,1.069,0,0,0-.756,1.836Z" 
                  transform="translate(-12 22.287) rotate(-90)" fill="#fff"/>
          </svg>
        )}
      </button>
    </div>
  );
}