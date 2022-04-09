import { ADD_COUNT, REDUCE_COUNT } from "./ActionTypes";

export const add_data = (payload) => ({
  type: ADD_COUNT,
  payload
});
export const reduce_data = (payload) => ({
  type: REDUCE_COUNT,
  payload
});