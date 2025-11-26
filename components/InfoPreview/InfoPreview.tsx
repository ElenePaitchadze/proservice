import styles from './infopreview.module.css';

import DomainInfo from './DomainInfo';
import HostingInfo from './HostingInfo';
import WebInfo from './WebInfo';
import ServerInfo from './ServerInfo';

export default function InfoPreview() {
  return (
    <section className={`Container ${styles.infoCont}`}>
      <div className={`content ${styles.infogrid}`}>
        <DomainInfo />
        <HostingInfo />
        <WebInfo />
        <ServerInfo />
      </div>
    </section>
  );
} 