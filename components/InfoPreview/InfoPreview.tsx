import styles from './infopreview.module.css';

import DomainInfo from './DomainInfo';

export default function InfoPreview() {
  return (
    <section className={`Container ${styles.infoCont}`}>
      <div className={`content ${styles.infogrid}`}>
        <DomainInfo />
      </div>
    </section>
  );
} 