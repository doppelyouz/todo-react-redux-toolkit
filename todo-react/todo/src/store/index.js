import { configureStore } from '@reduxjs/toolkit';
import TodosReducer from './todosSlice';

export const store = configureStore({
    reducer: {
        todos: TodosReducer
    }
})