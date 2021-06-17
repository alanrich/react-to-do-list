import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './ToDoList';

//grab a reference from the DOM
let destination = document.querySelector('#container')
//render the app to that DOM reference
ReactDOM.render(
  <div>
    <ToDoList />
  </div>,
  destination
);
