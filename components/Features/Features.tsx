import styles from './features.module.css';

import feature1 from '@/img/features/feature1.png';
import feature2 from '@/img/features/feature2.png';
import feature3 from '@/img/features/feature3.png';
import feature4 from '@/img/features/feature4.png';
import feature5 from '@/img/features/feature5.png';
import feature6 from '@/img/features/feature6.png';
import feature7 from '@/img/features/feature7.png';
import feature8 from '@/img/features/feature8.png';
import feature9 from '@/img/features/feature9.png';

const features = [
  feature1, feature2, feature3,
  feature4, feature5, feature6,
  feature7, feature8, feature9
];

export default function Features() {
  return (
    <section className={`Container ${styles.features}`}>
      <div className={`content ${styles.marquee}`}>
        <div className={styles.track}>
          {features.map((f, i) => (
            <a key={i} href="#" target="_blank">
              <img src={f.src} alt="" />
            </a>
          ))}

          {features.map((f, i) => (
            <a key={`dup-${i}`} href="#" target="_blank">
              <img src={f.src} alt="" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
