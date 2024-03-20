import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'
import React from 'react';


import '../css/todo.css'

const Todo = ({ todo, handleDeleteTodo }) => {
  const { id, title, desc } = todo;  
  
  const handleClick = (e) => {
        e.preventDefault();
        handleDeleteTodo(id);
        console.log(id);
  }
  
  return (
    <div>
      <article className='todo'>
        <div>
          <b>{id}</b>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <div>
          <Button className='btn' onClick={handleClick}>
            <i className='fa fa-trash fa-2x'></i>
          </Button>
        </div>
      </article>
    </div>
  );
}

export default Todo;
