import React, { Component } from 'react';


class Sidebar extends Component {
  render() {
    return (
      <div className="editor column column-25">
        <button className="button button-clear"> + New note</button>
      </div>
    );
  }
}

export default Sidebar;
