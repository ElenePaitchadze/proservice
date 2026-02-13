"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import BannerOne from "./BannerOne";
import BannerTwo from "./BannerTwo";
import BannerThree from "./BannerThree";
import styles from "./banner.module.css";

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`Container ${styles.bannerCont}`}>
      <div className="content1">
        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          slidesPerView={1}
          speed={800}
          loop={true}
          effect="slide"
          autoplay={{ delay: 10000, disableOnInteraction: false, }}
          onSlideChange={(swiper) => { setActiveIndex(swiper.realIndex); }}
          className={styles.bannerSwiper}>
          <SwiperSlide><BannerOne /></SwiperSlide>
          <SwiperSlide><BannerTwo /></SwiperSlide>
          <SwiperSlide><BannerThree /></SwiperSlide>
        </Swiper>
        <div className={styles.progressWrapper}>
          {[0, 1, 2].map((index) => (
            <div key={index} 
              className={`${styles.progressItem} ${
              activeIndex === index ? styles.active : activeIndex > index ? styles.completed : ""}`}/>
          ))}
        </div>
      </div>
    </section>
  );
}
