import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import 'milligram';

import Sidebar from './components/Sidebar'
import Editor from './components/Editor'

class App extends Component {

  constructor() {
    super();
    const MKEY = "MARKNOTES";
    const localNotes = JSON.parse(localStorage.getItem(MKEY));

    this.state = {
      notes: localNotes ? localNotes : [],
      selectedNote: ''
    };

    this.addNote = this.addNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.selectNote = this.selectNote.bind(this);
    this.generateId = this.generateId.bind(this);

  }

  addNote() {
    const guid = this.generateId();
    const note = {id: guid, body: 'New note ...'};
    const newNotes = this.state.notes;
    newNotes.push(note);
    this.setState({notes: newNotes});

    this.selectNote(note);
    this.save(this.state.notes);
  }

  updateNote(body) {
    let notes = notes = this.state.notes;
    let currentNote = this.state.selectNote;
    currentNote.body = body;
    this.setState({selectNote: currentNote});

    let nIndex = notes.findIndex((n) => {
      return n.id === currentNote.id;
    });
    console.log(notes);
    console.log(nIndex);

    notes[nIndex].body = currentNote.body;

    this.setState({notes: notes});

    this.save(this.state.notes);
  }

  selectNote(note) {
    if(note === this.state.selectNote) return;
    this.setState({selectedNote: note});
  }

  save(notes) {
    if(!notes) return;
    const MKEY = "MARKNOTES";
    localStorage.setItem(MKEY, JSON.stringify(notes));
  }

  generateId() {
    return this.gen4() + this.gen4() + "-" + this.gen4();
  }

  gen4() {
    return Math.floor((1 + Math.random()) * 10000)
    .toString(16)
    .substring(1);
  }

  render() {
    return (
      <div className="App container">
        <h1>Markdown Note Manager</h1>
        <div className="row">
          <Sidebar add={this.addNote} select={this.selectNote} selected={this.state.selectedNote} notes={this.statenotes} />
          <Editor change={this.updateNote} currentNote={this.state.selectedNote} />
        </div>
      </div>
    );
  }
}

export default App;
