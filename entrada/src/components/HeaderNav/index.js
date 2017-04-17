import React from 'react';
import './index.css';
import ReactDOM from 'react-dom'
import MobileMenu from '../MobileMenu'

export default class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let icon = this.props.navOpen ? "horizontal" : "vertical"
    let loading = this.props.loading ? "loading" : ""
    let classes = `material-icons ${icon} ${loading}`

    return (
      <div className="header__nav">
        <a className="header__nav__icon" onClick={this.props.mobileNavClicked}>
          <i className={classes}>more_vert</i>
        </a>
      </div>
    )
  }
}
