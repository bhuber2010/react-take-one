import React from 'react';

export default class RemoveNote extends React.Component {
  constructor(){
    super();
    this.removeNote = this.removeNote.bind(this)
  }

  removeNote(e) {
    // console.log(this.props.note);
    this.props.removeNote(this.props.note);
  }

  render() {

    return (
      <button className="btn btn-danger" onClick={this.removeNote}>X</button>
    )
  }
}

RemoveNote.propTypes = {
  note: React.PropTypes.object.isRequired
}
