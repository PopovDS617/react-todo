import styles from './Header.module.css';
import HeaderIcon from '../UI/HeaderIcon';
import ThemeSlider from '../UI/ThemeSlider';
import { useSelector } from 'react-redux';

const Header = () => {
  const currentTheme = useSelector((state) => state.ui.theme);

  let theme;
  let themeText;
  if (currentTheme === 'dark') {
    theme = `header ${styles['header-dark']}`;
    themeText = 'light';
  } else {
    theme = `header ${styles['header-light']}`;
    themeText = 'dark';
  }

  return (
    <header className={theme}>
      <p className={styles.title}>
        simple as f todo app <HeaderIcon />
      </p>
      <div className={styles.themeSlider}>
        <p className={styles.themeText}>join {themeText}</p>
        <ThemeSlider />
      </div>
    </header>
  );
};

export default Header;
