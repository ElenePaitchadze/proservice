'use client';
import { IProdMenu } from "./ProductMenuData";
import { useTranslations, useLocale } from 'next-intl';
import { Link } from "@/i18n/navigation";
import styles from './productMenu.module.css';
import MenuLink from "./MenuLink";
import vpsl1 from '@/img/vpsl1.svg';
import vpsl2 from '@/img/vpsl2.svg';

export default function HostingCloudMenu({ data }: { data: IProdMenu }) {
  const locale = useLocale();      
  const t = useTranslations('HomePage');

  return (
    <div className={styles.rightSide}>
      <div className={`${styles.topSide} ${data.cat_id == '1128' ? styles.active : ''}`}>
        {data.cat_id == '1127' && 
          <>
            <p className={styles.mobTitle}>დომენები & ჰოსტინგი</p>
            <div className={styles.offer}>
              <span>მოძებნე შენზე მორგებული გადაწყვეტილება</span>
              <Link href='/'>
                <span>ჰოსტინგის შეთავაზებების ნახვა</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="17.811" height="10.121" viewBox="0 0 17.811 10.121">
                  <path d="M20,12H4m16,0L16,8m4,4-4,4" transform="translate(-3.25 -6.939)" fill="none" stroke="#fff"/>
                </svg>
              </Link>
            </div>
            <div className={styles.linkgrid}>
              {data.mainLinks.map((link, i) => (
                <MenuLink key={i} i={i} img={link.img} 
                  name={link.name} name_en={link.name_en}
                  desc={link.desc} href={link.href} soon={link.soon} />
              ))}
            </div>
          </>
        } 
        {data.cat_id == '1128' && 
          <div className={styles.cloudMenu}>
            <p>Cloud სერვისები</p>
            <div>
              <div className={styles.vpsl}>
                <div className={styles.icons}>
                  <div><img src={vpsl1.src} alt="icon" /></div>
                  <img src={vpsl2.src} alt="icon" />
                </div>
                <p>ყველაზე პოპულარული სერვისი კატეგორიაში</p>
                <a href="/"><span>შეძენა</span></a>
              </div>
              <div className={styles.linkgrid}>
                {data.mainLinks.map((link, i) => (
                  <MenuLink key={i} i={i} img={link.img} 
                    name={link.name} name_en={link.name_en}
                    desc={link.desc} href={link.href} soon={link.soon} />
                ))}
              </div>
            </div>
          </div>
        }
      </div>

      <div className={`${styles.interestingLinks} ${data.cat_id == '1127' ? styles.active : ''}`}>
        <p>{ data.cat_id == '1127' ? 'სასარგებლო ბმულები' : 'დატა ცენტრის სერვისები' }</p>
        <div className={styles.linkgrid}>
          {data.interestingLinks!.map((link, i) => (
            <MenuLink key={i} i={i} img={link.img} 
              name={link.name} name_en={link.name_en}
              desc={link.desc} href={link.href} soon={link.soon} />
          ))}
        </div>
      </div>
    </div>
  );
}
