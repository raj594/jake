import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import NavSidebar from './components/NavSidebar';
import Content from './components/Content';
import Contact from './components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Flexbox flexDirection="row" className="App">
          <NavSidebar />
          <Content />
          <Contact />
        </Flexbox>
      </div>
    );
  }
}

export default App;
