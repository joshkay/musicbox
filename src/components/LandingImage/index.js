import React from 'react';

import "./index.css";

const LandingImage = (props) => (
  <div className="landingImageContainer row">
    {/* <img className="img-fluid" src={props.img} alt={props.imgAlt} /> */}
    <h1 className="landingImageText">{props.imgText}</h1>
  </div>
);

export default LandingImage;