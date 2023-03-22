import styles from '../styles/page.module.css';
import FilingStatusDropdown from '../components/FilingStatusDropdown';
import StateDropdown from '../components/StateDropdown';

export default function Home() {



  return (
    <main className={styles.main}>
      <div className='input-fields'>
        <FilingStatusDropdown />
        <StateDropdown />
      </div>
    </main>
  );
}
