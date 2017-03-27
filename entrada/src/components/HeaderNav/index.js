import React from 'react';
import './index.css';

export default class HeaderNav extends React.Component {
  render () {
    return (
      <div className='header__nav'>
        <a className="header__nav__icon" href='./menu.html'>
          <i className="material-icons">more_vert</i>
        </a>
      </div>
    )
  }
}
