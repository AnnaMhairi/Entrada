import React from 'react';
import img from './img/Entrada_Travel_Icon.svg'
import './index.css'

export default class Footer extends React.Component {
  render () {
    let navOpen = this.props.navOpen ? 'hidden' : 'show'
    let classes = `footer ${navOpen}`

    return (
      <div className={classes}>
    	  <div className='footer__left'>
        	<ul>
      			<li className='footer__item'>
              <a className='footer__link' href='mailto:info@entradatravel.com'>Contact</a>
            </li>
        		<li className='footer__item'><a className='footer__link'>Terms of use</a></li>
    		  </ul>
    	  </div>
    	  <div className='footer__right'>
    		  Entrada Travel is a Smartflyer Affiliate - IATA 33674255
    	  </div>
    	  <div className="footer__bottom">
    		  <img width='50' src={img} alt=''/>
    	  </div>
      </div>
    )
  }
}
