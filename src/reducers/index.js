import { combineReducers } from 'redux';
import barsReducer from './bars';
import beersReducer from './beers';

const rootReducer = combineReducers({
  bars: barsReducer,
  beers: beersReducer
});

export default rootReducer;
