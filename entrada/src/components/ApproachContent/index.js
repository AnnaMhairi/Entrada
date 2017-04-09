import React from 'react';
import ReactDOM from 'react-dom'
import Team from '../Team'
import './index.css'

export default class ApproachContent extends React.Component {
  renderTeam () {
    return (
      ReactDOM.render(<Team />, document.getElementById('index'))
    )
  }

  render () {
    return (
      <div className='approach'>
        <div className='approach__header'>
          Distinctive service, distinguished values
        </div>
        <div className="approach__items">
          <div className="approach__items__item">
            <p className='approach__items__item__copy text--emphasis'>Knowledgeable</p>
            <p className='approach__items__item__copy'>
              Due diligence is a top priority. We work hard to understand each client&#39;s individual needs. Our agents actively stay in the know, do their research when planning, and always take client feedback as a guiding method to a continually improved service.
            </p>
          </div>
          <div className="approach__items__item">
            <p className='approach__items__item__copy text--emphasis'>Dependable</p>
            <p className='approach__items__item__copy'>
              Flight changes, room switches and any last minute service requests are normal in our line of work. Availability is a top priority and our team of agents work to manage their schedules around a client&#39;s needs.
            </p>
          </div>
          <div className="approach__items__item">
            <p className='approach__items__item__copy text--emphasis'>Refined</p>
            <p className='approach__items__item__copy'>
              In a complex world you need a simple solution. Our team is committed to handling the details, sifting through the clutter and streamlining your complex travel bookings. You deserve nothing less than organized and easily accessible information.
            </p>
          </div>
        </div>
        <div className="approach__cta">
          <a className='button' onClick={ this.renderTeam }>Our team</a>
        </div>
      </div>
    )
  }
}
