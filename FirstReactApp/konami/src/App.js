import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Konami from './components/Konami'

class App extends Component {
  constructor() {
    super(); // always need this
    this.state = {
      activated: false,
      name: ''
    };
    this.toggleActivation = this.toggleActivation.bind(this);
    {/* so the context of this doesn't change*/}
    this.handleChange = this.handleChange.bind(this);
  }

  toggleActivation() {
    if(this.state.activated === true) {
    this.setState({activated: false});
    } else {
    this.setState({activated: true});
    }
  }

  handleChange(e) {
    console.log(e.target.value);
    {/*"e" is the captured event, in this case - the name you enter*/}
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome{this.state.name.length > 1 ? `, ${this.state.name}!` : `!`}</h1>
        </header>

        <input type="text" onChange={this.handleChange} placeholder="Your name" />

        <div className="konami">
          <button onClick={this.toggleActivation}>Toggle Konami Code!</button>
          {/*Below lines sets condition for rendering*/}
          {this.state.activated ? <Konami name={this.state.name} /> : <div>Konami Code: Deactivated</div>}
          {/* ? means if true; : means if false  and name="Sibylle" is a props*/}
        </div>
      </div>
    );
  }
}

export default App;
