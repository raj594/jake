import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import PicContainer from './PicContainer';
import a_sublev_0_T_O_C from '../assets/Book_tier1/a_sublev_0_T_O_C.jpg'

const books = [
			{
				caption: 'book 1',
				picPath: require('../assets/Book_tier1/a_sublev_0_T_O_C.jpg')
			},
			{
				caption: 'book 2',
				picPath: require('../assets/Book_tier1/a_sublev_1.jpg')
			},
			{
				caption: 'book 3',
				picPath: require('../assets/Book_tier1/a_sublev_2.jpg')
			},
			{
				caption: 'book 4',
				picPath: require('../assets/Book_tier1/a_sublev_3.jpg')
			},
			{
				caption: 'book 5',
				picPath: require('../assets/Book_tier1/electra_spread_1.jpg')
			},
			{
				caption: 'book 6',
				picPath: require('../assets/Book_tier1/electra_spread_2.jpg')
			},
			{
				caption: 'book 7',
				picPath: require('../assets/Book_tier1/electra_spread_3.jpg')
			},
			{
				caption: 'book 8',
				picPath: require('../assets/Book_tier1/Vampyro_0_TOC.jpg')
			},
			{
				caption: 'book 9',
				picPath: require('../assets/Book_tier1/Vampyro_spread_1.jpg')
			},
			{
				caption: 'book 10',
				picPath: require('../assets/Book_tier1/Vampyro_spread_2.jpg')
			}];

const posters = [
{
	caption: 'poster 1',
	picPath: require('../assets/Poster_tier_2/Babs_Imhof_CA_VA.jpg')
},
{
	caption: 'poster 2',
	picPath: require('../assets/Poster_tier_2/ej_final_1.jpg')
},
{
	caption: 'poster 3',
	picPath: require('../assets/Poster_tier_2/OPEN_STUDIOS_final3.jpg')
}];

const other = [
{
	caption: 'other 1',
	picPath: require('../assets/Other_tier_3/Dance_shirt_1.jpg')
},
{
	caption: 'other 2',
	picPath: require('../assets/Other_tier_3/Dance_shirt_2.jpg')
}];

class Content extends Component {
  render() {
    return (
      <Flexbox flexDirection="column" width="60%" className="pics-container">
        <PicContainer items={books} category={'books'} width={'95%'} />
        <PicContainer items={posters} category={'posters'} width={'65%'} />
        <PicContainer items={other} category={'other'} width={'90%'} />
      </Flexbox>
    );
  }
} 

export default Content;