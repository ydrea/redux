import { combineReducers } from "redux";
// import { markerReducer } from "./MarkerReducer";

//reducer LIST API'
export const PickaReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_API":
      return action.payload;
    case "SELECTED":
      return action.payload;
    case "CLAIM":
      return [...state, action.payload];
    case "+POLICY":
      return [...state, action.payload.name];
    case "-POLICY":
      return state.filter((policy) => policy !== action.payload.name);
    default:
      return state;
  }
};

//reducer 'CALCULATE'
export const AccOunting = (bagOfCash = null, action) => {
  if (action.type === "CLAIM") {
    return bagOfCash - action.payload.howMuch;
  } else if (action.type === "+POLICY") {
    return bagOfCash + action.payload.amount;
  }
  return bagOfCash;
};

const markerReducer = () => {
  return [
    {
      coordinate: { latitude: 45.815, longitude: 15.9819 },
      title: "MEDO",
      description: "this is a MEDO",
      image: "../assets/ping_1.png",
    },
    {
      coordinate: { latitude: 45.813, longitude: 15.981 },
      title: "ZEKO",
      description: "this is a ZEKO",
      image: "../assets/ping_2.png",
    },
    {
      coordinate: { latitude: 45.8124, longitude: 15.9789 },
      title: "VJEVER",
      description: "this is a VJEVER",
      image: "../assets/ping_3.png",
    },
  ];
};

// Setup
export default combineReducers({
  PickaReducer: PickaReducer,
  Accounting: AccOunting,
  markers: markerReducer,
});
