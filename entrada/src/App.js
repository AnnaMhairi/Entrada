import React, { Component } from 'react';
import MobileMenu from './components/MobileMenu'
import Index from './components/Index'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
    };

    this.toggleState = this.toggleState.bind(this)
  }

  toggleState () {
    this.state.navOpen ? this.setState({ navOpen: false }) : this.setState({ navOpen: true })
  };

  render() {
    let scrollClass = this.state.navOpen ? 'fixed' : 'scroll';
    return (
      <div id="app">
        <Header mobileNavClicked={this.toggleState}/>
        { this.state.navOpen ?
          <MobileMenu navOpen={this.state.navOpen}/> :
          <MobileMenu navOpen={this.state.navOpen}/>
        }
        <Index scroll={scrollClass} />
        <Footer />
      </div>
    );
  }
}

export default App;
