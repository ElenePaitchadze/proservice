'use client';
import { useState } from 'react';
import styles from './infopreview.module.css';
import DomainSearch from '../DomainSearch/DomainSearch';

import domainIcon from '@/img/icons/domain.png';
import transferIcon from '@/img/icons/transfer.png';
import contractIcon from '@/img/icons/contract.png';

export default function DomainInfo() {
  const [isOpen, setIsOpen] = useState(false);
  
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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <path d="M9.29,13.29,4,18.59V17a1,1,0,0,0-2,0v4a1.015,1.015,0,0,0,1,1H7a1,1,0,0,0,0-2H5.41l5.3-5.29a1,1,0,1,0-1.42-1.42ZM5.41,4H7A1,1,0,0,0,7,2H3A1.015,1.015,0,0,0,2,3V7A1,1,0,0,0,4,7V5.41l5.29,5.3a1,1,0,1,0,1.42-1.42ZM21,16a1,1,0,0,0-1,1v1.59l-5.29-5.3a1,1,0,0,0-1.42,1.42L18.59,20H17a1,1,0,0,0,0,2h4a1.015,1.015,0,0,0,1-1V17A1,1,0,0,0,21,16Zm.92-13.38A1.015,1.015,0,0,0,21,2H17a1,1,0,0,0,0,2h1.59l-5.3,5.29a1,1,0,1,0,1.42,1.42L20,5.41V7a1,1,0,0,0,2,0V3a1,1,0,0,0-.08-.38Z"
                  transform="translate(-2 -2)" fill="#f2f2f2"/>
          </svg>
        )}
      </button>
    </div>
  );
}