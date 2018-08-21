import React from 'react';
import uuid from 'node-uuid';

export default class App extends React.Component {
  render() {
    const notes = [
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
    ];
    return (
      <div>
        <ul>
          {notes.map(note => <li id={note.key}>{note.task}</li>)}
        </ul>
      </div>
    );
  }
}
