import React, { Component } from 'react'
import { Form, Col, Row, Button, DropdownButton, Dropdown } from 'react-bootstrap';

export default class Login extends Component {
  render() {
    return (
        <div class="mt-3">
        <h3 className="text-center mt-4" >Login</h3>
        <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Username
                </Form.Label>
                <Col sm={6}>
                <Form.Control type="email" placeholder="Username" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Password
                </Form.Label>
                <Col sm={3}>
                <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontal">
                <Form.Label column sm={2}>
                Gender
                </Form.Label>
                <Col sm={4}>
                <DropdownButton id="dropdown-secondary-button" title="select gender">
                    <Dropdown.Item href="Male">Male</Dropdown.Item>
                    <Dropdown.Item href="Female">Female</Dropdown.Item>
                </DropdownButton>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Col sm={12}>
                <Button>Submit</Button>
                </Col>
            </Form.Group>
            </Form>
      </div>
    )
  }
}
