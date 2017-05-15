import React, { Component } from 'react';
import './index.css';
import Approach from '../Approach';
import ReactDOM from 'react-dom'

export default class HeroCopy extends Component {
  renderApproach () {
    return (
      ReactDOM.render(<Approach />, document.getElementById('index'))
    )
  }

  render() {
    return (
      <div className='home home--top'>
        <div className="home__header home__header--top">
          Born from Experience.
        </div>
        <div className='home__copy'>
          Entrada Travel began as an internal solution for one of the most successful entertainers in the world. Our experience on the “client side” led to the realization that there was a real need for bespoke travel services for the elite travel professional – those with the means and the need for customized, detail-oriented travel coordination.
          <p>
            Since our founding, our mission has been simple. To serve those on their journey to enrich the world. In service of that mission we keep our client list small and only hire the very best.
          </p>
        </div>
        <div className='home__cta'>
          <a className='button button--home' onClick={ this.renderApproach }>Our approach</a>
        </div>
      </div>
    )
  }
}
