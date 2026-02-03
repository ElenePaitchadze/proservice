'use client';
import { StaticImageData } from 'next/image';
import styles from './portfoliocard.module.css';
import { useRef } from 'react';
import Link from 'next/link';

export default function PortfolioCard(
  { img, logo, href }: 
  { img: StaticImageData, logo: StaticImageData, href: string }) 
{
  const imgRef = useRef<HTMLImageElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    const rotateX = normY * -10;
    const rotateY = normX * 10; 

    if (imgRef.current) {
      imgRef.current.style.transform = 
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  }

  function handleMouseLeave() {
    if (imgRef.current) {
      imgRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
  }

  return (
    <Link 
      href={href} className={styles.card} target='_blank'
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className={styles.logo}><img src={logo.src} alt="logo" /></div>
      <img ref={imgRef} className={styles.websiteImg} src={img.src} alt="website image"/>
    </Link>
  );
}

