import React, { useState } from 'react';
import Image from 'next/image';
import styles from './AboutVideo.module.css';

const AboutVideo = ({ title, src, url }) => {
  const [isOpen, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.title}>{title}</div>
      {src && (
        <div onClick={handleModal} className={styles.video}>
          <Image src={src} width="1194" height="574" />
        </div>
      )}
      {isOpen && (
        <div onClick={handleModal} className={styles.modal}>
          <div className={styles.modal__container}>
            <iframe src={url} style={{ width: '100%', height: '442px' }} />
          </div>
        </div>
      )}
    </>
  );
};

export default AboutVideo;
