import React, { useEffect, useState } from "react";
import { DModal } from "./DModal";
import Todos from "./components/Todos";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const DNoteForm = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const [viewTodos, setViewTodos] = useState(todos);

  const [open, setOpen] = useState(false);

  console.log(todos);

  useEffect(() => {
    console.log("useEffect called");
    localStorage.setItem("todos", JSON.stringify([...todos]));
    setViewTodos(todos);
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    console.log("I am here");
    setTodos([...todos, newTodo]);
    setViewTodos(todos);
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const handleOpen = () => {
    setOpen(true);
    console.log("Clicked and here");
  };

  const handleCloseFromDNoteForm = () => {
    setOpen(false);
  };

  const handleUpdateTodo = (todo) => {
    const updatedTodos = todos.map((temp) => {
      if (todo.id === temp.id) {
        temp = todo;
      }
      return temp;
    });

    setTodos(updatedTodos);
  };

  const handleShowAllTodos = () => {
      setViewTodos(todos);
  }

  const handleShowCompletedTodos = () => {
      const completedTodos = todos.filter((todo) => todo.priority === '1');
      setViewTodos(completedTodos);
  }

  return (
    <div>
      <div className='text-center mt-5'>
        <Button variant="primary" onClick={handleShowAllTodos}>All Todos</Button>{' '}
        <Button variant="warning" onClick={handleShowCompletedTodos} >Completed Todos</Button>{' '}
        <Button variant="danger">Failed Todos</Button>{' '}
    </div>
      <DModal
        
        title="Add Todo"
        handleNewTodo={handleNewTodo}
        open={open}
        handleCloseFromDNoteForm={handleCloseFromDNoteForm}
        handleOpen={handleOpen}
      />

      <Todos
        handleUpdateTodo={handleUpdateTodo}
        todos={viewTodos}
        handleDelete={handleDelete}
        open={open}
        handleCloseFromDNoteForm={handleCloseFromDNoteForm}
        handleOpen={handleOpen}
      />
    </div>
  );
};

export default DNoteForm;
