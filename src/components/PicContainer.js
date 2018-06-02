import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

class PicContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      i:0
    }
  }
  handlePicClick = () => {
    console.log(this.state.i)
    this.setState((prevState) => {
      let newState = (this.props.items[prevState.i + 1]) ? prevState.i + 1 : 0
      return {i: newState };
    });
  }
  render() {
    return (
      <Flexbox flexDirection="row" className="pic-container">
        <Flexbox flexDirection="column" width="80%" className="pic-box">
          <img src={this.props.items[this.state.i].picPath} alt={this.props.items[this.state.i].caption} className="pic" onClick={this.handlePicClick} />
          <p className="caption">{this.props.items[this.state.i].caption}</p>
        </Flexbox>
        <p className="category">{this.props.category}</p>
      </Flexbox>
    );
  }
} 

export default PicContainer;