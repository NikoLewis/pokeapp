import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class PokeList extends Component {
  // console.log('array.results', array)

  render() {
    const array = this.props.pokeinfo.results;
    return (
      <div className="pokelist">
        Poke list will go here
        {
          <div>
            {this.props.pokeinfo &&
              array.map((ele, indx) => {
                return (
                  <button onClick={this.handleChange} key={indx}>
                    {ele.name}
                  </button>
                );
              })}
          </div>
        }
      </div>
    );
  }
}

export default PokeList;
