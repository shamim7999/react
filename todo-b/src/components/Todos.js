import React from 'react'

import '../css/todos.css'
import Todo from './Todo';

const Todos = ({todos, handleDeleteTodo}) => {
  console.log(todos);
    return (
    <div className='todos'>
        {
            todos.map((todo, index) => {
                return (
                    <Todo key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} />
                );
            })
        }
    </div>
  )
}

export default Todos