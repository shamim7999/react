import React, { useState } from 'react'

import '../css/home.css'
import dummyTodos from '../data/DummyTodos';
import Todos from './Todos';
import NewTodo from './NewTodo';

const Home = () => {
  const [todos, setTodos] = useState(dummyTodos);
  
  const handleNewTodo = (newTodo) => {
        console.log(newTodo);
        setTodos((prevTodos) => {
            return [...prevTodos, newTodo];
        })
  }  

  const handleDeleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  return (
    <div className='container'>
        <h1 style={{color: 'white'}}>Todo App</h1>
        <NewTodo handleNewTodo={handleNewTodo} />
        <Todos todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  )
}

export default Home