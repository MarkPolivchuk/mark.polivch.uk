import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';
//
import Routes from 'react-static-routes'; /* eslint-ignore */

import './styles.css';
import Container from './components/tailwindcss/Container';

const Footer = () => (
  <Container className="my-5" padding={0}>
    <a href="https://icons8.com" className="text-blue-lightest opacity-75 text-xs no-underline hover:underline uppercase">Icon pack by Icons8</a>
  </Container>
);


const App = () => (
  <Router>
    <div>
      <div className="content min-h-screen h-full bg-blue px-3 pt-5">
        <Routes />
        <Footer />
      </div>
    </div>
  </Router>
);

export default hot(module)(App);
