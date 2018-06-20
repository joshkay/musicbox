import React from 'react';

import './PromoFooter.css';

const PromoFooter = (props) => (
  <footer className="fixed-footer text-center">
      <p>Written and coded by <a href={props.nameURL} target="_blank">{props.name}</a>.</p>
  </footer>
);

export default PromoFooter;