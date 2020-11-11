import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import { AnimatedButton } from '@/components/AnimatedButton';
import { CustomCheckbox } from '@/components/CustomCheckbox';
import styles from './ContactForm.module.css';

const ContactForm = () => (
  <div className={styles.contacts}>
    <div className={styles.contacts__title}>Начнем проект?</div>
    <div className={styles.contacts__services}>
      <div className={styles.contacts__servicesTitle}>Услуги</div>
      <ul className={styles.contacts__list}>
        <li className={styles.contacts__item}>
          <CustomCheckbox label="Разработка" />
        </li>
        <li className={styles.contacts__item}>
          <CustomCheckbox label="Маркетинг" />
        </li>
        <li className={styles.contacts__item}>
          <CustomCheckbox label="Дизайн" />
        </li>
        <li className={styles.contacts__item}>
          <CustomCheckbox label="Брендинг" />
        </li>
      </ul>
    </div>
    <div className={styles.contacts__form}>
      <div className={styles.contacts__row}>
        <div className={styles.contacts__col}>
          <Input type="text" placeholder="Имя" required={true} />
        </div>
        <div className={styles.contacts__col}>
          <Input type="text" placeholder="Телефон" required={true} />
        </div>
      </div>
      <div className={styles.contacts__row}>
        <div className={styles.contacts__col}>
          <Input type="email" placeholder="Email" required={true} />
        </div>
      </div>
      <div className={styles.contacts__row}>
        <div className={styles.contacts__col}>
          <Textarea placeholder="Детали проекта" />
        </div>
      </div>
      <AnimatedButton color="gray">Отправить</AnimatedButton>
    </div>
  </div>
);

export default ContactForm;
