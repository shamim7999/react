import React, { useState } from 'react'
import NavScrollExample from './DNavbar'
import Button from 'react-bootstrap/esm/Button'
import { DModal } from './DModal'

export const NoteForm = () => {
  const [user, setUser] = useState({name: '', email: '', password: ''});
    const {name, email, password} = user;

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
      e.preventDefault();
  }
  return (
    <div >
        

        <DModal handleChange={handleChange} handleSubmit={handleSubmit} name={name} password = {password} email={email}/>
    </div>
  )
}
