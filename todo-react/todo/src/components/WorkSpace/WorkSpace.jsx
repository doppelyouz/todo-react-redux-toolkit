import React from 'react'

import InputTodo from '../InputTodo/InputTodo'
import Todos from '../Todos/Todos'

import './workSpace.scss'
import { useSelector } from 'react-redux';
import { addTodo, deleteTodo, checkTodo, editTodo } from '../../store/todosSlice';

const WorkSpace = () => {
  const todos = useSelector(state => state.todos);
  return (
    <div className="container">
      <InputTodo addTodo={addTodo} />
      <div className="todosSpace">
        <Todos todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo} editTodo={editTodo}/>
      </div>
    </div>
  )
}

export default WorkSpace