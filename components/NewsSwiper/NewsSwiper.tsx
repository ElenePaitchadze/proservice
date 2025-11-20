'use client';
import styles from './newsswiper.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import NewsCard from '../NewsCard/NewsCard';

export default function NewsSwiper({ news }: { news: any[] }) {
  return (
    <section className="Container newsSwiperCont">
      <div className="content">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={18}
          slidesPerView={'auto'}
          // navigation
          // pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className={styles.newsSwiper}>
          {news.map((item) => (
            <SwiperSlide key={item.id}>
              <NewsCard news={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
