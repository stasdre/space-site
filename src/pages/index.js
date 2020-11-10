import Image from 'next/image';
import { HeadSection } from '@/components/HeadSection';
import styles from './Index.module.css';

export default function Home() {
  return (
    <HeadSection>
      <div className={styles.main}>
        <h1 className={styles.main__title}>Создание cайтов от Google партнеров</h1>
        <Image src="/main.jpg" width="760" height="426" alt="" />
      </div>
    </HeadSection>
  );
}
