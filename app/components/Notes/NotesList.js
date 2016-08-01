import React from 'react';
import RemoveNote from './removeNote';

const NotesList = React.createClass({
  render: function(){
    const notes = this.props.notes.map(function(note, index){
      let noteObj = {index, note};
      return (
        <li className="list-group-item" key={index}>
          {note}
          <RemoveNote note={noteObj} />
        </li>
      )
    });
    return (
      <ul className="list-group">
        {notes}
      </ul>
    )
  }
});

module.exports = NotesList;
