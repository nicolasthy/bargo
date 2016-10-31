import axios from 'axios';

import {
  FETCH_BARS,
  CREATE_BAR,
  FETCH_BEERS
} from './types';

const ROOT_URL = 'http://localhost:4000/';

export function fetchBars() {
  const request = axios.get(`${ROOT_URL}/bars`);

  return {
    type: FETCH_BARS,
    payload: request
  };
}

export function createBar(props) {
  const request = axios.post(`${ROOT_URL}/bars`, props);

  return {
    type: CREATE_BAR,
    payload: request
  };
}

export function fetchBeers() {
  return {
    type: FETCH_BEERS,
    payload: [
      {
        id: 1,
        name: "Heineken"
      },
      {
        id: 2,
        name: "Paulaner"
      }
    ]
  };
}
