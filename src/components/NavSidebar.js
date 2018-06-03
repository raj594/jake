import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

const links = ['Sublevel Mag',
                'Grad Practice',
                '2001 A.S.O',
                'Vampyroteuthis',
                'EJ Hill/L. Halsey', 
                'Open Studios', 
                'Bojana Cjevic',
                'School of Dance', 
                'Veggie Cloud', 
                'Young Joon Kwak',      
                'Dance Shirts',
                'Gluten Death',
                'Drusilla Titling'
                ];

class NavSidebar extends Component {
  render() {
    return (
      <Flexbox flexDirection="column" className="sidebar">
        <div className="name">
          Jacob Shpall
        </div>
        <div className="links">
          {links.map( (link, i) => 
            <div className="link" index={i} key={i}>
              {link}
            </div>)}
        </div>
      </Flexbox>
    );
  }
} 

export default NavSidebar;
