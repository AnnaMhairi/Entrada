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
          We are an elite team founded in Venice Beach, distributed globally, commited to serving those on their journey to enrich the world.
        </div>
        <div className="about__team">
          <div className="about__team__member">
          <div className="about__team__member__info">
            <div className="about__team__member__info__name">Anthony Gonzales</div>
            <div className="about__team__member__info__role">CEO</div>
            <div className="about__team__member__info__bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</div>
          </div>
          </div>
          <div className="about__team__member">
            <div className="about__team__member__info">
              <div className="about__team__member__info__name">Tony Sheng</div>
              <div className="about__team__member__info__role">COO</div>
              <div className="about__team__member__info__bio">With a degree in Neuroscience from Amherst College, Tony has always been interested in how things work and how to make them better. He started his career at McKinsey & Company, helping dozens of Fortune 500 companies debug and resolve their biggest operational challenges. Since then, Tony has been building and growing tech products on the forefront of social, media, and entertainment.</div>
            </div>
          </div>
          </div>
        	<div className='about__cta'>
        		<a className='button' href='./contact.html'>Contact us</a>
        	</div>
        </div>
    )
  }
}
