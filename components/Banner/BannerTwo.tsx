import styles from './banner.module.css';
import { Link } from '@/i18n/navigation';
import img from '@/img/site1.png';

export default function BannerTwo() {
  return (
    <div className={styles.SecondBanner}>
      <div className={styles.secondText}>
        <p><span>შენი ბერენდის სახე</span><span>ციფრული სამყაროში!</span></p>
        <p>უნიკალური დიზაინი, დახვეწილი სტილი და ტექნიკური სიზუსტე ერთ სივრცეში.</p>
        <Link href={'/web-design'}>ნამუშევრები</Link>
      </div>
      <img src={img.src} alt="img" />
    </div>
  );
}