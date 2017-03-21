import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default App;
