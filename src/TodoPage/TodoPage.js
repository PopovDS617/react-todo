import React from "react";
import TodoList from "../components/Todos/TodoList";
import NewTodo from "../components/Todos/NewTodo";

const TodoPage = () => {
  return (
    <React.Fragment>
      <NewTodo />
      <TodoList />
    </React.Fragment>
  );
};

export default TodoPage;
