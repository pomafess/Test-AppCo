import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';


const tableList = createReducer([], {
    [actions.getSuccess]: (_, { payload }) => payload,

});

const loading = createReducer(false, {
  [actions.getRequest]: () => true,
  [actions.getSuccess]: () => false,
  [actions.getfetchError]: () => false,
});

const error = createReducer(null, {
    [actions.getError]: (_, { payload }) => payload,
    [actions.getSuccess]: () => null,
});

const tableReducer = combineReducers(
    {
        tableList, error,loading
    }
);
export default tableReducer;