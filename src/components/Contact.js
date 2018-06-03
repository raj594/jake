import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

class Contact extends Component {
  render() {
    return (
      <Flexbox flexDirection="column" className="contact">
        <div>
          <a href="https://www.instagram.com/lord_jake_juice/" className='contact-line'> 
            @lord_jake_juice 
          </a>
        </div>
      </Flexbox>
    );
  }
} 

export default Contact;
