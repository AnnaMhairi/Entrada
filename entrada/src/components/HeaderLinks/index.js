import React from 'react';
import ReactDOM from 'react-dom'
import Approach from '../Approach'
import Team from '../Team'
import './index.css';

export default class HeaderLinks extends React.Component {
  renderApproach () {
    return (
      ReactDOM.render(<Approach />, document.getElementById('index'))
    )
  }

  renderTeam () {
    return (
      ReactDOM.render(<Team />, document.getElementById('index'))
    )
  }

  render () {
    return (
      <div className="header__links">
        <a className="header__links__link" onClick={ this.renderApproach }>Approach</a>
        <a className="header__links__link" onClick={ this.renderTeam }>Team</a>
        <a className="header__links__link" href='mailto:info@entradatravel.com'>Contact</a>
      </div>
    )
  }
}
