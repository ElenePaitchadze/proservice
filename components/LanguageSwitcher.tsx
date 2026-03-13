'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [checked, setChecked] = useState(locale === 'en');

  useEffect(() => {
    setChecked(locale === 'en');
  }, [locale]);

  const handleToggle = () => {
    const newLocale = checked ? 'ge' : 'en';

    const date = new Date();
    date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale}; ${expires}; path=/;`;

    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="language-change">
      <span>{checked ? 'Eng' : 'Geo'}</span>

      <label className="switch">
        <input type="checkbox" checked={checked} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}