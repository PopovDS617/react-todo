import React from 'react';
import Header from './Header';
import { useSelector } from 'react-redux/es/exports';
import styles from './Layout.module.css';

const Layout = (props) => {
  const currentTheme = useSelector((state) => state.ui.theme);

  let theme;
  if (currentTheme === 'dark') {
    theme = [`layout ${styles['main-dark']}`];
  } else {
    theme = [`layout ${styles['main-light']}`];
  }

  return (
    <React.Fragment>
      <Header />
      <div className={theme}>{props.children}</div>;
    </React.Fragment>
  );
};

export default Layout;
