import React from 'react';
import styles from './ChangeTodoForm.module.css';
import { useSelector } from 'react-redux';

const ChangeTodoForm = (props) => {
  const currentTheme = useSelector((state) => state.ui.theme);
  let inputTheme;
  if (currentTheme === 'dark') {
    inputTheme = `${styles.input} ${styles['input-dark']}`;
  } else {
    inputTheme = `${styles.input} ${styles['input-light']}`;
  }

  return (
    <form>
      <input
        type="text"
        defaultValue={props.text}
        className={inputTheme}
      ></input>
      <button>change</button>
      <button onClick={props.cancel}>cancel</button>
    </form>
  );
};

export default ChangeTodoForm;
