import React, { Component } from 'react';
import Header from '../Header'
import Footer from '../Footer'
import Hero from '../Hero'
import '../../index.css';
import './index.css';

export default class Index extends Component {
  render() {
    return (
      <div id="index">
        <Header />
        <Hero />
        <Footer />
      </div>
    );
  }
}
