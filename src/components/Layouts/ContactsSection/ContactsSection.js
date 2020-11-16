import { Contacts, ContactForm } from '@/components/Sections';
import styles from './ContactsSection.module.css';

const ContactsSection = () => (
  <div className={styles.section}>
    <div className={styles.section__contactsLeft}>
      <Contacts />
    </div>
    <div className={styles.section__contactsRight}>
      <ContactForm />
    </div>
  </div>
);

export default ContactsSection;
