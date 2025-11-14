import { IProdMenu } from "./ProductMenuData";
import { Link } from "@/i18n/navigation";
import styles from './productMenu.module.css';
import topIcon from '@/img/topicons.png';
import bottomIcon from '@/img/bottomicon.png';
import firstMenuImg from'@/img/firstMenuImg.png';

export default function ServiceMenu({ data }: { data: IProdMenu }) {
  return (
    <div className={styles.servicegrid}>
      <div id={styles.service1}>
        <p><span>ვებ</span><span>დიზაინი</span></p>
        <img src={topIcon.src} alt="icon" />
        <img src={firstMenuImg.src} alt="image" />
        <img src={bottomIcon.src} alt="icon" />
      </div>
    </div>
  );
}
