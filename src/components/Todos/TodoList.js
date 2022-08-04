import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../../store/todo-slice";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todoList);

  const dispatch = useDispatch();

  const removeHandler = (id) => {
    console.log(id);
    dispatch(todoActions.removeTodo({ id: id }));
  };

  let todos;
  if (todoList.length === 0) {
    todos = <p className={styles.todolist}>no todos</p>;
  }
  if (todoList.length >= 1) {
    todos = todoList.map((todo) => {
      return (
        <li>
          <TodoItem
            key={todo.key}
            id={todo.id}
            text={todo.text}
            tag={todo.tag}
            removeTodo={removeHandler.bind(null, todo.id)}
          />
        </li>
      );
    });
  }
  return (
    <div className={styles.todolist}>
      <ul>{todos}</ul>
    </div>
  );
};

export default TodoList;
