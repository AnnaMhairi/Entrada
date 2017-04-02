import React, { Component } from 'react';
import HeroTeam from '../HeroTeam'
import TeamContent from '../TeamContent'
import '../../index.css';
import './index.css';

export default class Team extends Component {
  render() {
    return (
      <div id="team">
        <HeroTeam />
        <TeamContent />
      </div>
    )
  }
}
