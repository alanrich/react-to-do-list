import React, { Component } from  'react';
import FlipMove from 'react-flip-move';

class ToDoItems extends Component {

  constructor(props){
    super(props)
    // Using 'this' in the onClick delete handler necessitates this line
    this.createTasks = this.createTasks.bind(this);
  }
  // call the delete func passed into this component via props
  callDeleteFunction(key){
    this.props.callDeleteFunction(key);
  }
  // func will be used to render state to DOM by mapping the array of tasks
  createTasks(item) {
    return <li key={item.key}
              // Give each rendered task the ability to delete itself
               onClick={()=>this.callDeleteFunction(item.key)}>
              {item.text}
          </li>
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
