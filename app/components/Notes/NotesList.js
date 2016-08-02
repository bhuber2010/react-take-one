import React from 'react';
import RemoveNote from './removeNote';

const NotesList = React.createClass({

  render: function(){
    const handleRemoveNote = this.props.handleRemoveNote;

    const notes = this.props.notes.map(function(note, index){
      let noteObj = {index, note};
      return (
        <li className="list-group-item flex-item" key={index}>
          {note}
          <span> </span>
          <RemoveNote
            note={noteObj}
            removeNote={handleRemoveNote} />
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
