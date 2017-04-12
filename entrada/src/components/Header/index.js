import React from 'react';
import HeaderLogo from '../HeaderLogo'
import HeaderNav from '../HeaderNav'
import HeaderLinks from '../HeaderLinks'
import './index.css'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='header'>
        <div className="header__row">
          <HeaderLogo />
          <HeaderNav mobileNavClicked={this.props.mobileNavClicked} />
        </div>
        <div className="header__row">
          <HeaderLinks />
        </div>
      </div>
    )
  }
}
