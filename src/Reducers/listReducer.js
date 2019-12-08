const initialState = [
  {
    id: 1,
    title: "ToDo",
    cards: [
      {
        id: 1,
        text: "Creating a Web Page"
      },
      {
        id: 2,
        text: "Adding Style"
      }
    ]
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listReducer;
