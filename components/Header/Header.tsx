'use client';
import logo from '@/img/logo.svg';
import styles from './header.module.css';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from '../LanguageSwitcher';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import menuicon1 from '@/img/menuIcon1.jpg';
import menuicon2 from '@/img/menuIcon2.jpg';
import ProdMenu from '../ProductMenu/ProductMenu';

const aboutUsMenu = [
  { name: 'Proservice-ს შესახებ',
    img: menuicon1,
    children: {
      1: { name: 'კომპანიის ისტორია', href: '/' },
      2: { name: 'სიახლეები', href: '/' },
      3: { name: 'ღონისძიებები', href: '/' },
      4: { name: 'ბლოგი', href: '/' },
    }
  },
  { name: 'უსაფრთხოება',
    img: menuicon2,
    children: {
      1: { name: 'წესები', href: '/' },
      2: { name: 'დახმარება', href: '/' },
      3: { name: 'კონტაქტი', href: '/' },
    }
  },
];

export default function Header() {
  // const locale = useLocale();      
  const t = useTranslations('HomePage');
  const [openMenu, setOpenMenu] = useState<"products" | "about" | null>(null);

  const toggleMenu = (menu: "products" | "about") => {
    setOpenMenu(prev => (prev === menu ? null : menu));
  };

  return (
    <header className="Container">
      <div className="content header-content">
        <Link href='/' className={styles.logo}>
          <img src={logo.src} alt="Pro-Service Logo" />
        </Link>
        <nav className={styles.menu}>
          <div className={`${styles.menuItem} ${openMenu === "products" ? styles.active : ""}`}>
              <div className={styles.menuHead} onClick={() => toggleMenu("products")}>
                  <span>{t('products')}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.562" height="4.653" viewBox="0 0 7.562 4.653">
                      <path d="M8.425,12.989l3.606,3.665,3.606-3.665a.562.562,0,0,0,0-.814A.528.528,0,0,0,15.23,12h-6.4a.576.576,0,0,0-.407.989Z" transform="translate(-8.25 -12)" />
                  </svg>
              </div>
              <div className={styles.prodMenu}>
                <ProdMenu />
              </div>
          </div>
          <div className={styles.menuItem}>
            <Link href='/help'>{t('help')}</Link>
          </div>
          <div className={`${styles.menuItem} ${openMenu === "about" ? styles.active : ""}`}>
            <div className={styles.menuHead} onClick={() => toggleMenu("about")}>
              <span>{t('aboutUs')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="7.562" height="4.653" viewBox="0 0 7.562 4.653">
                <path d="M8.425,12.989l3.606,3.665,3.606-3.665a.562.562,0,0,0,0-.814A.528.528,0,0,0,15.23,12h-6.4a.576.576,0,0,0-.407.989Z" transform="translate(-8.25 -12)" />
              </svg>
            </div>
            <div className={styles.aboutUsMenu}>
              {aboutUsMenu.map((section, index) => (
                <div key={index} className={styles.menuSection}>
                  <p>
                    <img src={section.img.src} alt="menu icon" />
                    <span>{section.name}</span>
                  </p>
                  <ul className={styles.menuList}>
                    {Object.values(section.children).map((child, idx) => (
                      <li key={idx}>
                        <Link href={child.href} className={styles.menuLink}>{child.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </nav>
        <div className={styles.headerActions}>
          <a href="tel: +995 32 2 43 00 44">+995 32 2 43 00 44</a>
          <LanguageSwitcher />
          <Link href='/login' className={styles.login}>{t('login')}</Link>
        </div>
      </div>
    </header>
  )
}