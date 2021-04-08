import { combineReducers } from "redux";
// import { markerReducer } from "./MarkerReducer";

//reducer 'PICK A POLICY'
export const PickaPolicy = (pickedPolicy = null, action) => {
  if (action.type === "SELECTED") {
    return action.payload;
  }
  return pickedPolicy;
};

//reducer 'ADD TO STATE'
export const ClaimsHistory = (oldState = [], action) => {
  if (action.type === "CLAIM") {
    return [...oldState, action.payload];
  }
  return oldState;
};

//reducer 'CALCULATE'
export const AccOunting = (bagOfCash = 105, action) => {
  if (action.type === "CLAIM") {
    return bagOfCash - action.payload.howMuch;
  } else if (action.type === "+POLICY") {
    return bagOfCash + action.payload.amount;
  }
  return bagOfCash;
};

//reducer 'CREATE/REMOVE USERS'
export const PoliCies = (listOfPolicies = [], action) => {
  if (action.type === "+POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "-POLICY") {
    return listOfPolicies.filter((policy) => policy !== action.payload.name);
  }
  return listOfPolicies;
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
  PickaPolicy: PickaPolicy,
  Claimshistory: ClaimsHistory,
  Accounting: AccOunting,
  Policies: PoliCies,
  markers: markerReducer,
});
