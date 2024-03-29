import React, { Component } from 'react';
import SimpleMDE from 'react-simplemde-editor';

class Editor extends Component {
  render() {
    return (
      <div className="editor column column-75">
        <SimpleMDE
          onChange={this.props.change}
          value="hello"
          options={{
            autofocus: true
          }}
        />
      </div>
    );
  }
}

export default Editor;
