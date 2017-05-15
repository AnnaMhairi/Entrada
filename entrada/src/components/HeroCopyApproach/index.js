import React, { Component } from 'react';
import './index.css';

export default class HeroCopyApproach extends Component {
  render() {
    return (
      <div className='approach approach--top'>
      	<div className='approach__header approach__header--top'>
      		A travel partner like no other.
      	</div>
        <div className='approach__copy'>
          <p>
          The road is no place for surprises. Which is why we treat travel coordination as an almost sacred bond of trust. Our relentless attention to detail, our ability to adjust and adapt on a moment’s notice, and our experience that comes from having been out on the road are what differentiate us from other travel services.
          </p>
          <p>
          We’re doing our job best when you or your client remain blissfully unaware that we’re doing our job. Our goal is always to allow you to do what you do best, anywhere on the globe. Hotel, flight, ground transportation, private charter, passports, visas and anything in between; our small staff of veteran agents are distributed globally to deliver the service you expect around the clock.
          </p>
        </div>
      </div>
    )
  }
}
