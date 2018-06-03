import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

class Contact extends Component {
  render() {
    return (
      <Flexbox flexDirection="column" className="contact">
        <div>
          <p className='contact-line'>The 411</p>
          <p className='contact-line'>into my dm</p>
          <p className='contact-line'>@lord_jake_juice</p>
        </div>
      </Flexbox>
    );
  }
} 

export default Contact;
