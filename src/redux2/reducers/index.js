import { combineReducers } from '@reduxjs/toolkit';
import courses from './userReducer';

const rootReducer = combineReducers({
  courses,
});

export default rootReducer;
