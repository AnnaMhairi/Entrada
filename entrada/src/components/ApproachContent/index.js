import React from 'react';
import './index.css'

export default class ApproachContent extends React.Component {
  render () {
    return (
      <div className='approach'>
        <div className='approach__header'>
          Our approach
        </div>
        <div className="approach__items">
          <div className="approach__items__item">
            <p className='approach__items__item__copy text--emphasis'>Knowledgeable</p>
            <p className='approach__items__item__copy'>Due diligence is a top priority. Our agents actively stay in the know, do their research when planning a trip, and always take client feedback as a guiding method to superior service.</p>
          </div>
          <div className="approach__items__item">
            <p className='approach__items__item__copy text--emphasis'>Dependable</p>
            <p className='approach__items__item__copy'>Flight changes, room switches and any last minute service requests are normal in our line of work. We assign a dedicated team to each client so we can help you when you need help, not when we become available.</p>
          </div>
          <div className="approach__items__item">
            <p className='approach__items__item__copy text--emphasis'>Refined</p>
            <p className='approach__items__item__copy'>Our team takes the clutter out of the travel management process so that you receive only organized, timely, and easily accessible information. Over time, your service continually improves as our team refines our process to suit your unique needs. </p>
          </div>
        </div>
        <div className="approach__cta">
          <a className='button' href='./team.html'>Our team</a>
        </div>
      </div>
    )
  }
}
