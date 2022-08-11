import React, { useState } from 'react';
import styles from './TodoItem.module.css';
import ChangeTodoForm from './ChangeTodoForm';
import { useSelector } from 'react-redux';
import CloseIcon from '../UI/CloseIcon';
import CheckIcon from '../UI/CheckIcon';
import EditIcon from '../UI/EditIcon';

const TodoItem = (props) => {
  const [isChanging, setIsChanging] = useState(false);
  const currentTheme = useSelector((state) => state.ui.theme);
  let textStyle = styles.itemText;
  if (props.status) {
    textStyle = `${styles.itemText} ${styles.completed}`;
  }

  let itemTheme;
  if (currentTheme === 'dark') {
    itemTheme = `${styles.todoitem} ${styles['todo-item-dark']}`;
  } else {
    itemTheme = `${styles.todoitem} ${styles['todoitem-light']}`;
  }

  const cancelHandler = () => setIsChanging(false);

  let textContent;
  if (isChanging === true) {
    textContent = (
      <div className={styles.form}>
        <ChangeTodoForm text={props.text} cancel={cancelHandler} />
      </div>
    );
  } else {
    textContent = <div className={textStyle}>{props.text}</div>;
  }
  return (
    <div className={itemTheme}>
      <div className={styles.buttonDone} onClick={props.completeTodo}>
        <CheckIcon />
      </div>
      {textContent}

      <div className={styles.buttonChange} onClick={() => setIsChanging(true)}>
        <EditIcon />
      </div>
      <div className={styles.buttonRemove} onClick={props.removeTodo}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default TodoItem;
