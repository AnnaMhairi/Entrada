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
      loading: true
    };

    this.toggleState = this.toggleState.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  toggleState () {
    this.state.navOpen ? this.setState({ navOpen: false, loading: false }) : this.setState({ navOpen: true, loading: false })
  };

  closeMenu () {
    this.setState({ navOpen: false})
  }

  render() {
    let scrollClass = this.state.navOpen ? 'fixed' : 'scroll';
    return (
      <div id="app">
        <Header mobileNavClicked={this.toggleState}/>
        { this.state.navOpen ?
          <MobileMenu navOpen={this.state.navOpen} loading={this.state.loading} closeMenu={this.closeMenu}/> :
          <MobileMenu navOpen={this.state.navOpen} loading={this.state.loading} closeMenu={this.closeMenu} />
        }
        <Index scroll={scrollClass} />
        <Footer navOpen={this.state.navOpen} />
      </div>
    );
  }
}

export default App;
