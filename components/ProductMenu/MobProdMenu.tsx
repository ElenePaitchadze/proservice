'use client';
import { useState, useEffect } from 'react';
import { ProductMenu } from './ProductMenuData';
import styles from './productMenu.module.css';
import { Link } from '@/i18n/navigation';
import facebook from '@/img/facebook.svg';
import instagram from '@/img/instagram.svg';
import linkedin from '@/img/linkedin.svg';
import youtube from '@/img/youtube.svg';
import warning from '@/img/warning.svg';
import HostingCloudMenu from './HostingCloudMenu';
import ServiceMenu from './ServiceMenu';
import ModuleMenu from './ModuleMenu';
import PaymentMenu from './PaymentMenu';

type MobProdMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobProdMenu({ isOpen, onClose }: MobProdMenuProps) {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const activeItem = activeIndex !== null ? ProductMenu[activeIndex] : null;

  const renderContent = () => {
    if (!activeItem) return null;

    switch (activeItem.type) {
      case 'hosting':
        return <HostingCloudMenu data={activeItem} />;
      case 'services':
        return <ServiceMenu data={activeItem} />;
      case 'modules':
        return <ModuleMenu data={activeItem} />;
      case 'payment':
        return <PaymentMenu data={activeItem} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className={`${styles.mobChild} ${isOpen ? 'show' : ''}`}>
        <div className={styles.mobChildLeft} onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="7.367" height="11.32" viewBox="0 0 7.367 11.32">
            <path d="M5.651,0a.7.7,0,0,0-.517.242L.292,5.5a1.284,1.284,0,0,0-.1,1.483.688.688,0,0,0,1.138.137L5.651,2.411,9.978,6.955a.685.685,0,0,0,.594.229.78.78,0,0,0,.544-.387,1.27,1.27,0,0,0,.2-.8A1.161,1.161,0,0,0,11,5.262L6.16.181A.673.673,0,0,0,5.651,0Z" transform="translate(0 11.32) rotate(-90)" fill="#1993ff"/>
          </svg>
        </div>
        <div className={styles.mobChildRight}>
          {ProductMenu.map((item, index) => (
            <div key={item.cat_id} className={styles.mobChildMenu}
              onClick={() => setActiveIndex(index)} >
              <span>{item.name}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="7.367" height="11.32" viewBox="0 0 7.367 11.32">
                <path d="M13.149,20.862a.7.7,0,0,1-.517-.242L7.79,15.361a1.284,1.284,0,0,1-.1-1.483.688.688,0,0,1,1.138-.137l4.326,4.712,4.326-4.544a.685.685,0,0,1,.594-.229.78.78,0,0,1,.544.387,1.27,1.27,0,0,1,.2.8,1.161,1.161,0,0,1-.314.736l-4.843,5.08A.673.673,0,0,1,13.149,20.862Z" transform="translate(-13.498 18.818) rotate(-90)" fill="#fff"/>
              </svg>
            </div>
          ))}
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
      </div>

      {/* Grandchild menu */}
      <div className={`${styles.mobGrandChild} ${activeItem ? 'show' : ''}`}>
        <div className={styles.mobGrandChildLeft} onClick={() => setActiveIndex(null)}>
          {/* Left arrow */}
          <svg xmlns="http://www.w3.org/2000/svg" width="7.367" height="11.32" viewBox="0 0 7.367 11.32">
            <path d="M5.651,0a.7.7,0,0,0-.517.242L.292,5.5a1.284,1.284,0,0,0-.1,1.483.688.688,0,0,0,1.138.137L5.651,2.411,9.978,6.955a.685.685,0,0,0,.594.229.78.78,0,0,0,.544-.387,1.27,1.27,0,0,0,.2-.8A1.161,1.161,0,0,0,11,5.262L6.16.181A.673.673,0,0,0,5.651,0Z" transform="translate(0 11.32) rotate(-90)" fill="#fff" />
          </svg>
        </div>
        <div className={styles.mobGrandChildRight}>
          {renderContent()}
        </div>
      </div>
    </>
  );
}
