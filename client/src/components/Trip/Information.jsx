import React, { Component } from 'react'
import { Form, Col, Row, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { DatePicker  } from '@y0c/react-datepicker';

import '@y0c/react-datepicker/assets/styles/calendar.scss';

export default class Information extends Component {
  render() {
    return (
      <div class="mt-3">
        <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Trip Name
                </Form.Label>
                <Col sm={6}>
                <Form.Control type="email" placeholder="Trip Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalNumber">
                <Form.Label column sm={2}>
                No of Dates
                </Form.Label>
                <Col sm={1}>
                <Form.Control type="number" placeholder="0" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Region
                </Form.Label>
                <Col sm={4}>
                <DropdownButton id="dropdown-secondary-button" title="Select Your Region">
                    <Dropdown.Item href="Gampaha">Gampaha</Dropdown.Item>
                    <Dropdown.Item href="Colombo">Colombo</Dropdown.Item>
                    <Dropdown.Item href="Galle">Galle</Dropdown.Item>
                    <Dropdown.Item href="Matara">Matara</Dropdown.Item>
                    <Dropdown.Item href="Hambanthota">Hambanthota</Dropdown.Item>
                    <Dropdown.Item href="Trincomalee">Trincomalee</Dropdown.Item>
                </DropdownButton>
                </Col>
            </Form.Group>
            
            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Start Date
                </Form.Label>
                <Col sm={4}>
                <DatePicker  portal='false' />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Col sm={12}>
                <Button>Next</Button>
                </Col>
            </Form.Group>
            </Form>
      </div>
    )
  }
}
