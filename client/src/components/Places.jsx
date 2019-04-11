import React, { Component } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import PlaceItem from './PlaceItem';

export default class Places extends Component {
  render() {
    return (
      <div class="mt-3">
        <div className="border rounded col-7">
            <InputGroup className="mt-3 mb-3">
                <FormControl
                placeholder="Search Places"
                aria-label="Search Places"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
            <PlaceItem title="Temple of Tooth"/>
            <PlaceItem title="Sigiriya"/>
        </div>
        <div className="col-3">
            <a href="#" class="btn btn-primary">Next</a>
        </div>
      </div>
    )
  }
}

