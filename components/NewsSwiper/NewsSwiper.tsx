'use client';
import styles from './newsswiper.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import NewsCard from '../NewsCard/NewsCard';
import { Link } from '@/i18n/navigation';

export default function NewsSwiper({ news }: { news: any[] }) {
  return (
    <section className="Container newsSwiperCont">
      <div className="content1">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={18}
          slidesPerView={'auto'}
          className={styles.newsSwiper}>
          {news.map((item) => (
            <SwiperSlide key={item.id} className={styles.newsSlide}>
              <NewsCard news={item} direction='news' />
            </SwiperSlide>
          ))}
        </Swiper>
        <Link href={'/news'}>ყველა სიახლე</Link>
      </div>
    </section>
  );
}
