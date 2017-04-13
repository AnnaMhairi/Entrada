import React, { Component } from 'react';
import Hero from '../Hero'
import HeroCopy from '../HeroCopy'
import Services from '../Services'
import '../../index.css';
import './index.css';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const scroll = this.props.scroll

    return (
      <div id="index" className={scroll}>
        <Hero />
        <HeroCopy />
      </div>
    );
  }
}
