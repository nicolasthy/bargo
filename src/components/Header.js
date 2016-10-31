import React, { Component } from 'react';
import firebase from 'firebase';

class Header extends Component {

  renderUserStatus() {
    if(this.props.loggedIn) {
      return (
        <div>
          <button onClick={() => { firebase.auth().signOut() }}>Log Out</button>
        </div>
      );
    }
  }

  render() {
    return(
      <div>
        <h1>Header</h1>
        {this.renderUserStatus()}
      </div>
    );
  }
}

export default Header;
