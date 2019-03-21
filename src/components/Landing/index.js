import React from 'react';

import { Row } from 'reactstrap';

import FeatureListing from './../FeatureListing';
import PromoFooter from './../PromoFooter';
import LandingImage from './../LandingImage';

const Landing = () => (
  <section className="landing">
    <LandingImage
      imgText="Turn the music up!"
    />
    
    <Row>
      <FeatureListing 
        heading="Choose your music" 
        content="The world is full of music; why should you have to listen to music that someone else chose?"
        icon="musical-notes"
      />
      <FeatureListing 
        heading="Unlimited, streaming, ad-free" 
        content="No arbitrary limits. No distractions."
        icon="infinite"
      />
      <FeatureListing 
        heading="Mobile enabled" 
        content="Listen to your music on the go. This streaming service is available on all mobile platforms."
        icon="phone-portrait"
      />
    </Row>

    <Row>
      <PromoFooter
        name="Josh Kay"
        nameURL="https://joshkay.ca"
        githubURL="https://github.com/joshkay"
        twitterURL="https://twitter.com/joshmkay"
        linkedinURL="https://www.linkedin.com/in/joshmkay"
      />
    </Row>
  </section>
);

export default Landing;