import React from 'react';
import './index.css'

export default class TeamContent extends React.Component {
  render () {
    return (
      <div className='about'>
        <div className='about__header'>
        	Management team
        </div>
        <div className="about__copy">
          Our small team of elite agents is distributed globally to focus on delivering the service you expect around the clock.
          <p>Originally built as an internal solution to our own unique and complex travel needs, the Entrada Travel team realized we could offer a service that uniquely serves the small number of elite travel groups like ourselves.</p>
        </div>
        <div className="about__team">
          <div className="about__team__member">
          <div className="about__team__member__info">
            <div className="about__team__member__info__name">Anthony Gonzales</div>
            <div className="about__team__member__info__role">CEO</div>
            <div className="about__team__member__info__bio">
              Prior to founding Entrada, Anthony spent his time managing travel for artist and entertainer Drake, who he still works with today in a multitude of capacities. This journey has taken him across the globe several times, organizing complicated logistics for large groups. With a strong first-hand experience, he built Entrada Travel as superior service for the most discerning clients. Anthony is an active meditator and yoga practitioner who enjoys all things creative.
            </div>
          </div>
          </div>
          <div className="about__team__member">
            <div className="about__team__member__info">
              <div className="about__team__member__info__name">Tony Sheng</div>
              <div className="about__team__member__info__role">COO</div>
              <div className="about__team__member__info__bio">
                With a degree in Neuroscience from Amherst College, Tony has always been interested in how things work and how to make them better. He started his career at McKinsey & Company, helping dozens of Fortune 500 companies debug and resolve their biggest operational challenges. Since then, Tony has been building and growing tech products on the forefront of social, media, and entertainment.
              </div>
            </div>
          </div>
          </div>
          <div className='giving'>
            <div className='giving__header'>Giving back</div>
            <div className='giving__copy'>Entrada Travel is passionate about seeing the world and understands the transformative experience travel offers. Understanding the hefty costs associated with travel, we work with BLANK to help subsidize class trips around the globe for underprivileged urban youth.</div>
          </div>
        	<div className='about__cta'>
        		<a className='button' href='./contact.html'>Contact us</a>
        	</div>
        </div>
    )
  }
}
