import { ADD_LIST, ADD_CARD } from "../Actions";
const initialState = [
  {
    id: 1,
    title: "ToDo",
    cards: [
      {
        id: 1,
        title: "Creating a Web Page"
      },
      {
        id: 2,
        title: "Adding Style"
      }
    ]
  },
  {
    id: 2,
    title: "Doing",
    cards: [
      {
        id: 1,
        title: "Creating a Web Page"
      },
      {
        id: 2,
        title: "Adding Style"
      },
      {
        id: 3,
        title: "Adding JavaScript"
      }
    ]
  },
  {
    id: 3,
    title: "Done",
    cards: []
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case ADD_LIST: {
      const newList = {
        id: 9,
        title: action.payload.title,
        cards: []
      };
      return [...state, newList];
    }
    case ADD_CARD: {
      const newList = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [
              ...list.cards,
              {
                id: 9,
                title: action.payload.title
              }
            ]
          };
        } else {
          return list;
        }
      });

      return newList;
    }
  }
};

export default listReducer;
