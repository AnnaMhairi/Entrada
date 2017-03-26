import React from 'react';
import './index.css';

export default class Hero extends React.Component {
  render () {
    return (
      <div className='hero hero--home'>
        <div className='hero__image'>
          <div className="hero__image__overlay"></div>
        </div>
      </div>
    )
  }
}
