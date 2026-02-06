'use client';
import { useState } from 'react';
import styles from './packages.module.css';
import { packagesData } from './packagesData';
import directadmin from '@/img/icons/directAdmin.png';
import cpanel from '@/img/icons/cpanel.png';
import wordpress from '@/img/icons/wordpress.png';
import plugins from '@/img/icons/plugins.png';
import PackageCard from '../PackageCard/PackageCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Packages() {
  const [selected, setSelected] = useState('DirectAdmin');

  const currentCategory = packagesData.find(
    (item) => item.name === selected
  );

  return (
    <section className={`Container ${styles.packagesCont}`}>
      <div className='content1'>
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
          <a href="" target='_blank'>
            <span>Plugins</span>
            <img src={plugins.src} alt="icon" />
          </a>
        </div>
        <div className={styles.packages}>
          {currentCategory?.children.slice(0, 4).map((child) => (
            <PackageCard key={child.id} data={child} category={selected} />
          ))}
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={'auto'}
          className={styles.packagesSwiper}>
          {currentCategory?.children.map((child) => (
            <SwiperSlide key={child.id}>
              <PackageCard data={child} category={selected} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section> 
  );
}