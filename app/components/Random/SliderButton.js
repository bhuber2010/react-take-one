import React from 'react';
import {Router, Link} from 'react-router';

export default class SliderButton extends React.Component {

  render() {
    return (
      <Link to="/sliders" className="btn btn-block btn-primary">Sliders</Link>
    )
  }
}
