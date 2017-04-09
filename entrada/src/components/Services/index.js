import React from 'react';
import ReactDOM from 'react-dom'
import Approach from '../Approach'
import './index.css'

export default class Services extends React.Component {
  renderApproach () {
    return (
      ReactDOM.render(<Approach />, document.getElementById('index'))
    )
  }

  render () {
    return (
      <div className='services'>
        <div className='services__cta'>
          <a className='button' onClick={ this.renderApproach }>Our approach</a>
        </div>
      </div>
    )
  }
}
