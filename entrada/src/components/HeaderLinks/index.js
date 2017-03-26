import React from 'react';
import './index.css'

export default class HeaderLinks extends React.Component {
  render () {
    return (
      <div className="header__links">
        <a className="header__links__link" href='./approach.html'>Approach</a>
        <a className="header__links__link" href='./team.html'>Team</a>
        <a className="header__links__link">Contact</a>
      </div>
    )
  }
}
