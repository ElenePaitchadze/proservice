'use client';
import { useState } from 'react';
import { ProductMenu, IProdMenu } from './ProductMenuData';
import styles from './productMenu.module.css';
import HostingCloudMenu from './HostingCloudMenu';
import ServiceMenu from './ServiceMenu';
import ModuleMenu from './ModuleMenu';
import PaymentMenu from './PaymentMenu';
import { Link } from '@/i18n/navigation';
import warning from '@/img/warning.svg';

export default function ProdMenu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = ProductMenu[activeIndex];

  const renderContent = () => {
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
      <div className={styles.leftSide}>
        {ProductMenu.map((item, index) => (
        <div key={item.cat_id}
            className={`${styles.menuItem} ${index === activeIndex ? styles.active : ''}`}
            onClick={() => setActiveIndex(index)} >
            <span>{item.name}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="7.367" height="11.32" viewBox="0 0 7.367 11.32">
              <path d="M13.149,20.862a.7.7,0,0,1-.517-.242L7.79,15.361a1.284,1.284,0,0,1-.1-1.483.688.688,0,0,1,1.138-.137l4.326,4.712,4.326-4.544a.685.685,0,0,1,.594-.229.78.78,0,0,1,.544.387,1.27,1.27,0,0,1,.2.8,1.161,1.161,0,0,1-.314.736l-4.843,5.08A.673.673,0,0,1,13.149,20.862Z" transform="translate(-13.498 18.818) rotate(-90)" fill="#fff"/>
            </svg>
        </div>
        ))}
        <Link href={'/'} className={styles.warningLink}>
          <img src={warning.src} alt="warning icon" />
          <span>საზიარო პასუხისმგებლობა</span>
        </Link>
      </div>
      { renderContent() }
    </>
  );
}
