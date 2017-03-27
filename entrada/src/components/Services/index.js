import React from 'react';
import './index.css'

export default class Services extends React.Component {
  render () {
    return (
      <div className='services'>
        <div className="services__header">About</div>
          <div className='services__copy'>
          <span className='text--emphasis'>Entrada Travel</span> is a boutique travel management company that serves an elite group of artists, athletes and entertainment professionals.  Our mission is to serve those on their journey to enrich the world. In service of that mission we keep our client list small and only hire the very best.
          </div>
        <div className='services__cta'>
          <a className='button' href='./approach.html'>Our approach</a>
        </div>
      </div>
    )
  }
}
