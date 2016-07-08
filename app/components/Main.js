import React from 'react';
const SearchGithub = require('./SearchGithub');
import SliderButton from './Random/SliderButton';

export default class Main extends React.Component{
  render(){
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-5 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchGithub />
          </div>
          <div className="col-sm-1 col-sm-offset-2" style={{marginTop: 15}}>
            <SliderButton />
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
