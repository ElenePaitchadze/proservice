import styles from './infopreview.module.css';
import DomainSearch from '../DomainSearch/DomainSearch';

export default function DomainInfo() {
  return (
    <div className={styles.domainCard}>
      <div>
        <p>დომენები</p>
        <p>შეარჩიე შენთვის სასურველი დომენური სახელწოდება</p>
      </div>
      <div className={styles.searchCont}><DomainSearch /></div>
    </div>
  );
}