import React, { Component } from 'react';
import Index from './components/Index'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
          <Index />
        <Footer />
      </div>
    );
  }
}

export default App;
