import { createSlice } from '@reduxjs/toolkit';

const initialTodoState = {
  todoList: [],
  deletedTodo: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialTodoState,
  reducers: {
    addTodo(state, action) {
      const updatedTodos = [...state.todoList];
      updatedTodos.push(action.payload);
      state.todoList = updatedTodos;
    },
    removeTodo(state, action) {
      const updatedTodos = [...state.todoList];
      const filteredTodos = updatedTodos.filter(
        (el) => el.id !== action.payload.id
      );
      const deletedItem = updatedTodos.find(
        (el) => el.id === action.payload.id
      );

      // const filteredDeletedTodos = updatedTodos.filter(
      //   (el) => el.id === action.payload.id
      // );
      // console.log(filteredDeletedTodos);
      // const deletedTodos = [...state.deletedTodo];
      // deletedTodos.push(filteredDeletedTodos);
      // console.log(deletedTodos);
      state.deletedTodo.push(deletedItem);
      state.todoList = filteredTodos;
    },
    completeTodo(state, action) {
      let updatedTodos = [...state.todoList];
      const todoIndex = updatedTodos.findIndex(
        (item) => item.id === action.payload.id
      );

      const existedTodoItem = updatedTodos[todoIndex];
      const updatedTodoItem = {
        ...existedTodoItem,
        isDone: !existedTodoItem.isDone,
      };
      updatedTodos[todoIndex] = updatedTodoItem;
      state.todoList = updatedTodos;
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
