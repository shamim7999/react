import React, { useEffect, useState } from 'react'
import { DModal } from './DModal';
import Todos from './components/Todos';

const DNoteForm = () => {
    const [todos, setTodos] = useState(
        localStorage.getItem("todos")
          ? JSON.parse(localStorage.getItem("todos"))
          : []
      );
      console.log(todos)
      
    //   useEffect(()=>{
    //         if(localStorage.getItem('todos') == null) 
    //             localStorage.setItem('todos', []); 
    //   })

      useEffect(() => {
        console.log("useEffect called");
        localStorage.setItem("todos", JSON.stringify([...todos]));
      }, [todos]);
    
      const handleNewTodo = (newTodo) => {
        console.log('I am here');
        setTodos([...todos, newTodo]);
      };
  

  return (
    <div>
        <DModal handleNewTodo={handleNewTodo} />
        <Todos todos={todos} />
    </div>
  )
}

export default DNoteForm;