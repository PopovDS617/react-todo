import React from 'react';
import DeletedItem from './DeletedItem';
import { useSelector } from 'react-redux';
import styles from './DeletedList.module.css';

const DeletedList = () => {
  const todoList = useSelector((state) => state.todo.deletedTodo);

  // console.log(deletedTodos);
  const list = todoList.map((el) => {
    return (
      <li key={el.id}>
        <DeletedItem key={el.id} text={el.text} />
      </li>
    );
  });

  return (
    <div className={styles.deletedList}>
      <p>deleted todos</p>
      <ul>{list}</ul>
    </div>
  );
};

export default DeletedList;
