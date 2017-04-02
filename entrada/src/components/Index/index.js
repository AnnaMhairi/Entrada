import React, { Component } from 'react';
import Hero from '../Hero'
import HeroCopy from '../HeroCopy'
import Services from '../Services'
import '../../index.css';
import './index.css';

export default class Index extends Component {
  render() {
    return (
      <div id="index">
        <Hero />
        <HeroCopy />
        <Services />
      </div>
    );
  }
}
