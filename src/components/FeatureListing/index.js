import React from 'react';

import './FeatureListing.css';

const FeatureListing = (props) => (
  <div className="col-12 col-md-4 p-3 p-md-5 
    bg-light border border-white text-center">
    <span className={`featureIcon icon ion-md-${props.icon}`}></span>
    <h3>{props.heading}</h3>
    <p className="text-muted">{props.content}</p>
  </div>
);

export default FeatureListing;