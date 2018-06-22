import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import './PromoFooter.css';

const PromoFooter = (props) => (
  <footer className="fixed-footer">
    <Container fluid>
      <Row>
        <Col xs="12" md="9">
          <p className="written-content text-center">
            Written and coded by <a href={props.nameURL} target="_blank">{props.name}</a>.
          </p>
        </Col>
        <Col xs="12" md="3" className="promo-links text-center">
          <a href={props.githubURL} target="_blank">
            <span className="icon ion-logo-github"></span>
          </a>
          <a href={props.twitterURL} target="_blank">
            <span className="icon ion-logo-twitter"></span>
          </a>
          <a href={props.linkedinURL} target="_blank">
            <span className="icon ion-logo-linkedin"></span>
          </a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default PromoFooter;