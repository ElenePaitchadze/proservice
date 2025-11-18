'use client';
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from 'next-intl';
import logo from '@/img/logo1.svg';
import styles from './footer.module.css';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from '../LanguageSwitcher';
import { use } from 'react';
import facebook from '@/img/facebook.svg';
import instagram from '@/img/instagram.svg';
import linkedin from '@/img/linkedin.svg';
import youtube from '@/img/youtube.svg';
import globe from '@/img/globe.png';
import iso1 from '@/img/iso1.png';
import iso2 from '@/img/iso2.png';
import iso3 from '@/img/iso3.png';

const footerMenu = [
    { name: 'მთავარი',
      name_en: 'Home',
      children: {
        1: { name: 'სერვისები', name_en: 'Services', href: '/' },
        2: { name: 'დომენის რეგისტრაცია', name_en: 'Domain Registration', href: '/' },
        3: { name: 'საპარტნიორი პროგრამა', name_en: 'Affiliate Program', href: '/' },
        4: { name: 'ჩვენ შესახებ', name_en: 'About Us', href: '/' },
        5: { name: 'FAQ', name_en: 'FAQ', href: '/' },
        6: { name: 'კონტაქტი', name_en: 'Contact', href: '/' },
        7: { name: 'პერსონალურ მონაცემთა დამუშავება', name_en: 'Privacy Policy', href: '/' },
      }
    },
    { name: 'ჰოსტინგი',
      name_en: 'Hosting',
      children: {
        1: { name: 'Unix ჰოსტინგი', name_en: 'Unix Hosting', href: '/' },
        2: { name: 'Windows ჰოსტინგი', name_en: 'Windows Hosting', href: '/' },
        3: { name: 'ვირტუალური სერვერები VDS | VPS', name_en: 'virtual Servers VDS | VPS', href: '/' },
        4: { name: 'გამოყოფილი სერვერები', name_en: 'Dedicated Servers', href: '/' },
        5: { name: 'კოლოკაცია', name_en: 'Colocation', href: '/' },
        6: { name: 'ანგარიშწორება', name_en: 'Payment', href: '/' },
        7: { name: 'წესები', name_en: 'Terms', href: '/' },
      }
    },
    { name: 'ჰოსტინგის ცნება',
      name_en: 'Definition of Hosting',
      children: {
        1: { name: 'ვირტუალური ჰოსტინგი', name_en: 'Virtual Hosting', href: '/' },
        2: { name: 'vds | vps', name_en: 'vds | vps', href: '/' },
        3: { name: 'გამოყოფილი სერვერი', name_en: 'Dedicated Server', href: '/' },
        4: { name: 'კოლოკაცია', name_en: 'Colocation', href: '/' },
      }
    },
];

const nsRecords = [
  { name: 'DA Hosting',
    children: {
      1: { name: 'ns1.proservice.ge' },
      2: { name: 'ns2.proservice.ge' },
    }
  },
  { name: 'Cpanel Hosting',
    children: {
      1: { name: 'cp1.proservice.ge' },
      2: { name: 'cp2.proservice.ge' },
    }
  },
  { name: 'Windows Hosting',
    children: {
      1: { name: 'nsw1.proservice.ge' },
      2: { name: 'nsw2.proservice.ge' },
    }
  },
  { name: 'Wordpress Hosting',
    children: {
      1: { name: 'cp1.proservice.ge' },
      2: { name: 'cp2.proservice.ge' },
    }
  }
];

export default function Footer() {
  const date = new Date();
  const locale = useLocale();      
  const t = useTranslations('HomePage');

  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const handleCopy = async (text: string, uniqueKey: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(uniqueKey);

    setTimeout(() => setCopiedIndex(null), 1200);
  };

  const [ip, setIp] = useState<string>("");

  useEffect(() => {
    fetch("/api/ip")
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch(() => setIp("Unknown"));
  }, []);

  return (
    <footer className="Container">
      <div className="content1 footer-content">
        <div className={styles.logo}>
          <Link href={'/'}><img src={logo.src} /></Link>
          <div className='socials'>
            <a href="https://www.facebook.com/proservice.ge" target='_blank'><img src={facebook.src} alt="facebook icon" /></a>
            <a href="https://www.linkedin.com/company/proserviceglobal" target='_blank'><img src={linkedin.src} alt="linkedin icon" /></a>
            <a href="https://www.instagram.com/proservice.ge/" target='_blank'><img src={instagram.src} alt="facebook icon" /></a>
            <a href="https://www.youtube.com/channel/UCZhl2GLq8HPqZATsyMJ-9yg/featured" target='_blank'><img src={youtube.src} alt="facebook icon" /></a>
          </div>
        </div>
        <div className={styles.footertop}>
          {footerMenu.map((section, index) => (
            <div key={index} className={styles.footermenu}>
              <p>{ locale == 'ge' ? section.name : section.name_en}</p>
              <ul>
                {Object.values(section.children).map((child, idx) => (
                  <li key={idx}>
                    <Link href={child.href}>
                      { locale == 'ge' ? child.name : child.name_en }
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className={styles.footermenu}>
            <p>{ t('contact') }</p>
            <ul>
              <li><a href="https://www.google.com/maps/place/Proservice+-+Data+Center,+Hosting+Provider/@41.7206315,44.7277742,14z/data=!4m10!1m2!2m1!1sproservice!3m6!1s0x404473a93fd6525f:0x6dbac65e137fd421!8m2!3d41.7198125!4d44.7297229!15sCgpwcm9zZXJ2aWNlkgETd2ViX2hvc3Rpbmdfc2VydmljZaoBQgoNL2cvMTFoXzRfMzE2cxABMh8QASIb3J0I3tIT7b1czP3WgP__0N118McBkRS7-1A4Mg4QAiIKcHJvc2VydmljZeABAA!16s%2Fg%2F11h_4_316s?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D" target='_blank'>{ t('address') }</a></li>
              <li><a href="tel: +995 32 2 43 00 44">+995 32 2 43 00 44</a></li>
              <li><a href="mailto: support@proservice.ge">support@proservice.ge</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footermiddle}>
          <div className={styles.head}>
            <img src={globe.src} alt="globe icon" />
            <span>{t('records')}</span>
          </div>
          <div className={styles.middlemenu}>
            {nsRecords.map((record, index) => (
              <div key={index} className={styles.middleitem}>
                <p>{record.name}</p>
                <ul>
                  {Object.values(record.children).map((child, idx) => {
                    const key = `${index}-${idx}`;
                    const isCopied = copiedIndex === key;
                    return (
                      <li key={key} onClick={() => handleCopy(child.name, key)}
                          className={`${styles.listitem} ${isCopied ? styles.copied : ""}`}>
                          {!isCopied && child.name}
                          {isCopied && <span className={styles.copiedTag}>Copied!</span>}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
            <div className={styles.ip}>
              <p>შენი IP მისამართია</p>
              <span>{ip}</span>
            </div>
          </div>
        </div>
        <div className={styles.footerbottom}>
          <LanguageSwitcher />
          <div className={styles.owner}>
            <div>
              <Link href={'/'}>Privacy Policy</Link>
              <Link href={'/'}>Terms of Service</Link>
              <Link href={'/'}>Site Map</Link>
            </div>
            <span>© 1999 - {date.getFullYear()} ProService LTD. {t('rights')}</span>
          </div>
          <div className={styles.iso}>
            <a href="/"><img src={iso1.src} alt="iso image" /></a>
            <a href="/"><img src={iso2.src} alt="iso image" /></a>
            <a href="/"><img src={iso3.src} alt="iso image" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}