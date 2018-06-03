import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import PicContainer from './PicContainer';

const books = [
			{
				caption: 'The second issue of ‘Sublevel’, Calarts’ critical studies publication—2018',
				picPath: require('../assets/Book_tier1/a_sublev_0_T_O_C.jpg')
			},
			{
				caption: 'The second issue of ‘Sublevel’, Calarts’ critical studies publication—2018',
				picPath: require('../assets/Book_tier1/a_sublev_1.jpg')
			},
			{
				caption: 'The second issue of ‘Sublevel’, Calarts’ critical studies publication—2018',
				picPath: require('../assets/Book_tier1/a_sublev_2.jpg')
			},
			{
				caption: 'The second issue of ‘Sublevel’, Calarts’ critical studies publication—2018',
				picPath: require('../assets/Book_tier1/a_sublev_3.jpg')
			},
			{
				caption: 'Vilém Flusser’s essay about the ‘vampire squid from hell’—2017',
				picPath: require('../assets/Book_tier1/Vampyro_0_TOC.jpg')
			},
			{
				caption: 'Vilém Flusser’s essay about the ‘vampire squid from hell’—2017',
				picPath: require('../assets/Book_tier1/Vampyro_spread_1.jpg')
			},
			{
				caption: 'Vilém Flusser’s essay about the ‘vampire squid from hell’—2017',
				picPath: require('../assets/Book_tier1/Vampyro_spread_2.jpg')
			}];

const posters = [
{
	caption: 'Calarts visiting architect poster for Barbara Imhof—2018',
	picPath: require('../assets/Poster_tier_2/Babs_Imhof_CA_VA.jpg')
},
{
	caption: 'Calarts visiting architect poster for EJ Hill & Lauren Halsey—2018',
	picPath: require('../assets/Poster_tier_2/ej_final_1.jpg')
},
{
	caption: 'Poster & identity for Calarts MFA Open Studios—2018',
	picPath: require('../assets/Poster_tier_2/OPEN_STUDIOS_final3.jpg')
}];

const other = [
{
	caption: 'Shirt designs for Calarts School of Dance—2018',
	picPath: require('../assets/Other_tier_3/Dance_shirt_1.jpg')
},
{
	caption: 'Shirt designs for Calarts School of Dance—2018',
	picPath: require('../assets/Other_tier_3/Dance_shirt_2.jpg')
}];

class Content extends Component {
  render() {
    return (
      <Flexbox flexDirection="column" width="60%" className="pics-container">
        <PicContainer items={books} category={'Books'} width={'95%'} />
        <PicContainer items={posters} category={'Posters'} width={'65%'} />
        <PicContainer items={other} category={'Other'} width={'90%'} />
      </Flexbox>
    );
  }
} 

export default Content;