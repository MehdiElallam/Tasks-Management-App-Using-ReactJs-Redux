import { ADD_CARD } from ".";

export const addCard = (listID, title) => {
  return {
    type: ADD_CARD,
    payload: {
      listID,
      title
    }
  };
};
