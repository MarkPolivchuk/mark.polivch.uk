import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';
//
import Routes from 'react-static-routes'; /* eslint-ignore */

import './styles.css';
import Container from './components/tailwindcss/Container';

const Footer = () => (<div />
);


const App = () => (
  <Router>
    <div>
      <div className="content min-h-screen h-full flex flex-col">
        <Routes />
        <Footer />
      </div>
    </div>
  </Router>
);

export default hot(module)(App);
