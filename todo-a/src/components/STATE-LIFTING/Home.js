import React, { useState } from "react";

import Todos from "./Todos";
import TodoList from "../../vars/TodoData";
import NewTodo from "./NewTodo";

const Home = () => {
  const [todos, setTodos] = useState(TodoList);

  const handleNewTodo = (newTodo) => {
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <NewTodo handleNewTodo={handleNewTodo} />
      <Todos todos={todos}  />
    </div>
  );
};

export default Home;
