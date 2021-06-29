import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';


const tableList = createReducer([], {
    [actions.getSuccess]: (_, { payload }) => payload,
});

const statistic = createReducer({}, {
  [actions.getStatisticSuccess]: (_, { payload }) => payload,
});

const user = createReducer({}, {
  [actions.getUserInfo]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [actions.getRequest]: () => true,
  [actions.getStatisticRequest]: () => true,
  [actions.getSuccess]: () => false,
  [actions.getStatisticSuccess]: () => false,
  [actions.getfetchError]: () => false,
  [actions.getStatisticError]: () => false,
});

const error = createReducer(null, {
    [actions.getError]: (_, { payload }) => payload,
    [actions.getSuccess]: () => null,
    [actions.getStatisticError]: (_, { payload }) => payload,
    [actions.getStatisticSuccess]: () => null,
});

const tableReducer = combineReducers(
    {
        tableList, error, loading, statistic, user
    }
);
export default tableReducer;