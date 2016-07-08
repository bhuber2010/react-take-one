import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom'

export default class Sliders extends React.Component {
  constructor(){
    super();
    this.state = {
      red: 128,
      green: 128,
      blue: 128
    }
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    })
  }
  render(){
    return (
      <div>
        <Slider ref="red" update={this.update} />
        Red: {this.state.red}
        <br />
        <Slider ref="green" update={this.update} />
        Green: {this.state.green}
        <br />
        <Slider ref="blue" update={this.update} />
        Blue: {this.state.blue}
        <br />
      </div>
    )
  }
}

class Slider extends React.Component {
  render(){
    return (
        <div>
        <input ref="inp" type="range"
          min="0"
          max="255"
          onChange={this.props.update} />
        </div>
    )
  }
}
