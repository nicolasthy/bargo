import React, { Component } from 'react';
import firebase from 'firebase';

import Header from './Header';
import LoginForm from './LoginForm';
import { Spinner } from './common';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAq597faQxcdbFwa527FtBjnU4dgFzkC5g",
      authDomain: "bargo-a4b69.firebaseapp.com",
      databaseURL: "https://bargo-a4b69.firebaseio.com",
      storageBucket: "bargo-a4b69.appspot.com",
      messagingSenderId: "726352873027"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Header loggedIn={this.state.loggedIn} />
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    };
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
