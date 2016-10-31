import firebase from 'firebase';

export const LOGIN_USER = 'LOGIN_USER';

export function loginUser({ bgoEmail, bgoPassword }) {
  const request = firebase.auth().signInWithEmailAndPassword(bgoEmail, bgoPassword);

  return {
    type: LOGIN_USER,
    payload: request
  };
}
