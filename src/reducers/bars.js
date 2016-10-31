import {
  FETCH_BARS,
  CREATE_BAR
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BARS:
      return [ ...state, ...action.payload.data ];
    case CREATE_BAR:
      return { ...state, ...[action.payload.data] };
  }

  return state;
}
