'use client';
import styles from './domainsearch.module.css';
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { FormEvent } from "react";

export default function DomainSearch() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedExt, setSelectedExt] = useState('.ge'); 
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const text = "your-domain";
  const speed = 300;

  useEffect(() => {
    let index = 0;
    let forward = true;

    const interval = setInterval(() => {
      if (!inputRef.current) return;
      if (document.activeElement === inputRef.current) return; 
      if (searchValue) return; 

      if (forward) {
        index++;
        if (index > text.length) {
          forward = false;
          index = text.length;
        }
      } else {
        index = 0;
        forward = true;
      }

      inputRef.current.placeholder = text.slice(0, index);
    }, speed);

    return () => clearInterval(interval);
  }, [searchValue]);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue.trim() !== '') {
      router.push(`search?query=www.${searchValue}${selectedExt}`);
    }
  };

  const handleExtChoose = (ext: string) => {
    setSelectedExt(ext);
    setDropdownOpen(false);
  };

  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <div className={styles.inputCont}>
        <input ref={inputRef} type="text" value={searchValue}
          placeholder="" onChange={(e) => setSearchValue(e.target.value)}
          className={styles.search} />
        <span>www.</span>
      </div>
      <div className={`${styles.extensions} ${dropdownOpen ? styles.active : ""} 
        ${selectedExt === ".com.ge" ? styles.littleFont : ""}`}
        onClick={() => setDropdownOpen((prev) => !(prev))}>
        <div>{selectedExt}</div>
        <ul>
          {[".ge", ".com", ".net", ".org", ".com.ge"].map((ext) => (
            <li key={ext} 
            onClick={(e) => {
              e.stopPropagation(); 
              handleExtChoose(ext);
            }}>
              {ext}
            </li>
          ))}
        </ul>
      </div>
      <button type='submit'>ძებნა</button>
    </form>
  );
}
