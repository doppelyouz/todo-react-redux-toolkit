import React from 'react'

import s from './BasketPage.module.scss';
import { useSelector } from 'react-redux';

import { deleteTodoFromBasket, checkTodo, editTodo, returnTodo } from '../../store/todosSlice';
import BasketTodos from '../../components/BasketTodos/BasketTodos';

const BasketPage = () => {
  const basketTodos = useSelector(state => state.todos.basketTodos);
  return (
    <div className={s.basket}>
       <div className={s.basket__title}>
        Basket
      </div>
      <div className={s.basket__todos}>
          <BasketTodos todos={basketTodos} deleteTodoFromBasket={deleteTodoFromBasket} checkTodo={checkTodo} editTodo={editTodo} returnTodo={returnTodo}/>
      </div>
    </div>
  )
}

export default BasketPage