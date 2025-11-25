import styles from './packagecard.module.css';

export default function PackageCard({ data, category }: { data: any, category: string }) {
  return (
    <div 
      className={`${styles.card} 
                  ${data.popular ? styles.popular : ''} 
                  ${category == 'Wordpress' ? styles.card1 : ''}
                  ${category == 'info' ? styles.card2: ''}`}>
      <div className={styles.tag}>პოპულარული</div>
      <p className={styles.name}>{data.name}</p>
      <p className={styles.price}><span>{data.price}</span><span>₾</span><span>/თვეში</span></p>
      <a href="/" target="_blank">შეძენა</a>
      <div className={styles.services}>
        {data.services.map((service: any, index: number) => (
          <div key={index} className={styles.service}>
            <div><img src={service.img.src} alt="icon" /></div>
            <span>{service.name}</span>
          </div>
        ))}
      </div>
      <div className={styles.seeMore}>
        <span>მეტის ნახვა</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="4.364" height="7.431" viewBox="0 0 4.364 7.431">
          <path d="M10.465,9.616H4m6.465,0L8.849,8m1.616,1.616L8.849,11.232" transform="translate(11.798 -3.6) rotate(90)" fill="none" stroke="#2760db" />
        </svg>
      </div>
    </div>
  );
}