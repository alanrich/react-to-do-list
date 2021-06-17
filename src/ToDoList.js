import React, { Component } from  'react';
import ToDoItems from './ToDoItems';

class ToDoList extends Component {
  constructor(props){
    super(props);
    this.state={
      items: [],
    };
    this.addItem = this.addItem.bind(this);

  };
  // App Methods
  addItem(e){
  // check for a user input
    if (this._inputElement.value !==''){
      // create a todo item with a unique identifier
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      // update the state with the new item
      this.setState((prevState) => {
        // concatenate the new item to the items key in the state object
        return {
          items: prevState.items.concat(newItem)
        }
      });
      // reset the input field
      this._inputElement.value = '';
    };
    // prevent page reload on form submission
    console.log(this.state.items);
    e.preventDefault();
  };


  render() {
    return (
      <div className='todoListMain'>
        <div className="header">
        <form onSubmit={this.addItem}>
          <input
            /*ref assigns the value of the input element to a variable
            providing access to the content of the form */
            ref={(a)=>this._inputElement = a}
            type="text"
            placeholder='enter task'/>
          <button type='submit'>add</button>
          <ToDoItems entries={this.state.items}/>
        </form>
        </div>
      </div>
    );
  }

}
export default ToDoList;
