import { createSlice } from '@reduxjs/toolkit';
export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
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
    },
    deleteTodo: (state, action) => {
        return state.filter((todo) => todo.id !== action.payload);
    },
    checkTodo: (state, action) => {
        return state.map((todo) => {
           if(todo.id === action.payload) {
            return {
                ...todo,
                checked: !todo.checked
            };
           }
           return todo;
        });
    },
    editTodo: (state, action) => {
        return state.map((todo) => {
           if(todo.id === action.payload.id) {
            return {
                ...todo,
                title: action.payload.title,
                description: action.payload.description
            };
           }
           return todo;
        });
    }
  }
})

export const { addTodo, deleteTodo, checkTodo, editTodo } = todosSlice.actions

export default todosSlice.reducer