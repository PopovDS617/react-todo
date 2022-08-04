import React from "react";
import Header from "./Header";

import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <section className={styles.main}>{props.children}</section>;
    </React.Fragment>
  );
};

export default Layout;
