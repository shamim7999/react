import React from 'react'
import { Table } from 'react-bootstrap';

const Todos = ({todos}) => {
    console.log(todos);
    return (
    <div className='todos'>
        <Table striped bordered hover className='text-center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Created</th>
                    <th>Updated</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo) => (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.description}</td>
                        <td>{todo.priority}</td>
                        <td>{new Date(todo.created).toLocaleString()}</td>
                        <td>{new Date(todo.updated).toLocaleString()}</td>
                        <td>
                            <button className='btn btn-success' >Update</button> &nbsp;
                            <button className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
  )
}

export default Todos