'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './headerlist.module.css';
import img from '@/img/menuIcon2.jpg';

const headerItems = [
  { name: 'ჰოსტინგი', img: img },
  { name: 'Wordpress', img: img },
  { name: 'SSL სერთიფიკატები', img: img },
  { name: 'Node.js', img: img },
  { name: 'DNS მენეჯმენტი', img: img },
  { name: 'Cloud სერვისი', img: img },
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
