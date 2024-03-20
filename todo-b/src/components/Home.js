import React, { useEffect, useState } from "react";

import "../css/home.css";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const Home = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  console.log(todos)

  useEffect(() => {
    console.log("useEffect called");
    localStorage.setItem("todos", JSON.stringify([...todos]));
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1 style={{ color: "white" }}>Todo App</h1>
      <NewTodo handleNewTodo={handleNewTodo} />
      <Todos todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default Home;
