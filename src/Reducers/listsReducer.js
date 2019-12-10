import { ADD_LIST, ADD_CARD } from "../Actions";
const initialState = [
  {
    id: `L-${1}`,
    title: "ToDo",
    cards: [
      {
        id: `C-${10}`,
        title: "Creating a Web Page"
      },
      {
        id: `C-${11}`,
        title: "Adding Style"
      }
    ]
  },
  {
    id: `L-${2}`,
    title: "Doing",
    cards: [
      {
        id: `C-${21}`,
        title: "Creating a Web Page"
      },
      {
        id: `C-${22}`,
        title: "Adding Style"
      },
      {
        id: `C-${23}`,
        title: "Adding JavaScript"
      }
    ]
  },
  {
    id: `L-${3}`,
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
