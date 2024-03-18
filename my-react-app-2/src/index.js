import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import List from './TodoApp';

const demo = {
   backgroundColor: "red",
   textAlign: "center"
}

setInterval(() => {
  const myFirstElement = 
  <div>
        <h1 className='headingStyle'>Hello React, create apppppopopopo!</h1>
        <h2 style={demo}>This is H2</h2>
        <h1 className='headingStyle'>{new Date().toLocaleTimeString()}</h1>
        <App /> <List />
    </div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);
}, 1000);