import { createSlice, nanoid } from '@reduxjs/toolkit';

// Retrieve persisted todos from localStorage or initialize with an empty array
const persistedTodos = JSON.parse(localStorage.getItem('todos')) || [];

const initialState = {
  todos: persistedTodos,
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (!action.payload.trim()) {
        return; // Prevent adding blank todos
      }
      const newTodo = { id: nanoid(), text: action.payload };
      state.todos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
