import styles from './banner.module.css';
import HeaderList from '../HeaderList/HeaderList';

export default function BannerThree() {
  return (
    <div className={styles.thirdBanner}>
      <div className={styles.thirdText}>
        <p><span>მოძებნე შენზე მორგებული</span><span>გადაწყვეტილება</span></p>
        <p>
          საიმედო ჰოსტინგი შენს საჭიროებებსა და ზრდაზე მორგებული. <br /><br />
          მაღალი სიჩქარე, უსაფრთხოება და მუდმივი მხარდაჭერა — ყველაფერი ერთ სივრცეში.
        </p>
      </div>
      <HeaderList />
    </div>
  );
}