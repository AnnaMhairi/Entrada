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
          Driven by values.
        </div>
        <div className="approach__items">
          <div className="approach__items__item">
            <p className='approach__items__item__copy text--emphasis'>Know your audience.</p>
            <p className='approach__items__item__copy'>
              Due diligence is a top priority. Understanding each client&#39;s individual needs is the first step in building our relationships. Our agents actively stay in the know, do their research when planning, and always take client feedback as a guide to continually improving service.
            </p>
          </div>
          <div className="approach__items__item">
            <p className='approach__items__item__copy text--emphasis'>Trust is built, not given.</p>
            <p className='approach__items__item__copy'>
              From flight changes to room switches and everything in between, last-minute service requests are a part of life on the road. Which is why we pride ourselves on our availability. Our team of agents assigned to you manage their schedules around your needs. Meaning when you pick up the phone, there’s always a familiar voice on the other end there to assist.
            </p>
          </div>
          <div className="approach__items__item">
            <p className='approach__items__item__copy text--emphasis'>Complex world. Simple solutions.</p>
            <p className='approach__items__item__copy'>
              At our heart, Entrada Travel is a team aligned around a specific purpose – helping you do your job. Sweating the details, sifting through the clutter, and streamlining your complex travel bookings is how we do it. You deserve a travel partner who gives you their undivided attention, fills you with confidence, and eliminates confusion and mistakes. And that is exactly what Entrada Travel is built to do.
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
