import styles from './page.module.css';

type Props = {
  params: Promise<{ contentPage: string; locale: string }>;
}

export default async function ContentPage({ params }: Props) {
  const { locale, contentPage } = await params;
  return (
    <section className={`Container ${styles.contentCont}`}>
      <div className='content1'>
        <p className='pageTitle'>{contentPage}</p>
        <div className={styles.contentText}>
          განმარტება: <br />
          შ.პ.ს. "პროსერვისი" - შემდგომში "პროსერვისი" <br />
          შ.პ.ს. "პროსერვისი"-ს კუთვნილი სერვერები - შემდგომში "სერვერები" <br />
          მომხმარებელი, რომელიც სარგებლობს შ.პ.ს.  "პროსერვისი"-ს ნებისმიერი სერვისით - შემდგომში "აბონენტი" <br /><br />
          გთხოვთ ყურადღებით წაიკითხოთ წინამდებარე "სერვისით სარგებლობის წესები" და დარწმუნდეთ, რომ 
          თქვენთვის გასაგები და მისაღებია მისი თითოეული პუნქტი და ეთანხმებით მას. <br /><br />
          გთხოვთ ყურადღებით წაიკითხოთ წინამდებარე "სერვისით სარგებლობის წესები" და დარწმუნდეთ, რომ 
          თქვენთვის გასაგები და მისაღებია მისი თითოეული პუნქტი და ეთანხმებით მას.
        </div>
      </div>
    </section>
  );
}             