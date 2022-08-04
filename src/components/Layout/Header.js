import styles from "./Header.module.css";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.title}>
        To do - simple as fuck application <HeaderIcon />
      </p>

      <button className={styles.button}>to dark mode</button>
    </header>
  );
};

export default Header;
