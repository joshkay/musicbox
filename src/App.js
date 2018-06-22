import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Container } from 'reactstrap';

import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavigationBar
            githubURL="https://github.com/joshkay/bloc-jams-react"   
          />
        </header>
        <Container fluid>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </Container>
      </div>
    );
  }
}

export default App;
