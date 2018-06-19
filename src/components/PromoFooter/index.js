import React from 'react';

import "./index.css";

const PromoFooter = (props) => (
  <footer className="footer text-center">
      <p>Written and coded by <a href={props.nameURL} target="_blank">{props.name}</a>.</p>
  </footer>
);

export default PromoFooter;