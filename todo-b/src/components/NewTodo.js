import React from 'react'
import MyForm from './Form';

import '../css/todo.css'

const NewTodo = ({handleNewTodo}) => {
  return (
    <section className='form'>
        <MyForm handleNewTodo={handleNewTodo} />
    </section>
  );
};

export default NewTodo