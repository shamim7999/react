import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/esm/Button';
import { DModal } from './DModal';
import NavScrollExample from './DNavbar';

// Retrieve user data from localStorage or initialize with an empty array if not present
const storedUserList = JSON.parse(localStorage.getItem('userList')) || [];

export const NoteForm = () => {
  const [user, setUser] = useState({
    id: uuidv4(),
    title: '',
    description: '',
    priority: '',
    created: new Date(),
    updated: new Date()
  });

  const { id, title, description, priority, created, updated } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...user };
    storedUserList.push(newUser);
    console.log('New user added:', newUser);
    console.log('Stored user list:', storedUserList);
    localStorage.setItem('userList', JSON.stringify(storedUserList));
    console.log('localStorage updated.');
    setUser({
      id: uuidv4(),
      title: '',
      description: '',
      priority: '',
      created: new Date(),
      updated: new Date()
    });
};


  return (
    <div>
      <DModal
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        key={id}
        id={id}
        title={title}
        description={description}
        priority={priority}
        created={created}
        updated={updated}
      />
    </div>
  );
};
