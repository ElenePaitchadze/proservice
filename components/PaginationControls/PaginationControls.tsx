'use client';

import { FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './pagination.module.css';

interface PaginationControlsProps {
  destination: string;
  total: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({ destination, total }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get('page') ?? '1');
  const totalPages = total;

  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;

  const goToPage = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString());

    router.push(`/${destination}?${params.toString()}`);
  };

  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`${styles.paginationBtn} ${i === page ? styles.active : ''}`}
          onClick={() => goToPage(i)}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.paginationBtn}
        disabled={!hasPrevPage}
        onClick={() => goToPage(page - 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="7.875" height="13.692" viewBox="0 0 7.875 13.692">
          <g transform="translate(0)">
            <path d="M68.374,16.635a1.028,1.028,0,0,1,0,1.454L63.283,23.18l5.091,5.091a1.028,1.028,0,1,1-1.454,1.454L61.1,23.907a1.028,1.028,0,0,1,0-1.454l5.818-5.818A1.029,1.029,0,0,1,68.374,16.635Z" transform="translate(-60.8 -16.333)" />
          </g>
        </svg>
      </button>

      {renderPageNumbers()}

      <button
        className={styles.paginationBtn}
        disabled={!hasNextPage}
        onClick={() => goToPage(page + 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="7.875" height="13.692" viewBox="0 0 7.875 13.692">
          <g transform="translate(0)">
            <path d="M61.1,16.635a1.028,1.028,0,0,0,0,1.454l5.091,5.091L61.1,28.27a1.028,1.028,0,1,0,1.454,1.454l5.818-5.818a1.028,1.028,0,0,0,0-1.454l-5.818-5.818A1.028,1.028,0,0,0,61.1,16.635Z" transform="translate(-60.8 -16.333)" />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default PaginationControls;