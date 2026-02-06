import styles from './banner.module.css';
import { Link } from '@/i18n/navigation';
import arrow from '@/img/arrowright.png';
import DomainSearch from '../DomainSearch/DomainSearch';

export default function BannerOne() {
  return (
    <div className={styles.firstBannerCont}>
      <div className={styles.firstBanner}>
        <div className={styles.head}>
          <p>შეამოწმე</p>
          <p>დომენის ხელმისაწვდომობა</p>
        </div>
        <DomainSearch />
        <div className={styles.compare}>
          <div>
            <span>.GE</span>
            <span><span>50₾</span> წელი</span>
          </div>
          <div>
            <span>.COM.GE</span>
            <span><span>30₾</span> წელი</span>
          </div>
          <div>
            <span>.COM</span>
            <span><span>70₾</span> წელი</span>
          </div>
          <div>
            <span>.NET</span>
            <span><span>80₾</span> წელი</span>
          </div>
          <Link href={'/'} className={styles.compareLink}>
            <span>ფასების შედარება</span>
            <img src={arrow.src} alt="arrow icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}