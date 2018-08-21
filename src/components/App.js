import React from 'react';
import uuid from 'node-uuid';
import Note from './Note';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes : [
        {
          key: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          key: uuid.v4(),
          task: 'Learn React'
        },
        {
          key: uuid.v4(),
          task: 'Do Laundry'
        } 
      ]
    }
  }

  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        key: uuid.v4(),
        task: 'New Task'
      }])
    });
  };


  render() {
    const notes = this.state.notes; 
    return (
      <div>
        <button onClick={this.addNote}>+</button>  
        <ul>
          {notes.map(note => <li key={note.key}><Note task={note.task}/></li>)}
        </ul>
      </div>
    );
  }

  
}
