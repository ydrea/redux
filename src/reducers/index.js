import { combineReducers } from "redux";
// import { PostReducer } from "./MarkerReducer";

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
      title: "August",
      description: "this is August Senoa",
      image: "../assets/ping_1.png",
    },
    {
      coordinate: { latitude: 45.813, longitude: 15.981 },
      title: "Tin",
      description: "this is Tin Ujevic",
      image: "../assets/ping_2.png",
    },
    {
      coordinate: { latitude: 45.8124, longitude: 15.9789 },
      title: "Miroslav",
      description: "this is Miroslav Krleza",
      image: "../assets/ping_3.png",
    },
  ];
};

// Setup
export default combineReducers({
  posts: PickaReducer,
  accounts: AccOunting,
  markers: markerReducer,
});
