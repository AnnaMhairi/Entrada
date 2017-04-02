import React, { Component } from 'react';
import './index.css';

export default class HeroCopy extends Component {
  render() {
    return (
      <div className='home home--top'>
        <div className="home__header">Travel management for elite artists</div>
          <div className='home__copy'>
            High profile teams have unique needs. We know because we're behind some of
            the biggest tours of all time. We rely on our decades of experience to deliver
            a dependable, knowledgeable, and refined travel experience.
          </div>
      </div>
    )
  }
}
