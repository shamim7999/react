import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  console.log(props.todos)
  return (
    <div>
        { 
          props.todos.map((todo, index) => {
            return <Todo key={index} todo={todo} />
          })
        
        }
    </div>
  )
}

export default Todos;