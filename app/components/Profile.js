import React from 'react';
import Router from 'react-router';
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
import Notes from './Notes/Notes';
import getGithubInfo from '../utils/helpers';
import Rebase from 're-base';

const base = Rebase.createClass('https://react-github-notez.firebaseio.com/');

const Profile = React.createClass({
  getInitialState: function(){
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  componentDidMount: function(){
    this.ref = base.syncState(this.props.params.username, {
      context: this,
      state: 'notes',
      asArray: true
    })
    this.init(this.props.params.username);
  },
  componentWillReceiveProps: function(newProps){
    base.removeBinding(this.ref);
    this.init(newProps.params.username);
  },
  componentWillUnmount: function(){
    base.removeBinding(this.ref);
  },
  init: function(username) {
    getGithubInfo(username)
      .then(function(data){
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      }.bind(this))
  },
  handleAddNote: function(newNote){
    base.push(this.props.params.username, {
      data: newNote
    })
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
