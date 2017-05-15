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
          Originally built as an internal solution to our own unique and complex travel needs, the Entrada Travel team realized we could offer a service that caters to elite travel groups. Our small team of elite agents is distributed globally delivering the service you expect around the clock.
        </div>
        <div className="about__team">
          <div className="about__team__member">
          <div className="about__team__member__info">
            <div className="about__team__member__info__name">Anthony Gonzales</div>
            <div className="about__team__member__info__role">CEO</div>
            <div className="about__team__member__info__bio">
              Prior to founding Entrada, Anthony spent his time managing travel for artist and entertainer Drake, who he still works with today in a multitude of capacities. His journey has taken him across the globe several times, organizing complicated logistics for large groups. That first-hand experience and awareness of the ever-changing complexities of elite travel is what spurred him to take his experience public. An avid meditator and yoga practitioner, Anthony enjoys all things creative.
            </div>
          </div>
          </div>
          <div className="about__team__member">
            <div className="about__team__member__info">
              <div className="about__team__member__info__name">Tony Sheng</div>
              <div className="about__team__member__info__role">COO</div>
              <div className="about__team__member__info__bio">
                With a degree in Neuroscience from Amherst College, Tony has always been interested in how things work and how to make them better. He started his career at McKinsey & Company, helping dozens of Fortune 500 companies debug and resolve their biggest operational challenges. Since then, Tony has been building and growing tech products on the forefront of social, media, and entertainment. It’s that eye for detail, operational know-how, and ability to manage complex systems that make him such an invaluable part of the Entrada team.
              </div>
            </div>
          </div>
          </div>
        	<div className='about__cta'>
        		<a className='button' href='mailto:info@entradatravel.com'>Contact us</a>
        	</div>
        </div>
    )
  }
}
