import React, { Component } from 'react'
import { Form, Col, Row } from 'react-bootstrap';

export default class Summary extends Component {
  render() {
    return (
      <div className="border mt-3 mb-3">
        <h3 className="text-center mt-4" >Trip Summary</h3>
        <Form className="ml-5 mb-4">
            <Form.Group as={Row} controlId="formPlaintext">
                <Form.Label column sm="2">
                Trip Id:-
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue="319" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintext">
                <Form.Label column sm="2">
                Trip Name:-
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue="Kandy Trip" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintext">
                <Form.Label column sm="2">
                Trip Owner:-
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue="Amarabandu Rupasinghe" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintext">
                <Form.Label column sm="2">
                No of Days:-
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue="121 Days" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintext">
                <Form.Label column sm="2">
                Start Date:-
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue="2019.04.10" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintext">
                <Form.Label column sm="2">
                End Date:-
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue="2019.04.22" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintext">
                <Form.Label column sm="2">
                Gender:-
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue="No Specifications" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintext">
                <Form.Label column sm="2">
                Age Group:-
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue="25 - 30 Years" />
                </Col>
            </Form.Group>

            <a href="#" class="btn btn-primary">Pay</a>
        </Form>
      </div>
    )
  }
}
