import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/esm/Button'
import { DModal } from './DModal'


import NavScrollExample from './DNavbar'
import UserList from './data/UserData';


export const NoteForm = () => {
     const [user, setUser] = useState({id: uuidv4(), firstName: '', lastName: '', userName: ''});
    const {id, firstName, lastName, userName} = user;

    const handleChange = (e) => {
      // const fieldName = e.target.name;

      // if(fieldName === 'name') {
      //     setUser({name: e.target.value, email, password});
      // } else if(fieldName === 'email') {
      //     setUser({name, email: e.target.value, password});
      // } else if(fieldName === 'password') {
      //     setUser({name, email, password: e.target.value});
      // }

      setUser({...user, [e.target.name]: [e.target.value]});
  } 

  const handleSubmit = (e) => {
     
      console.log("Form Submitted", user);
      UserList.push(user);
      alert('New User Added');
      setUser({id: uuidv4() ,firstName: '', lastName: '', userName: ''});
      e.preventDefault();
  }
  return (
    <div >
        

        <DModal handleChange={handleChange} handleSubmit={handleSubmit} firstName={firstName} lastName = {lastName} userName={userName} />
    </div>
  );
}
