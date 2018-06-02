import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

class Contact extends Component {
  render() {
    return (
      <Flexbox flexDirection="column" className="contact">
        <div>
          <p>The 411</p>
          <p>into my dm</p>
          <p>@lord_jake_juice</p>
        </div>
      </Flexbox>
    );
  }
} 

export default Contact;
