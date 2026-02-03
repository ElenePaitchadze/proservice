import styles from './page.module.css';
import sitelogo1 from '@/img/sitelogo1.png';
import sitelogo2 from '@/img/sitelogo2.png';
import sitelogo3 from '@/img/sitelogo3.png';
import siteimg1 from '@/img/site1.png';
import siteimg2 from '@/img/site2.png';
import siteimg3 from '@/img/site3.png';
import PortfolioList from '@/components/PortfolioList/PortfolioList';

const portfolio = [
  {
    id: '1',
    logo: sitelogo1,
    img: siteimg1,
    href: 'https://hotsale.ge/',
  },
  {
    id: '2',
    logo: sitelogo2,
    img: siteimg2,
    href: 'https://moneymuseum.nbg.gov.ge/',
  },
  {
    id: '3',
    logo: sitelogo3,
    img: siteimg3,
    href: 'https://foris.ge/',
  },
  {
    id: '4',
    logo: sitelogo1,
    img: siteimg1,
    href: 'https://hotsale.ge/',
  },
  {
    id: '5',
    logo: sitelogo2,
    img: siteimg2,
    href: 'https://moneymuseum.nbg.gov.ge/',
  },
  {
    id: '6',
    logo: sitelogo3,
    img: siteimg3,
    href: 'https://foris.ge/',
  },
  {
    id: '7',
    logo: sitelogo1,
    img: siteimg1,
    href: 'https://hotsale.ge/',
  },
  {
    id: '8',
    logo: sitelogo2,
    img: siteimg2,
    href: 'https://moneymuseum.nbg.gov.ge/',
  },
  {
    id: '9',
    logo: sitelogo2,
    img: siteimg2,
    href: 'https://moneymuseum.nbg.gov.ge/',
  },
];

export default function WebDesign() {
  return (
    <>
      <section className='Container designCont'>
        <div className={`content1 ${styles.designpage}`}>
          <p className='pageTitle'>Web დიზაინი</p>
          <p>ჩვენ გთავაზობთ</p>
          <div className={styles.grid}>
            <div>
              <p>Web დიზაინი</p>
              <p>ბიზნეს გვერდიდან დაწყებული, მონაცემთა ბაზებით აღჭურვილი კორპორატიული საიტით დამთავრებული.</p>
            </div>
            <div>
              <p>რედიზაინი და განვითარება</p>
              <p>
                ჩვენი სპეციალისტები შეიტანენ თქვენს საიტში ახალ ელემენტებს, სკრიფტებს, დამატებებს და 
                რედიზაინს გაუკეთებენ, თქვენი საიტის თითოეულ გვერდს.
              </p>
            </div>
            <div>
              <p>კონტენტის მართვის სისტემა</p>
              <p>
                თქვენ თვითონვე შეძლებთ მართოთ თქვენი საიტის კონტენტი, იქნება ეს ტექსტი, ფოტო, ვიდეო თუ რაიმე 
                სხვა მასალა. შეძლებთ გამოკითხოთ თქვენი საიტის მომხმარებლები ან ჩაატაროთ კონკურსი და ვიქტორინა.
                </p>
            </div>
          </div>
          <p>პორტფოლიო</p>
        </div>
      </section>
      <PortfolioList portfolios={portfolio} />
    </>
  );
}