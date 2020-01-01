import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteButton extends Component {

  constructor(props) {
    super(props);
    this.state = { id: props.id }
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(e) {
    e.preventDefault();
    console.log(`Deleting Todo #${this.state.id}`);
    axios.delete('http://localhost:4000/todos/delete/' + this.state.id)
      .catch(err => { console.log() });      
  }

  render() {
    return (
      <button onClick={this.onDelete}>
        Delete
      </button>
    )
  }
}