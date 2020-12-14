import Image from 'next/image';
import styles from './AboutVideo.module.css';

const AboutVideo = ({ title, src }) => (
  <>
    <div className={styles.title}>{title}</div>
    <Image src={src} width="1194" height="574" />
  </>
);

export default AboutVideo;
