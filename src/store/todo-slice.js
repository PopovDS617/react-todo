import { createSlice } from '@reduxjs/toolkit';

const initialTodoState = {
  todoList: [],
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
        isDone: true,
      };
      updatedTodos[todoIndex] = updatedTodoItem;
      state.todoList = updatedTodos;
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
