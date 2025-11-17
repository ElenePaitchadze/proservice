import { StaticImageData } from 'next/image';
import { Link } from '@/i18n/navigation';
import styles from './modulecard.module.css';

export default function ModuleCard({ title1, title2, img, href }: 
  { title1: string, title2: string, img: StaticImageData, href: string }) {

  return (
    <Link href={href} className={styles.card}>
      <div className={styles.titles}>
        <p>{title1}</p>
        <p>{title2}</p>
      </div>

      <img className={styles.image} src={img.src} alt="image" />

      <div className={styles.more}>
        <span>გაიგე მეტი</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="17.811" height="10.121" viewBox="0 0 17.811 10.121">
          <path d="M20,12H4m16,0L16,8m4,4-4,4" transform="translate(-3.25 -6.939)" />
        </svg>
      </div>
    </Link>
  )
}
