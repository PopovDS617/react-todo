import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  return (
    <section className={styles.todoitem}>
      <div className={styles.todotext}>{props.text}</div>
      <div className={styles.todotag}>{props.tag}</div>
      <button className={styles["todo-patch-button"]}>patch</button>
      <button
        className={styles["todo-delete-button"]}
        onClick={props.removeTodo}
      >
        x
      </button>
    </section>
  );
};

export default TodoItem;
