import React, { Component } from  'react';
import ToDoItems from 'ToDoItems';

class ToDoList extends Component {
  constructor(props){
    super(props);
    this.state={
      items: [],
    }
    this.addItem = this.addItem.bind.this;
    this._inputElement = React.createRef();
  }
// App Methods
  addItem(e){

  }


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
          <TodoItems />
        </form>
        </div>
      </div>
    );
  }

}
export default ToDoList;
