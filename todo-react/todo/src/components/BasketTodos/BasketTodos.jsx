import React from 'react'
import BasketTodo from '../BasketTodo/BasketTodo';

import './BasketTodos.scss';

const BasketTodos = ({todos, deleteTodoFromBasket, checkTodo, editTodo, returnTodo}) => {
  return (
    <div className="todos">
        {
          todos.map((todo) => {
              return <BasketTodo 
              todo={todo}
              key={todo.id} 
              title={todo.title} 
              description={todo.description} 
              checked={todo.checked} 
              date={todo.date} 
              type={todo.type} 
              checkTodo={checkTodo} 
              deleteTodoFromBasket={deleteTodoFromBasket} 
              editTodo={editTodo}
              returnTodo={returnTodo}
              id={todo.id} 
            />
          })
        }
    </div>
  )
}

export default BasketTodos;