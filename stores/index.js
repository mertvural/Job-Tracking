import {configureStore} from '@reduxjs/toolkit';
import jobListReducer from './reducers/listReducer';
export const store = configureStore({
  reducer: {
    jobList: jobListReducer,
  },
});
