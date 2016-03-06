import React from 'react';
import Router from 'react-router';
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
import Notes from './Notes/Notes';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';
import getGithubInfo from '../utils/helpers';

const Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function(){
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  componentDidMount: function(){
    this.ref = new Firebase('https://react-github-notez.firebaseio.com/');
    this.init(this.props.params.username);
  },
  componentWillReceiveProps: function(newProps){
    this.unbind('notes');
    this.init(newProps.params.username);
  },
  componentWillUnmount: function(){
    this.unbind('notes');
  },
  init: function(username) {
    var childRef = this.ref.child(username);
    this.bindAsArray(childRef, 'notes');

    getGithubInfo(username)
      .then(function(data){
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      }.bind(this))
  },
  handleAddNote: function(newNote){
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote)
  },
  render: function(){
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={this.handleAddNote}/>
        </div>
      </div>
    )
  }
});

module.exports = Profile;
