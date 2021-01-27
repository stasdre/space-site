import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Collapse from '@kunukn/react-collapse';
import classNames from 'classnames';
import { Button } from '@/components/UI/Button';
import styles from './ServicesList.module.css';

const CategoriesList = ({ data, aditional, initialItems }) => {
  const { locale } = useRouter();
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
  const [services, setServices] = useState(data.services);

  const handleShowMore = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={classNames({
          [styles.services__title]: true,
          [styles.services__title_colapsed]: initialItems === 0,
          [styles.services__title_open]: isOpen,
        })}
        onClick={initialItems === 0 ? handleShowMore : null}
      >
        {data.name}
      </div>

      <ul className={styles.services__list}>
        {services.map((serv) => (
          <li key={serv['Service.id']} className={styles.services__item}>
            <Link href={serv.url}>
              <a className={styles.services__link}>{serv.name}</a>
            </Link>
          </li>
        ))}
        <Collapse isOpen={isOpen} className={styles.collapse}>
          {aditional.map((serv) => (
            <li key={serv['Service.id']} className={styles.services__item}>
              <Link href={serv.url}>
                <a className={styles.services__link}>{serv.name}</a>
              </Link>
            </li>
          ))}
        </Collapse>
      </ul>
      {initialItems > 0 && (
        <Button handelClick={handleShowMore}>{isOpen ? t('hide') : t('show')}</Button>
      )}
    </div>
  );
};

export default CategoriesList;
