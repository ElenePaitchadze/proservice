'use client';
import { useState } from 'react';
import styles from './infopreview.module.css';
import ServerCard from '../ServerCard/ServerCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const serverData = [
  {
    type: 'virtual',
    servers: [
      {
        id: 1,
        name: "VPS - P",
        price: 120,
        href: '',
        services: ['CPU - 1 x 1.5 Ghz', 'RAM - 2 GB', 'HDD - 20 Gb', 'RAID - 10', 'Free IPv4 address - 1', 'Data transfer - Unlimited', 'Speed - 1Gbps/50Mbps shared']
      },
      {
        id: 2,
        name: "VPS - L",
        price: 180,
        href: '',
        services: ['CPU - 1 x 2 Ghz', 'RAM - 4 GB', 'HDD - 40 Gb', 'RAID - 10', 'Free IPv4 address - 1', 'Data transfer - Unlimited', 'Speed - 1Gbps/50Mbps shared']
      }
    ]
  },
  {
    type: 'physical',
    servers: [
      {
        id: 5,
        name: "Premium",
        price: 900,
        href: '',
        services: ['CPU-2 x Six Core Xeon E5-2620 v2', 'RAM - 48 GB', 'HDD - 4 x 500 Gb', 'RAID - 0/1/10/5/', 'Speed - 1Gbps/50Mbps shared', 'Free IPv4 address - 1', 'Data transfer - Unlimited', ]
      },
      {
        id: 4,
        name: "Advanced",
        price: 1200,
        href: '',
        services: ['CPU-2 x Six Core Xeon E5-2640 v3', 'RAM - 96 GB', 'HDD - 4 x 1000 Gb', 'RAID - 0/1/10/5/', 'Speed - 1Gbps/50Mbps shared', 'Free IPv4 address - 1', 'Data transfer - Unlimited']
      }
    ]
  },
];

export default function ServerInfo() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`${styles.serverCard} ${isOpen ? styles.open : ''}`}>
      <div>
        <p>ვირტუალური & ფიზიკური სერვერები</p>
        <p>მაღალი წარმადობის პროექტებ სჭირდება კომპლექსური გადაწყვეტილებები</p>
      </div>
      <div className={styles.serverTypes}>
        {serverData.map(group => (
          <div key={group.type}>
            <p className={styles.type}>{group.type === 'virtual' ? 'ვირტუალური სერვერები' : 'ფიზიკური სერვერები'}</p>
            <Swiper
              spaceBetween={20}
              slidesPerView={'auto'}
              className={styles.serverSwiper}>
                {group.servers.map((server) => (
                  <SwiperSlide key={server.id} className={styles.serverSlide}>
                    <ServerCard data={server} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        ))}
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