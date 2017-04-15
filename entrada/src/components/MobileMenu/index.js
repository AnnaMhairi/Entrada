import React from 'react';
import './index.css';
import img from '../../img/Entrada_Travel_Icon.svg';
import ReactDOM from 'react-dom'
import Approach from '../Approach'
import Team from '../Team'

export default class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  renderApproach () {
    return (
      ReactDOM.render(<Approach />, document.getElementById('index'))
    )
  }

  renderTeam () {
    return (
      ReactDOM.render(<Team />, document.getElementById('index'))
    )
  }

  render () {
    let loading = this.props.loading ? "loading" : ""
    let viewState = this.props.navOpen ? "open" : "closed"
    let classes = `menu ${viewState} ${loading}`

    return (
      <div className={ classes }>
        <div className="menu__links">
          <ul>
            <li><a className="menu__links__link" onClick={ this.renderApproach }>Approach</a></li>
            <li><a className="menu__links__link" onClick={ this.renderTeam }>Team</a></li>
            <li><a className="menu__links__link">Contact</a></li>
          </ul>
        </div>
        <div className="menu__footer">
            <ul>
              <li><a className="menu__links__link">General inquiries</a></li>
              <li className="menu__links__email">info@entradatravel.com</li>
            </ul>
            <img width='50' src={img}/>
        </div>
      </div>
    )
  }
}
