import React, { Component } from 'react';
import PokeList from './pokelist';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonUri: '',
      pokeinfo1: '',
      pokeinfo2: '',
      dataLoaded: false,
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ currentMonUri: event.target.value });
    console.log('event.target.value', event.target.value);
    // console.log('a button has been clicked');
    this.secondCall(event.target.value);
  }

  // handleSubmit(url) {
  //   // event.preventDefault();
  //   // console.log(url);
  //   // const second = url;
  //   console.log('form submitted=>', url);
  // }

  secondCall(url) {
    console.log('url for 2nd api call=>', url);
    let currentMonUri = this.state.currentMonUri;
    axios
      .get(`${currentMonUri}`)
      .then(response => {
        this.setState({ pokeinfo2: response.data });
        console.log('pokeinfo2==>', this.state.pokeinfo2);
      })
      .catch(err => {
        console.log(err);
      });
  }

  firstCall() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => {
        this.setState({ pokeinfo1: response.data });
        this.setState({ dataLoaded: true });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.firstCall();
  }

  render() {
    let apiData = this.state.pokeinfo1;
    if (this.state.dataLoaded) {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Poke App</h1>
          </header>
          <PokeList pokeinfo={apiData} handleChange={this.handleChange} />
        </div>
      );
    } else {
      return (
        <p> Please be paitient while your pokemon are hatching \(^-^)/.</p>
      );
    }
  }
}

export default App;
