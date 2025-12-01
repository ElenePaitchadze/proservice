import { IProdMenu } from "./ProductMenuData";
import { useTranslations, useLocale } from 'next-intl';
import { Link } from "@/i18n/navigation";
import styles from './productMenu.module.css';
import ModuleCard from "../ModuleCard/ModuleCard";
import bank1 from '@/img/bank1.png';
import bank2 from '@/img/bank2.png';
import bank3 from '@/img/bank3.svg';
import bank4 from '@/img/bank4.svg';

export default function ModuleMenu({ data }: { data: IProdMenu }) {
  const locale = useLocale();      
  const t = useTranslations('HomePage');

  return (
    <div className={styles.modules}>
      <ModuleCard title1="ბარათით" title2="გადახდა" img={bank1} href='/.' card1={false} />
      <ModuleCard title1="განვადება" title2="" img={bank2} href='/.' card1={false} />
      <ModuleCard title1="მარკეტინგის" title2="ფლაგინები" img={bank3} href='/.' card1={false} />
      <ModuleCard title1="ტრანსპორტირება" title2="" img={bank4} href='/.' card1={false} />
    </div>
  );
}
