import React, { Component } from 'react';

import Header from './header';

import BarList from './bars/bar_list';

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <BarList isLoaded={this.isLoaded} />
        </div>
      </div>
    );
  }
}
