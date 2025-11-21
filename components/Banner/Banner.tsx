'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // optional for fade effect
import { Navigation, Pagination, EffectFade } from 'swiper/modules';

import styles from './banner.module.css';
import BannerOne from './BannerOne';
import BannerTwo from './BannerTwo';
import BannerThree from './BannerThree';

export default function Banner() {
  return (
    <section className={`Container ${styles.bannerCont}`}>
      <Swiper
        modules={[Navigation, Pagination, EffectFade]} 
        spaceBetween={30}
        slidesPerView={1}
        grabCursor={true}
        speed={800} 
        effect="slide"
        loop={true} 
        // navigation
        // pagination={{ clickable: true }}
        className={`content ${styles.bannerSwiper}`}>
        <SwiperSlide><BannerOne /></SwiperSlide>
        <SwiperSlide><BannerTwo /></SwiperSlide>
        <SwiperSlide><BannerThree /></SwiperSlide>
      </Swiper>
    </section>
  );
}
