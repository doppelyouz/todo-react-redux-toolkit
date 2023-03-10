import React from 'react'
import Todo from '../Todo/Todo';

import './todos.scss'

const Todos = ({todos, deleteTodoToBasket, checkTodo, editTodo}) => {
  return (
    <div className='todos'>
        {
          todos.map((todo) => {
              return <Todo 
              key={todo.id} 
              title={todo.title} 
              description={todo.description} 
              checked={todo.checked} 
              date={todo.date} 
              type={todo.type} 
              checkTodo={checkTodo} 
              deleteTodoToBasket={deleteTodoToBasket} 
              editTodo={editTodo}
              id={todo.id} 
            />
          })
        }
    </div>
  )
}

export default Todos;