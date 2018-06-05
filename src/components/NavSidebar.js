import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

const links = ['Sublevel Mag',
                'Vampyroteuthis',
                'The Big Dream',
                '2001 A.S.O',
                'EJ Hill/L. Halsey',
                'Barbara Imhof', 
                'Open Studios', 
                'Bojana Cjevic',
                'School of Dance', 
                'Veggie Cloud',      
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
