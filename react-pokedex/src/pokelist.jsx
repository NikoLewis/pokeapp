import React, { Component } from 'react';

import './App.css';

class PokeList extends Component {
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
                  <button
                    onClick={this.props.handleChange}
                    value={ele.url}
                    key={indx}>
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
