import Image from 'next/image';
import styles from './Clients.module.css';

const Clients = ({ clients }) => {
  if (!clients.length) return null;

  return (
    <div className={styles.clients}>
      <ul className={styles.clients__list}>
        {clients.map((item) => (
          <li key={item.id} className={styles.clients__item}>
            {/* <Image src={`/${item.img}`} width={152} height={66} layout="responsive" /> */}
            {/* <div className={styles.clients__img}>
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
