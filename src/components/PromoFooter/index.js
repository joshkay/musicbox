import React from 'react';

import './PromoFooter.css';

const PromoFooter = (props) => (
  <footer className="fixed-footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-9">
          <p className="written-content text-center">
            Written and coded by <a href={props.nameURL} target="_blank">{props.name}</a>.
          </p>
        </div>
        <div className="col-12 col-md-3 promo-links text-center">
          <a href={props.githubURL} target="_blank">
            <span className="icon ion-logo-github"></span>
          </a>
          <a href={props.twitterURL} target="_blank">
            <span className="icon ion-logo-twitter"></span>
          </a>
          <a href={props.linkedinURL} target="_blank">
            <span className="icon ion-logo-linkedin"></span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default PromoFooter;