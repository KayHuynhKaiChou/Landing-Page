import { coursesType } from "../types/coursesType";

const get = () => {
  return {
    type: coursesType.GET_COURSES,
    payload: null,
  };
};

const success = (res) => {
  return {
    type: coursesType.GET_COURSES_SUCCESS,
    payload: res,
  };
};

const failure = (error) => {
  return {
    type: coursesType.GET_COURSES_FAILURE,
    payload: error,
  };
};

export const coursesAction = {
  get,
  success,
  failure,
}