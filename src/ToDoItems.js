import React, { Component } from  'react';
import FlipMove from 'react-flip-move';

class ToDoItems extends Component {
// func will be used to render state to DOM by mapping the array of tasks
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  };
  render() {
    // assign the state items array to a variable
    let toDoEntries = this.props.entries;
    // convert each state item to a DOM Node and store them all in an array
    let listItems = toDoEntries.map( e => this.createTasks(e));
    return(
    // render that array
      <ul className='theList'>
        <FlipMove duration={250} easing='ease-out'>
        {listItems}
        </FlipMove>
      </ul>
    );
  };
};

export default ToDoItems;
