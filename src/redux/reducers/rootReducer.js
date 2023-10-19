import { combineReducers } from "redux";
import { coursesReducer } from "./coursesReducer";
import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({
  coursesReducer,
  form: formReducer
});