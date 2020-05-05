import React, { Component } from 'react';

import * as firebase from 'firebase';

export class NotePad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      note: '',
    };

    this.addNote = this.addNote.bind(this);
  }

  /*updateTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  updateNote = (e) => {
    this.setState({ note: e.target.value });
  };*/

  onChangeHandler = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  addNote = () => {
    if (this.state.title !== '' && this.state.note !== '') {
      // add the note to the DB
      firebase.database().ref('notes').push({
        title: this.state.title,
        note: this.state.note,
      });

      this.setState({ title: '', note: '' });
    }
  };

  render() {
    return (
      <section className='noteform'>
        <h3>Create New Note</h3>
        <div className='form-group'>
          <label htmlFor='noteTitle'>Title</label>
          <input
            type='text'
            id='noteTitle'
            name='noteTitle'
            value={this.state.value}
            onChange={(e) => this.onChangeHandler(e, 'title')}
            placeholder='Title...'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='note'>Note</label>
          <textarea
            id='note'
            name='note'
            value={this.state.note}
            onChange={(e) => this.onChangeHandler(e, 'note')}
            placeholder='Information...'
          />
        </div>
        <button onClick={this.addNote}>Add Note</button>
      </section>
    );
  }
}

export default NotePad;
