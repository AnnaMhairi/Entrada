import React from 'react';
import ReactDOM from 'react-dom'
import Index from '../Index'
import './index.css'

export default class HeaderLogo extends React.Component {
  constructor(props) {
    super(props);
  }

  renderIndex () {
    this.props.closeMenu()
    return (
      ReactDOM.render(<Index />, document.getElementById('index'))
    )
  }

  render () {
    return (
      <div className='header__logo'>
        <a className='header__logo__left' onClick={ this.renderIndex.bind(this) }>Entrada</a>
        <a className='header__logo__right' onClick={ this.renderIndex.bind(this) }>Travel</a>
      </div>
    )
  }
}
