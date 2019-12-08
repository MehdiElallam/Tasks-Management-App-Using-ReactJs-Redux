import { ADD_LIST } from ".";

export const addList = title => {
  return {
    type: ADD_LIST,
    payload: {
      title
    }
  };
};
