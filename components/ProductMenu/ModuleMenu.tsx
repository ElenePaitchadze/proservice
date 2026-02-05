'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IProdMenu } from "./ProductMenuData";
import { useTranslations, useLocale } from 'next-intl';
import { Link } from "@/i18n/navigation";
import styles from './productMenu.module.css';
import ModuleCard from "../ModuleCard/ModuleCard";
import bank1 from '@/img/bank1.png';
import bank2 from '@/img/bank2.png';
import bank3 from '@/img/bank3.svg';
import bank4 from '@/img/bank4.svg';

const modules = [
  { title1: "ბარათით", title2: "გადახდა", img: bank1, href: 'https://billing.proservice.ge/cart.php?a=confproduct&i=1' },
  { title1: "განვადება", title2: "", img: bank2, href: 'https://billing.proservice.ge/cart.php?a=confproduct&i=2' },
  { title1: "მარკეტინგის", title2: "ფლაგინები", img: bank3, href: 'https://billing.proservice.ge/cart.php?a=confproduct&i=3' },
  { title1: "ტრანსპორტირება", title2: "", img: bank4, href: 'https://billing.proservice.ge/cart.php?a=confproduct&i=4' },
];

export default function ModuleMenu({ data }: { data: IProdMenu }) {
  const locale = useLocale();      
  const t = useTranslations('HomePage');

  return (
    <>
      <div className={styles.modules}>
        <ModuleCard title1="ბარათით" title2="გადახდა" img={bank1} href='https://billing.proservice.ge/cart.php?a=confproduct&i=1' card1={false} />
        <ModuleCard title1="განვადება" title2="" img={bank2} href='https://billing.proservice.ge/cart.php?a=confproduct&i=2' card1={false} />
        <ModuleCard title1="მარკეტინგის" title2="ფლაგინები" img={bank3} href='https://billing.proservice.ge/cart.php?a=confproduct&i=3' card1={false} />
        <ModuleCard title1="ტრანსპორტირება" title2="" img={bank4} href='https://billing.proservice.ge/cart.php?a=confproduct&i=4' card1={false} />
      </div>
      <div className={styles.mobModules}>
        <Swiper
          spaceBetween={0}
          slidesPerView={'auto'}
          className={styles.moduleSwiper}>
            {modules.map((mod, i) => (
              <SwiperSlide key={i} className={styles.moduleSlide}>
                <ModuleCard {...mod} card1={false} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}
