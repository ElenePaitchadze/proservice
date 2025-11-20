'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { useRef } from 'react';
import styles from './portfolio.module.css';
import PortfolioCard from '../PortfolioCard/PortfolioCard';

export default function Portfolio({ portfolios }: { portfolios: any }) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className={styles.portfolioCont}>
      <div className={styles.portfolio}>
        <p>პორტფოლიო</p>
        <div className={styles.navButtons}>
          <button ref={prevRef} className={styles.prevBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26.548" height="26.548" viewBox="0 0 26.548 26.548">
              <circle cx="11" cy="11" r="11" transform="translate(2.397 2)" />
              <path d="M3.375,16.649A13.274,13.274,0,1,1,16.649,29.923,13.274,13.274,0,0,1,3.375,16.649Zm13.571,5.831a1.021,1.021,0,0,0,.005-1.444L13.613,17.67h8.524a1.021,1.021,0,1,0,0-2.042H13.613l3.339-3.365A1.022,1.022,0,0,0,15.5,10.825L10.434,15.93a1.021,1.021,0,0,0,0,1.439L15.5,22.474a1.021,1.021,0,0,0,1.446.005Z" transform="translate(-3.375 -3.375)" />
            </svg>
          </button>
          <button ref={nextRef} className={styles.nextBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26.548" height="26.548" viewBox="0 0 26.548 26.548">
              <circle cx="11" cy="11" r="11" transform="translate(2.397 2)" />
              <path d="M29.923,16.649A13.274,13.274,0,1,0,16.649,29.923,13.274,13.274,0,0,0,29.923,16.649ZM16.352,22.479a1.021,1.021,0,0,1-.005-1.444l3.338-3.365H11.161a1.021,1.021,0,1,1,0-2.042h8.524l-3.339-3.365A1.022,1.022,0,0,1,17.8,10.825l5.066,5.105a1.021,1.021,0,0,1,0,1.439L17.8,22.474a1.021,1.021,0,0,1-1.446.005Z" transform="translate(-3.375 -3.375)" />
            </svg>
          </button>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={'auto'}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2 }
          }}
          className="portfolioSwiper"
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}>
          {portfolios.map((item: any) => (
            <SwiperSlide key={item.id}>
              <PortfolioCard logo={item.logo} img={item.img} href={item.href} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
