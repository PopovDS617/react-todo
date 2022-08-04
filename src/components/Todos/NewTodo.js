import React, { useState } from "react";
import styles from "./NewTodo.module.css";
import { useDispatch } from "react-redux/es/exports";
import { todoActions } from "../../store/todo-slice";

const NewTodo = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const textInputHandler = (event) => {
    setInputText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!inputText) {
      return;
    } else {
      dispatch(
        todoActions.addTodo({
          id: Math.random().toFixed(2),
          key: Math.random().toFixed(2),
          text: inputText,
          tag: "high",
        })
      );
      setInputText("");
    }
  };

  return (
    <div className={styles.newtodo}>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.control}>
          <label htmlFor="newtodo"> </label>
          <input
            name="newtodo"
            type="text"
            onChange={textInputHandler}
            value={inputText}
          />
        </div>
        <div className={styles.action}>
          <button className={styles.formbutton} disabled={!inputText}>
            add
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
