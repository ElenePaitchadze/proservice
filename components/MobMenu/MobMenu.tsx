'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './mobmenu.module.css';
import { Link } from '@/i18n/navigation';
import MobProdMenu from '../ProductMenu/MobProdMenu';
import MobAboutMenu from '../ProductMenu/MobAboutMenu';
import MobSupportMenu from '../ProductMenu/MobSupportMenu';

export default function MobMenu() {
  const [activeMenu, setActiveMenu] = useState<'products' | 'about' | 'support' | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setActiveMenu(null);
  }, [pathname]);

  return (
    <div className={styles.mobMenu}>
      <div className={styles.mobCat}
        onClick={() => setActiveMenu('products')}>
        <span>პროდუქტები</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="7.367" height="11.32" viewBox="0 0 7.367 11.32">
          <path d="M13.149,20.862a.7.7,0,0,1-.517-.242L7.79,15.361a1.284,1.284,0,0,1-.1-1.483.688.688,0,0,1,1.138-.137l4.326,4.712,4.326-4.544a.685.685,0,0,1,.594-.229.78.78,0,0,1,.544.387,1.27,1.27,0,0,1,.2.8,1.161,1.161,0,0,1-.314.736l-4.843,5.08A.673.673,0,0,1,13.149,20.862Z" transform="translate(-13.498 18.818) rotate(-90)" fill="#444" />
        </svg>
      </div>

      <div className={styles.mobCat}
        onClick={() => setActiveMenu('support')}>
        <span>დახმარება</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="7.367" height="11.32" viewBox="0 0 7.367 11.32">
          <path d="M13.149,20.862a.7.7,0,0,1-.517-.242L7.79,15.361a1.284,1.284,0,0,1-.1-1.483.688.688,0,0,1,1.138-.137l4.326,4.712,4.326-4.544a.685.685,0,0,1,.594-.229.78.78,0,0,1,.544.387,1.27,1.27,0,0,1,.2.8,1.161,1.161,0,0,1-.314.736l-4.843,5.08A.673.673,0,0,1,13.149,20.862Z" transform="translate(-13.498 18.818) rotate(-90)" fill="#444" />
        </svg>
      </div>

      <div className={styles.mobCat}
        onClick={() => setActiveMenu('about')}>
        <span>ჩვენ შესახებ</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="7.367" height="11.32" viewBox="0 0 7.367 11.32">
          <path d="M13.149,20.862a.7.7,0,0,1-.517-.242L7.79,15.361a1.284,1.284,0,0,1-.1-1.483.688.688,0,0,1,1.138-.137l4.326,4.712,4.326-4.544a.685.685,0,0,1,.594-.229.78.78,0,0,1,.544.387,1.27,1.27,0,0,1,.2.8,1.161,1.161,0,0,1-.314.736l-4.843,5.08A.673.673,0,0,1,13.149,20.862Z" transform="translate(-13.498 18.818) rotate(-90)" fill="#444" />
        </svg>
      </div>

      <MobProdMenu
        isOpen={activeMenu === 'products'}
        onClose={() => setActiveMenu(null)}
      />

      <MobSupportMenu
        isOpen={activeMenu === 'support'}
        onClose={() => setActiveMenu(null)}
      />

      <MobAboutMenu
        isOpen={activeMenu === 'about'}
        onClose={() => setActiveMenu(null)}
      />
    </div>
  );
}
