import React, { Component } from 'react';
import HeroApproach from '../HeroApproach'
import HeroCopyApproach from '../HeroCopyApproach'
import ApproachContent from '../ApproachContent'
import Services from '../Services'
import '../../index.css';
import './index.css';

export default class Approach extends Component {
  render() {
    return (
      <div id="approach">
        <HeroApproach />
        <HeroCopyApproach />
        <ApproachContent />
      </div>
    );
  }
}
