'use client';
import styles from './domainsearch.module.css';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormEvent } from "react";

export default function DomainSearch() {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue.trim() !== '') {
      router.push(`search?query=${searchValue}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <input type="text" value={searchValue} 
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.search} />
      <div>GE</div>
      <button type='submit'>ძებნა</button>
    </form>
  );
}