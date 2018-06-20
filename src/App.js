import React, { Component } from 'react';
import { Route } from 'react-router-dom';

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
        <main className="container-fluid">
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
