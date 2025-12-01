'use client';
import { useState } from 'react';
import styles from './infopreview.module.css';
import { packagesData, pluginData } from '../Packages/packagesData';
import PackageCard from '../PackageCard/PackageCard';
import ModuleCard from '../ModuleCard/ModuleCard';

import directadmin from '@/img/icons/directAdmin.png';
import cpanel from '@/img/icons/cpanel.png';
import wordpress from '@/img/icons/wordpress.png';
import plugins from '@/img/icons/plugins.png';

export default function HostingInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('DirectAdmin');

  const currentCategory = packagesData.find(
    (item) => item.name === selected
  );
  
  return (
    <div className={`${styles.hostingCard} ${isOpen ? styles.open : ''}`}>
      <div>
        <p>ჰოსტინგი</p>
        <p>პროექტი ონლაინ რამდენიმე Click-ით</p>
      </div>
      <div className={styles.packagesHead}>
        <button onClick={() => setSelected('DirectAdmin')} className={selected === 'DirectAdmin' ? styles.active : ''}>
          <span>DirectAdmin</span>
          <img src={directadmin.src} alt="icon" />
        </button>
        <button onClick={() => setSelected('cPanel')} className={selected === 'cPanel' ? styles.active : ''}>
          <span>cPanel</span>
          <img src={cpanel.src} alt="icon" />
        </button>
        <button onClick={() => setSelected('Wordpress')} className={selected === 'Wordpress' ? styles.active : ''}>
          <span>Wordpress</span>
          <img src={wordpress.src} alt="icon" />
        </button>
        <button onClick={() => setSelected('Plugins')} className={selected === 'Plugins' ? styles.active : ''}>
          <span>Plugins</span>
          <img src={plugins.src} alt="icon" />
        </button>
      </div>
      <div className={styles.packages}>
        {selected === 'Plugins' ? (
          <div className={styles.modules}>
            {pluginData?.children.map((child) => (
              <ModuleCard key={child.id} 
              title1={child.title1} title2={child.title2} 
              img={child.img} href={child.href} card1={true} />
            ))}
          </div>
        ) : (
          currentCategory?.children.slice(0, 4).map((child) => (
            <PackageCard key={child.id} data={child} category="info" />
          ))
        )}
      </div>
      <button
        className={styles.toggleBtn}
        onClick={() => setIsOpen(prev => !prev)} >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="12.674" height="11.131" viewBox="0 0 12.674 11.131">
            <path d="M3.87-12.278H5.994L1.082-6.91,6.337-1.147H4.214L.032-5.761-4.189-1.147H-6.337L-1.053-6.91l-4.906-5.368h2.145L.04-8.027Z"
                  transform="translate(6.337 12.278)" fill="#1492e6"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <path d="M9.29,13.29,4,18.59V17a1,1,0,0,0-2,0v4a1.015,1.015,0,0,0,1,1H7a1,1,0,0,0,0-2H5.41l5.3-5.29a1,1,0,1,0-1.42-1.42ZM5.41,4H7A1,1,0,0,0,7,2H3A1.015,1.015,0,0,0,2,3V7A1,1,0,0,0,4,7V5.41l5.29,5.3a1,1,0,1,0,1.42-1.42ZM21,16a1,1,0,0,0-1,1v1.59l-5.29-5.3a1,1,0,0,0-1.42,1.42L18.59,20H17a1,1,0,0,0,0,2h4a1.015,1.015,0,0,0,1-1V17A1,1,0,0,0,21,16Zm.92-13.38A1.015,1.015,0,0,0,21,2H17a1,1,0,0,0,0,2h1.59l-5.3,5.29a1,1,0,1,0,1.42,1.42L20,5.41V7a1,1,0,0,0,2,0V3a1,1,0,0,0-.08-.38Z"
                  transform="translate(-2 -2)" fill="#1492e6"/>
          </svg>
        )}
      </button>
    </div>
  );
}