import { combineReducers } from "redux";

const defaultState = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@getground.com",
    share: 80,
    isDirector: false,
  },
  {
    firstName: "Florin",
    lastName: "Buga",
    email: "florin@getground.co.uk",
    share: 20,
    isDirector: true,
  },
];

const shareholders = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE":
      return state.map((shareholder, i) => ({
        ...shareholder,
        ...action.load.shareholders[i],
      }));

    default:
      return state;
  }
};

const rootReducer = combineReducers({ shareholders });

export default rootReducer;
