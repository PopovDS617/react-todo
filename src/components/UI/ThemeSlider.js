import React from 'react';
import styles from './ThemeSlider.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { UiActions } from '../../store/ui-slice';

const ThemeSlider = (props) => {
  const dispatch = useDispatch();

  const changeThemeHandler = () => {
    dispatch(UiActions.changeTheme());
  };

  return (
    <div className={styles['slider-background']}>
      <label className={styles.switch}>
        <input type="checkbox" onChange={changeThemeHandler} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default ThemeSlider;
