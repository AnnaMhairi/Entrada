import React from 'react';
import './index.css'

export default class HeaderLogo extends React.Component {
  render () {
    return (
      <div className='header__logo'>
        <a className='header__logo__left' href={'/'}>Entrada</a>
        <a className='header__logo__right' href={'/'}>Travel</a>
      </div>
    )
  }
}
