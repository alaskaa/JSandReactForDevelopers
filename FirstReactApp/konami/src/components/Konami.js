import React, { Component } from 'react';
import Mousetrap from 'mousetrap';

class Konami extends Component {
  constructor() {
    super();
    this.popUp = this.popUp.bind(this);
  }

  componentDidMount() {
    Mousetrap.bind([`1 2 3 4`, `up up down down left right left right b a`], this.popUp); //this.popUp is a callback
  }

  componentWillUnmount() {
    Mousetrap.unbind([`1 2 3 4`, `up up down down left right left right b a`]);
    // means the keyboard shortcut only lives for lifetime of commponent
  }

  popUp() {
    alert(`You inputted the Konami code${this.props.name.length > 1 ? `, ${this.props.name}!` : `!`}`);
  }

  render() {
    return (
      <div>
        Konami Code: Activated
      </div>
    );
  }
}

export default Konami;
