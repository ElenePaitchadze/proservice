'use client';
import { Link } from "@/i18n/navigation";
import styles from './productMenu.module.css';
import { useLocale } from 'next-intl';
import { IMenuLinks } from './ProductMenuData'

interface MenuLinkProps extends IMenuLinks {
  i: number;
}

export default function MenuLink({ i, img, name, name_en, desc, href, soon }: MenuLinkProps) {
  const locale = useLocale();
  const displayName = locale === 'en' && name_en ? name_en : name;

  return (
    <Link key={i} href={href} className={soon ? `${styles.soon}`: ''}>
      <div className={styles.icon}><img src={img.src} alt={displayName} /></div>
      <div className={styles.desc}>
        <p className={styles.title}>{displayName}</p>
        <p className={styles.text}>{desc}</p>
      </div>
      <span>Coming Soon...</span>
    </Link>
  );
}
