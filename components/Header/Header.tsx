'use client';
import logo from '@/img/logo.svg';
import styles from './header.module.css';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from '../LanguageSwitcher';
import MobMenu from '../MobMenu/MobMenu';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import menuicon1 from '@/img/menuIcon1.jpg';
import menuicon2 from '@/img/menuIcon2.jpg';
import ProdMenu from '../ProductMenu/ProductMenu';
import menu from '@/img/menu.svg';
import search from '@/img/search.svg';
import facebook from '@/img/facebook.svg';
import instagram from '@/img/instagram.svg';
import linkedin from '@/img/linkedin.svg';
import youtube from '@/img/youtube.svg';
import warning from '@/img/warning.svg';

const aboutUsMenu = [
  { name: 'Proservice-ს შესახებ',
    img: menuicon1,
    children: {
      1: { name: 'კომპანიის ისტორია', href: '/about-us' },
      2: { name: 'სიახლეები', href: '/news' },
      3: { name: 'ღონისძიებები', href: '/events' },
      4: { name: 'ბლოგი', href: '/blogs' },
    }
  },
  { name: 'უსაფრთხოება',
    img: menuicon2,
    children: {
      1: { name: 'წესები', href: '/terms' },
      2: { name: 'დახმარება', href: '/assistance' },
      3: { name: 'კონტაქტი', href: '/contact' },
    }
  },
];

const supportMenu = [
  { name: "დახმარების მოთხოვნა", href: 'https://dev.proservice.ge/hosting/support-request.html' },
  { name: "ჰოსტინგის პლათფორმები", href: '/hosting-platforms' },
  { name: "ჰოსტინგის მართვა", href: '/hosting-management' },
  { name: "უფასო ჰოსტინგი", href: '/free-hosting' },
  { name: "ფასიანი ჰოსტინგი", href: '/hosting-prices' },
  { name: "10 კითხვა ჰოსტინგისათვის", href: '/10-questions-for-hosting' },
  { name: "ცოდნის ბაზა", href: 'https://dev.proservice.ge/hosting/knowledge-base.html' },
];

export default function Header() {
  const t = useTranslations('HomePage');
  const [openMenu, setOpenMenu] = useState<"products" | "about" | "support" | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = (menu: "products" | "about" | "support") => {
    setOpenMenu(prev => (prev === menu ? null : menu));
  };

  // close menu when path changes
  // add no-scroll class when we open mobile menu
  useEffect(() => {
    setOpenMenu(null);
    setIsOpen(false); 
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <>
      <div className={`dropdownMenu ${isOpen ? 'openMenu' : ''}`}>
        <form action="" className={styles.findProduct}>
          <input type="text" placeholder="იპოვე პროდუქტი" name="productName" />
          <button><img src={search.src} alt="search icon" /></button>
        </form>
        <MobMenu />
        <a href="https://dev.proservice.ge/hosting/login.html" className={styles.mobLogin}>შესვლა</a>
        <a href="https://dev.proservice.ge/hosting/register.html" className={styles.mobRegister}>რეგისტრაცია</a>
        <div className={styles.mobActions}>
          <div className='mobSocials'>
            <a href="https://www.facebook.com/proservice.ge" target='_blank'><img src={facebook.src} alt="facebook icon" /></a>
            <a href="https://www.linkedin.com/company/proserviceglobal" target='_blank'><img src={linkedin.src} alt="linkedin icon" /></a>
            <a href="https://www.instagram.com/proservice.ge/" target='_blank'><img src={instagram.src} alt="facebook icon" /></a>
            <a href="https://www.youtube.com/channel/UCZhl2GLq8HPqZATsyMJ-9yg/featured" target='_blank'><img src={youtube.src} alt="facebook icon" /></a>
          </div>
        </div>
        <Link href={'/'} className={styles.warningLink}>
          <img src={warning.src} alt="warning icon" />
          <span>საზიარო პასუხისმგებლობა</span>
        </Link>
      </div>

      <header className="Container">
        <div className="content header-content">
          <img src={menu.src} alt="menu icon" className={styles.menuToggle} onClick={() => setIsOpen(prev => !prev)} />
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

            <div className={`${styles.menuItem} ${openMenu === "support" ? styles.active : ""}`}>
              <div className={styles.menuHead} onClick={() => toggleMenu("support")}>
                <span>{t('help')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="7.562" height="4.653" viewBox="0 0 7.562 4.653">
                  <path d="M8.425,12.989l3.606,3.665,3.606-3.665a.562.562,0,0,0,0-.814A.528.528,0,0,0,15.23,12h-6.4a.576.576,0,0,0-.407.989Z" transform="translate(-8.25 -12)" />
                </svg>
              </div>
              <div className={styles.supportMenu}>
                {supportMenu.map((item, index) => (
                  <Link href={item.href} key={index}>{item.name}</Link>
                ))}
              </div>
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
            <a href='https://dev.proservice.ge/hosting/login.html' className={styles.login}>{t('login')}</a>
          </div>
        </div>
      </header>
    </>
  );
}