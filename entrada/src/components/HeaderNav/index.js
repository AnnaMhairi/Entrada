import React from 'react';
import './index.css';
import ReactDOM from 'react-dom'
import MobileMenu from '../MobileMenu'

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
