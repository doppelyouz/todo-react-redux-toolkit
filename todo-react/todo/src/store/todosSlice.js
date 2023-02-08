import { createSlice } from '@reduxjs/toolkit';

const localData = JSON.parse(localStorage.getItem("Todos") || "[]");

export const todosSlice = createSlice({
  name: 'todos',
  initialState: localData,
  reducers: {
    addTodo: (state, action)=>{
        const newTodo = {
            id: `id-${new Date()}`,
            title: action.payload.title,
            description: action.payload.description,
            checked: false,
            date: new Date().toLocaleDateString(),
            type: action.payload.type
        }
        state.push(newTodo);
        localStorage.setItem("Todos", JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
        const newTodos = state.filter((todo) => todo.id !== action.payload);
        localStorage.setItem("Todos", JSON.stringify(newTodos));
        return newTodos;
    },
    checkTodo: (state, action) => {
        const newTodos = state.map((todo) => {
           if(todo.id === action.payload) {
            return {
                ...todo,
                checked: !todo.checked
            };
           }
           return todo;
        });
        localStorage.setItem("Todos", JSON.stringify(newTodos));
        return newTodos;
    },
    editTodo: (state, action) => {
        const newTodos = state.map((todo) => {
           if(todo.id === action.payload.id) {
            return {
                ...todo,
                title: action.payload.title,
                description: action.payload.description
            }
           }
           return todo;
        });
        localStorage.setItem("Todos", JSON.stringify(newTodos));
        return newTodos;
    }
  }
})

export const { addTodo, deleteTodo, checkTodo, editTodo } = todosSlice.actions

export default todosSlice.reducer