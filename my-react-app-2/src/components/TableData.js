import Table from 'react-bootstrap/Table';
import UserList from '../data/UserData';

function TableData() {

   let users = [...UserList]; 


  return (
    <Table striped bordered hover className='text-center'>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
            return (
                <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.userName}</td>
                <td>
                    <button className='btn btn-success'>Update</button> &nbsp;
                    <button className='btn btn-danger'>Delete</button>
                </td>
            </tr>
            );
        })}
      </tbody>
    </Table>
  );
}

export default TableData;




// function TableData() {
//     return (
//       <Table striped bordered hover className='text-center'>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Username</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//             <td>
//               <button className='btn btn-success'>Update</button> &nbsp;
//               <button className='btn btn-danger'>Delete</button>
//             </td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//             <td>
//               <button className='btn btn-success'>Update</button> &nbsp;
//               <button className='btn btn-danger'>Delete</button>
//             </td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//             <td>
//               <button className='btn btn-success'>Update</button> &nbsp;
//               <button className='btn btn-danger'>Delete</button>
//             </td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//             <td>
//               <button className='btn btn-success'>Update</button> &nbsp;
//               <button className='btn btn-danger'>Delete</button>
//             </td>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//             <td>
//               <button className='btn btn-success'>Update</button> &nbsp;
//               <button className='btn btn-danger'>Delete</button>
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     );
//   }