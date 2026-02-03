'use client';
import { useState } from 'react';
import styles from './portfolio.module.css';
import PortfolioCard from '../PortfolioCard/PortfolioCard';

export default function PortfolioList({ portfolios }: { portfolios: any }) {

  const [visibleCount, setVisibleCount] = useState(8);
  const handleSeeMore = () => {
    setVisibleCount(prev =>
      Math.min(prev + 8, portfolios.length)
    );
  };
  const visiblePortfolios = portfolios.slice(0, visibleCount);
  
  return (
    <>
      <div className='portfolioGrid'>
        {visiblePortfolios.map((item: any) => (
          <div key={item.id}>
            <PortfolioCard logo={item.logo} img={item.img} href={item.href} />
          </div>
        ))}
      </div>
      {visibleCount < portfolios.length && (
        <button className={styles.seeMore} onClick={handleSeeMore}>
          მეტის ნახვა
        </button>
      )}
    </>
  );
}