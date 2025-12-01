import styles from './servercard.module.css';
import { Link } from '@/i18n/navigation';
import dot from '@/img/dot.svg';

export default function ServerCard({ data }: { data: any }) {
	return (
		<div className={styles.card}>
			<div className={styles.head}>
				<span>{data.name}</span>
				<p><span>{data.price}</span><span>₾</span><span>/თვეში</span></p>
			</div>
      <hr />
      <div className={styles.services}>
        {data.services.map((serv: any, index: number) => (
          <span key={index}>{serv}</span>
        ))}
      </div>
      <Link href={data.href}>შეკვეთა</Link>
      <img src={dot.src} alt="dot" />
      <img src={dot.src} alt="dot" />
		</div>
	);
}