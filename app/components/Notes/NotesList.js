import React from 'react';

const NotesList = React.createClass({
  render: function(){
    console.log("Notes in NL", this.props.notes);
    const notes = this.props.notes.map(function(note, index){
      return <li className="list-group-item" key={index}>{note}</li>
    });
    return (
      <ul className="list-group">
        {notes}
      </ul>
    )
  }
});

module.exports = NotesList;
