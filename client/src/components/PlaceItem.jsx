import React, { Component } from 'react';
import { InputGroup, FormControl, Button, Row } from 'react-bootstrap';

export default class PlaceItem extends Component {
  render() {
    return (
      <div class="mt-3 mb-3">
      <div class="card">
        <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Add</a>
        </div>
        </div>
      </div>
    )
  }
}
