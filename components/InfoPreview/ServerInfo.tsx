'use client';
import { useState } from 'react';
import styles from './infopreview.module.css';
import ServerCard from '../ServerCard/ServerCard';

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
            <div className={styles.cards}>
              {group.servers.map(server => (
                <ServerCard key={server.id} data={server} />
              ))}
            </div>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <path d="M9.29,13.29,4,18.59V17a1,1,0,0,0-2,0v4a1.015,1.015,0,0,0,1,1H7a1,1,0,0,0,0-2H5.41l5.3-5.29a1,1,0,1,0-1.42-1.42ZM5.41,4H7A1,1,0,0,0,7,2H3A1.015,1.015,0,0,0,2,3V7A1,1,0,0,0,4,7V5.41l5.29,5.3a1,1,0,1,0,1.42-1.42ZM21,16a1,1,0,0,0-1,1v1.59l-5.29-5.3a1,1,0,0,0-1.42,1.42L18.59,20H17a1,1,0,0,0,0,2h4a1.015,1.015,0,0,0,1-1V17A1,1,0,0,0,21,16Zm.92-13.38A1.015,1.015,0,0,0,21,2H17a1,1,0,0,0,0,2h1.59l-5.3,5.29a1,1,0,1,0,1.42,1.42L20,5.41V7a1,1,0,0,0,2,0V3a1,1,0,0,0-.08-.38Z"
                  transform="translate(-2 -2)" fill="#fff"/>
          </svg>
        )}
      </button>
    </div>
  );
}