import React, { useState } from 'react';
import styles from './TodoItem.module.css';
import ChangeTodoForm from './ChangeTodoForm';

const TodoItem = (props) => {
  const [isChanging, setIsChanging] = useState(false);

  const cancelHandler = () => setIsChanging(false);

  let itemContent;
  if (isChanging === true) {
    itemContent = <ChangeTodoForm text={props.text} cancel={cancelHandler} />;
  } else {
    itemContent = (
      <div>
        <button onClick={props.completeTodo}>mark as done</button>
        <div className={props.status && styles.completed}>{props.text}</div>
        <button onClick={() => setIsChanging(true)}>change</button>
        <button onClick={props.removeTodo}>x</button>{' '}
      </div>
    );
  }

  return <section className={styles.todoitem}>{itemContent}</section>;
};

export default TodoItem;
