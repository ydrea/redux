import { combineReducers } from "redux";

//reducer 'PICK A POLICY'
export const PickaPolicy = (pickedPolicy = [], action) => {
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

// Setup
export default combineReducers({
  PickaPolicy: PickaPolicy,
  Claimshistory: ClaimsHistory,
  Accounting: AccOunting,
  Policies: PoliCies,
});
