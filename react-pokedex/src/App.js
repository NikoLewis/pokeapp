import React, { Component } from 'react';
import PokeList from './pokelist';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentMon: '', pokeinfo: '' };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.setState({ currentMon: event.target });
    // console.log('event.target', event.target);
    console.log('a button has been clicked');
  }

  componentDidMount() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => {
        this.setState({ pokeinfo: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let apiData = this.state.pokeinfo;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Poke App</h1>
        </header>
        <PokeList pokeinfo={apiData} />
      </div>
    );
  }
}

export default App;
