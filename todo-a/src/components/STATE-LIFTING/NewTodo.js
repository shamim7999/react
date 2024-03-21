import React, { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState("");

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(todo);
    props.handleNewTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">New Todo</label>
      <input
        type="text"
        id="todo"
        name="todo"
        value={todo}
        onChange={handleInputChange}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
