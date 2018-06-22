import React from 'react';

import { Row } from 'reactstrap';

import './LandingImage.css';

const LandingImage = (props) => (
  <Row className="landingImageContainer">
    <h1 className="landingImageText">{props.imgText}</h1>
  </Row>
);

export default LandingImage;