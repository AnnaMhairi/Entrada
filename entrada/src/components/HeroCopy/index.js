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
          Travel management for elite artists,<br/> athletes, and entertainment professionals
        </div>
        <div className='home__copy'>
          High-profile groups have unique travel needs. Our service started as an internal solution for one of the most successful entertainers in the world. Understanding others like us could benefit from this solution, we assembled a team of highly skilled and dedicated individuals to deliver dependable, knowledgeable and refined service.
          <p>
            Entrada Travel&#39;s mission is to serve those on their journey to enrich the world. In service of that mission we keep our client list small and only hire the very best.
          </p>
        </div>
        <div className='home__cta'>
          <a className='button button--home' onClick={ this.renderApproach }>Our approach</a>
        </div>
      </div>
    )
  }
}
