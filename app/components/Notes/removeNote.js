import React from 'react';

export default class RemoveNote extends React.Component {
  constructor(){
    super();
  }

  componentDidMount() {
    this.noteObj = this.props.note;
    console.log(this.props.note);
  }

  removeNote(e) {
    console.log(this.props);
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
