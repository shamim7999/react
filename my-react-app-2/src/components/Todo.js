import React from "react";
import DNoteForm from "../DNoteForm";
import { DModal } from "../DModal";

const Todo = ({ todo, handleDelete, handleUpdateTodo }) => {
  const handleClickForDelete = (e) => {
    e.preventDefault();
    handleDelete(todo.id);
    console.log(todo.id);
  };
  
  // const handleClickForUpdate = (e) => {
  //   e.preventDefault();
  //   handleUpdate(todo, 'Update Todo');
  //   console.log(todo);
  // }

  return (
    <tr key={todo.id}>
      {/* <td>{todo.id}</td> */}
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>{todo.priority}</td>
      <td>{new Date(todo.created).toLocaleString()}</td>
      <td>{new Date(todo.updated).toLocaleString()}</td>
      <td>
        <DModal handleUpdateTodo={handleUpdateTodo} title="update" todo = {todo}/>
        <button className="btn btn-danger" onClick={handleClickForDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Todo;
