import Image from 'next/image';
import styles from './Clients.module.css';

const Clients = ({ clients }) => {
  if (!clients.length) return null;

  return (
    <div className={styles.clients}>
      <ul className={styles.clients__list}>
        {clients.map((item) => (
          <li key={item.id} className={styles.clients__item}>
            {/* <Image src={`/${item.img}`} layout="fill" /> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
