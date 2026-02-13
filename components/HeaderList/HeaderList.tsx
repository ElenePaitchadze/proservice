'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './headerlist.module.css';
import img from '@/img/icons/menu2.svg';
import img1 from '@/img/icons/menu3.svg';
import img2 from '@/img/icons/menu5.svg';
import img3 from '@/img/icons/menu4.svg';
import img4 from '@/img/icons/menu6.svg';
import img5 from '@/img/icons/menu7.svg';

const headerItems = [
  { name: 'ჰოსტინგი', img: img },
  { name: 'Wordpress', img: img1 },
  { name: 'SSL სერთიფიკატები', img: img2 },
  { name: 'Node.js', img: img3 },
  { name: 'DNS მენეჯმენტი', img: img4 },
  { name: 'Cloud სერვისი', img: img5 },
];

export default function HeaderList() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const itemHeight = 60;
  const visibleCount = 6;
  const len = headerItems.length;
  const [scrollIndex, setScrollIndex] = useState(0);

  // Duplicate items for seamless scroll
  const items = [...headerItems, ...headerItems];

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    // wrapper.innerHTML += wrapper.innerHTML;

    let index = 0;
    const interval = setInterval(() => {
      index++;
      setScrollIndex(index);
      wrapper.style.transition = 'transform 1s linear';
      wrapper.style.transform = `translateY(-${index * (itemHeight + 10)}px)`;

      if (index === headerItems.length) {
        setTimeout(() => {
          wrapper.style.transition = 'none';
          wrapper.style.transform = 'translateY(0)';
          index = 0;
          setScrollIndex(0);
        }, 1000); 
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // const topIndex = ((scrollIndex % len) + len) % len;
  return (
    <div className={styles.listCont}
      style={{ height: `${(itemHeight + 10) * visibleCount}px`, overflow: 'hidden' }}>
      <div ref={wrapperRef} className={styles.listWrapper}>
        {items.map((item, i) => {
          // const isActive = (i % len) === topIndex;
          return (
            <div key={i} className={`${styles.listItem}`}
              style={{ height: `${itemHeight}px` }}>
              <div><img src={item.img.src} alt={item.name} /></div>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
