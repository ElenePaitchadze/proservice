'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './serverroom.module.css';
import iso1 from '@/img/iso1.png';
import iso2 from '@/img/iso2.png';
import iso3 from '@/img/iso3.png';
import room1 from '@/img/room1.png';
import room2 from '@/img/room2.png';

const isoInfo = [
  {
    id: '1',
    name: 'ინფორმაციის ნაკადის კონტროლი',
    img: iso1,
    items: [
      'ინფორმაციის ნაკადის უსაფრთხოების მექანიზმი.',
      'პოტენციური გარღვევების იდენტიფიცირება.',
      'პროცესების 24/7 მონიტროინგი.'
    ]
  },
  {
    id: '2',
    name: 'Cloud ნაკადის კონტროლი',
    img: iso2,
    items: [
      'შენობაში მოქმედებს შეზღუდული დაშვების რეჟიმი.',
      'ოთხსაფეხურიანი უსაფრთხოების სისტემა.',
      'ქსელის & ტრაფიკის მონიტორინგი.'
    ]
  },
  {
    id: '3',
    name: 'ბრენდის სანდოობა',
    img: iso3,
    items: [
      '25+ წლიანი გამოცდილება.',
      'საერთაშორისო კომპანიების პარტნიორი (Cpanel, Site.pro,...)',
      'მონაცემთა დაცულობა და კონფიდენციალურობის პოლიტიკა.',
      'ბრენდის აღიარება ბაზარზე.'
    ]
  }
];

export default function ServerRoom() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const leftRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`Container ${styles.serverRoomCont}`}>
      <div className={`content ${styles.serverRoom}`}>
        <div className={styles.rightSide}>
          <p><b>მნიშვნელოვანია</b> იცოდე, სად ინახება შენი <b>ციფრული მონაცემები!</b></p>
          <div className={styles.iso}>
            {isoInfo.map((info, index) => (
              <div key={index} className={styles.isoSection}>
                <div onClick={() => toggle(index)} className={styles.header}>
                  <span>{info.name}</span>
                  <svg className={openIndex === index ? styles.open : ''} xmlns="http://www.w3.org/2000/svg" width="14.037" height="8.638" viewBox="0 0 14.037 8.638">
                    <path d="M8.574,13.836l6.695,6.8,6.695-6.8a1.044,1.044,0,0,0,0-1.512A.98.98,0,0,0,21.208,12H9.33a1.069,1.069,0,0,0-.756,1.836Z" transform="translate(-8.25 -12)" />
                  </svg>
                </div>
                <div className={`${styles.menuList} 
                  ${openIndex === index ? styles.openList : styles.closedList}`}>
                  <ul>
                    {info.items.map((child, idx) => (
                      <li key={idx}>{child}</li>
                    ))}
                  </ul>
                  <img src={info.img.src} alt="image" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.leftSide} ${visible ? styles.visible : ""}`} ref={leftRef}>
          <img src={room1.src} alt="room image" className={styles.img1} />
          <img src={room2.src} alt="room image" className={styles.img2} />
          <div className={styles.isoIcons}>
            <img src={iso1.src} alt="iso icon" />
            <img src={iso2.src} alt="iso icon" />
            <img src={iso3.src} alt="iso icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
