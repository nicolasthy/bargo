import {
  FETCH_BARS
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BARS:
      return [ ...state, ...action.payload ];
  }

  return state;
}
