import { IProdMenu } from "./ProductMenuData";
import { useTranslations, useLocale } from 'next-intl';
import { Link } from "@/i18n/navigation";
import styles from './productMenu.module.css';
import topIcon from '@/img/topicons.png';
import bottomIcon from '@/img/bottomicon.png';
import firstMenuImg from'@/img/firstMenuImg.png';
import secondMenuImg from'@/img/secondMenuImg.png';
import thirdMenuImg from'@/img/thirdMenuImg.png';
import fourthMenuImg from'@/img/fourthMenuImg.png';
import fifthMenuImg from'@/img/fifthMenuImg.png';
import sixthMenuImg from'@/img/sixthMenuImg.png';
import googleImg from '@/img/google.png';

export default function ServiceMenu({ data }: { data: IProdMenu }) {
  const locale = useLocale();      
  const t = useTranslations('HomePage');

  return (
    <div className={styles.servicegrid}>
      <p>სერვისები</p>
      <div>
        <div id={styles.service1}>
          <p><span>ვებ</span><span>დიზაინი</span></p>
          <img src={topIcon.src} alt="icon" />
          <img src={firstMenuImg.src} alt="image" />
          <img src={bottomIcon.src} alt="icon" />
        </div>
        <div id={styles.service2}>
          <p>IT მომსახურება</p>
          <span>B2B კომპიუტერული მომსახურების სერვისი</span>
          <div>
            <img src={secondMenuImg.src} alt="image" />
            <span>ITSERVICE.GE</span>
          </div>
        </div>
        <div id={styles.service3}>
          <p>საიტის შემქმნელი</p>
          <img src={thirdMenuImg.src} alt="image" />
        </div>
        <div id={styles.service4}>
          <p>მოგვანდე</p>
          <div className={styles.typeWrap}>
            <div className={styles.typeTarget}><span>{'{ ვებ'}</span><span>{'გვერდი }'}</span></div>
            <span>განახლებისთვის!</span>
          </div>
          <img src={fourthMenuImg.src} alt="image" />
        </div>
        <div id={styles.service5}>
          <img src={googleImg.src} alt="img" />
          <img src={fifthMenuImg.src} alt="img" />
        </div>
        <div id={styles.service6}>
          <p>სასტუმროების</p>
          <p>მართვის სისტემა</p>
          <div>
            <img src={sixthMenuImg.src} alt="image" />
            <div>HMS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
