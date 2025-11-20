'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import styles from './banner.module.css';
import BannerOne from './BannerOne';

export default function Banner() {
  return (
    <section className={`Container ${styles.bannerCont}`}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        // navigation
        // pagination={{ clickable: true }}
         className={`content ${styles.bannerSwiper}`}>
          <SwiperSlide><BannerOne /></SwiperSlide>
      </Swiper>
    </section>
  );
}