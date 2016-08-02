import React from 'react';
const NotesList = require('./NotesList');
import AddNote from './addNote';

export default class Notes extends React.Component {

  render() {
    return (
      <div>
        <h3> Notes for {this.props.username}</h3>
        <AddNote username={this.props.username} addNote={this.props.addNote} />
        <NotesList
          notes={this.props.notes}
          handleRemoveNote={this.props.removeNote}/>
      </div>
    )
  }
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired,
};
