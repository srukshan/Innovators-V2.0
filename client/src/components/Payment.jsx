import React, { Component } from 'react'
import { Form, Col, Row, Button, DropdownButton, Dropdown } from 'react-bootstrap';

export default class Payment extends Component {
  render() {
    return (
        <div class="mt-3">
        <Form>
            <Form.Group as={Row} controlId="formHorizontal">
                <Form.Label column sm={2}>
                Full Name
                </Form.Label>
                <Col sm={6}>
                <Form.Control type="text" placeholder="Full Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalNumber">
                <Form.Label column sm={2}>
                CVC
                </Form.Label>
                <Col sm={1}>
                <Form.Control type="text" placeholder="CVC" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalNumber">
                <Form.Label column sm={2}>
                Card Number
                </Form.Label>
                <Col sm={5}>
                <Form.Control type="text" placeholder="Card Number" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalNumber">
                <Form.Label column sm={2}>
                Expiry Date
                </Form.Label>
                <Col sm={3}>
                <Form.Control type="text" placeholder="Expiry Date" />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Col sm={12}>
                <Button>Pay</Button>
                </Col>
            </Form.Group>
            </Form>
      </div>
    )
  }
}
