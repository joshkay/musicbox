import React from 'react';

import { Col } from 'reactstrap';

import './FeatureListing.css';

const FeatureListing = (props) => (
  <Col xs="12" md="4" className="p-3 p-md-5 
    bg-light border border-white text-center">
    <span className={`featureIcon icon ion-md-${props.icon}`}></span>
    <h3>{props.heading}</h3>
    <p className="text-muted">{props.content}</p>
  </Col>
);

export default FeatureListing;