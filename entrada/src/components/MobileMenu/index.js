import React from 'react';
import './index.css';

export default class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let viewState = this.props.navOpen ? "open" : "closed"
    let classes = `menu ${viewState}`

    return (
      <div className={ classes }>
        <div className="menu__links">
          <ul>
            <li><a className="menu__links__link" href='./approach.html'>Approach</a></li>
            <li><a className="menu__links__link" href='./team.html'>Team</a></li>
            <li><a className="menu__links__link">Contact</a></li>
          </ul>
        </div>
        <div className="menu__footer">
            <ul>
              <li><a className="menu__links__link">General inquiries</a></li>
              <li className="menu__links__email">info@entradatravel.com</li>
            </ul>
            <img width='50' src='./img/Entrada_Travel_Icon.svg'/>
        </div>
      </div>
    )
  }
}