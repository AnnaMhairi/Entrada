import React from 'react';
import './index.css';
import ReactDOM from 'react-dom'
import $ from 'jquery';
import MobileMenu from '../MobileMenu'
import Index from '../Index'
import Approach from '../Approach'
import Team from '../Team'

export default class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="header__nav">
        <a className="header__nav__icon" onClick={this.props.mobileNavClicked}>
          <i className="material-icons">more_vert</i>
        </a>
      </div>
    )
  }
}
