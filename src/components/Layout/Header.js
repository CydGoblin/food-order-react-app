import styles from './Header.module.css';
import headerImage from '../../assets/header.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactiveFood</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={headerImage} alt='A table with different food' />
      </div>
    </>
  );
};

export default Header;
