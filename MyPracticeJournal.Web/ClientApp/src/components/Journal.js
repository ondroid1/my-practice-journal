import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

export class Journal extends Component {
  displayName = Journal.name

  render() {
    return (
      <div>
        <h1>My Week</h1>
        <Grid fluid>
            <Row>
                <Col sm={3}>
                    Monday
                </Col>
                <Col sm={9}>
                    Exercises
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    Tuesday
                </Col>
                <Col sm={9}>
                    Exercises
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    Wednesday
                </Col>
                <Col sm={9}>
                    Exercises
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    Thursday
                </Col>
                <Col sm={9}>
                    Exercises
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    Friday
                </Col>
                <Col sm={9}>
                    Exercises
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    Saturday
                </Col>
                <Col sm={9}>
                    Exercises
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    Sunday
                </Col>
                <Col sm={9}>
                    Exercises
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}