import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import tableReducer  from './table/reducer';

const middleware = [
  ...getDefaultMiddleware(),
];

export const store = configureStore({
   reducer: {
      users: tableReducer,
},
   middleware,
   devTools: process.env.NODE_ENV === 'development',
});


