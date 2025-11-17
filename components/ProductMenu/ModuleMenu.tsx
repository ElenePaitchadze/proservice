import { IProdMenu } from "./ProductMenuData";
import { useTranslations, useLocale } from 'next-intl';
import { Link } from "@/i18n/navigation";
import styles from './productMenu.module.css';
import ModuleCard from "../ModuleCard/ModuleCard";
import banks1 from '@/img/banks1.svg';

export default function ModuleMenu({ data }: { data: IProdMenu }) {
  const locale = useLocale();      
  const t = useTranslations('HomePage');

  return (
    <div className={styles.modules}>
      <ModuleCard title1="ბარათით" title2="გადახდა" img={banks1} href='/.' />
      <ModuleCard title1="განვადება" title2="" img={banks1} href='/.' />
      <ModuleCard title1="მარკეტინგის" title2="ფლაგინები" img={banks1} href='/.' />
      <ModuleCard title1="ტრანსპორტირება" title2="" img={banks1} href='/.' />
    </div>
  );
}
