'use clinet';
import styles from './productMenu.module.css';
import { Link } from '@/i18n/navigation';

export default function MobSupportMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
  return (
    <>
      <div className={`${styles.mobChild} ${isOpen ? 'show' : ''}`}>
        <div className={styles.mobChildLeft} onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="7.367" height="11.32" viewBox="0 0 7.367 11.32">
            <path d="M5.651,0a.7.7,0,0,0-.517.242L.292,5.5a1.284,1.284,0,0,0-.1,1.483.688.688,0,0,0,1.138.137L5.651,2.411,9.978,6.955a.685.685,0,0,0,.594.229.78.78,0,0,0,.544-.387,1.27,1.27,0,0,0,.2-.8A1.161,1.161,0,0,0,11,5.262L6.16.181A.673.673,0,0,0,5.651,0Z" transform="translate(0 11.32) rotate(-90)" fill="#1993ff"/>
          </svg>
        </div>
        <div className={styles.mobChildRight}>
          <Link href={'https://dev.proservice.ge/hosting/support-request.html'} className={styles.mobChildMenu}>დახმარების მოთხოვნა</Link>
          <Link href={'/hosting-platforms'} className={styles.mobChildMenu}>ჰოსტინგის პლათფორმები</Link>
          <Link href={'/hosting-management'} className={styles.mobChildMenu}>ჰოსტინგის მართვა</Link>
          <Link href={'/free-hosting'} className={styles.mobChildMenu}>უფასო ჰოსტინგი</Link>
          <Link href={'/hosting-prices'} className={styles.mobChildMenu}>ფასიანი ჰოსტინგი</Link>
          <Link href={'/10-questions-for-hosting'} className={styles.mobChildMenu}>10 კითხვა ჰოსტინგისათვის</Link>
          <Link href={'https://dev.proservice.ge/hosting/knowledge-base.html'} className={styles.mobChildMenu}>ცოდნის ბაზა</Link>
          <Link href={'/'} className={styles.mobChildMenu}>ზარის მოთხოვნა</Link>
        </div>
      </div>
    </>
  );
}