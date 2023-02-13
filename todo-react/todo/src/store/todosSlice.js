import { createSlice } from '@reduxjs/toolkit';

const localData = JSON.parse(localStorage.getItem("Todos") || "[]");
const localDataBasket = JSON.parse(localStorage.getItem("BasketTodos") || "[]");

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: localData,
    basketTodos: localDataBasket
  },
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
        state.todos.push(newTodo);
        localStorage.setItem("Todos", JSON.stringify(state.todos));
    },
    deleteTodoToBasket: (state, action) => {
        const newTodos = state.todos.filter((todo) => {
            if(todo.id !== action.payload) {
                return todo;
            } else {
                state.basketTodos.push(todo);
            }
        });
        state.todos = newTodos;
        localStorage.setItem("Todos", JSON.stringify(newTodos));
        localStorage.setItem("BasketTodos", JSON.stringify(state.basketTodos));
    },
    deleteTodoFromBasket: (state, action) => {
        const newBasketTodos = state.basketTodos.filter((todo) => todo.id !== action.payload);
        state.basketTodos = newBasketTodos;
        localStorage.setItem("BasketTodos", JSON.stringify(newBasketTodos));
    },
    returnTodo: (state, action) => {
        state.todos.push(action.payload);
        const newBasketTodos = state.basketTodos.filter((todo) => todo.id !== action.payload.id);
        state.basketTodos = newBasketTodos;
        localStorage.setItem("Todos", JSON.stringify(state.todos));
        localStorage.setItem("BasketTodos", JSON.stringify(newBasketTodos));
    },
    checkTodo: (state, action) => {
        const createNewTodos = (todosArray, localName) => {
            const newTodos = todosArray.map((todo) => {
                if(todo.id === action.payload) {
                 return {
                     ...todo,
                     checked: !todo.checked
                 };
                }
                return todo;
             });
             if(localName === "Todos") {
                state.todos = newTodos;
             } else if (localName === "BasketTodos") {
                state.basketTodos = newTodos;
             };
             localStorage.setItem(localName, JSON.stringify(newTodos));
        };
        createNewTodos(state.todos, "Todos");
        createNewTodos(state.basketTodos, "BasketTodos");
    },
    editTodo: (state, action) => {
        const createNewTodos = (todosArray, localName) => {
            const newTodos = todosArray.map((todo) => {
                if(todo.id === action.payload.id) {
                 return {
                     ...todo,
                     title: action.payload.title,
                     description: action.payload.description
                 }
                }
                return todo;
             });
             if(localName === "Todos") {
                state.todos = newTodos;
             } else if (localName === "BasketTodos") {
                state.basketTodos = newTodos;
             };
             localStorage.setItem(localName, JSON.stringify(newTodos));
        };
        createNewTodos(state.todos, "Todos");
        createNewTodos(state.basketTodos, "BasketTodos");
    }
  }
})

export const { addTodo, deleteTodoToBasket, checkTodo, editTodo, deleteTodoFromBasket, returnTodo } = todosSlice.actions

export default todosSlice.reducer