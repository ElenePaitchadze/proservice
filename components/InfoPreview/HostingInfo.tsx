'use client';
import { useState } from 'react';
import styles from './infopreview.module.css';
import { packagesData, pluginData } from '../Packages/packagesData';
import PackageCard from '../PackageCard/PackageCard';
import ModuleCard from '../ModuleCard/ModuleCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
      <div className={styles.mobpackages}>
        {selected == 'Plugins' ? (
          <Swiper
            spaceBetween={0}
            slidesPerView={'auto'}
            className='moduleSwiper'>
              {pluginData?.children.map((child) => (
                <SwiperSlide key={child.id} className='moduleSlide'>
                  <ModuleCard
                  title1={child.title1} title2={child.title2} 
                  img={child.img} href={child.href} card1={false} />
                </SwiperSlide>
              ))}
          </Swiper>
        ) : (
          <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            className={styles.packageSwiper}>
              {currentCategory?.children.map((child) => (
                <SwiperSlide key={child.id}>
                  <PackageCard data={child} category="info" />
                </SwiperSlide>
              ))}
          </Swiper>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="8.638" height="14.037" viewBox="0 0 8.638 14.037">
            <path d="M8.574,13.836l6.695,6.8,6.695-6.8a1.044,1.044,0,0,0,0-1.512A.98.98,0,0,0,21.208,12H9.33a1.069,1.069,0,0,0-.756,1.836Z" 
                  transform="translate(-12 22.287) rotate(-90)" fill="#1492e6"/>
          </svg>
        )}
      </button>
    </div>
  );
}