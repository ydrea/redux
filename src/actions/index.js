//action 'async'
import jsonPlaceholder from "../APIs/jsonPlaceholder";

export const fetchAPIPosts = () => {
  return async function (dispatch, getState) {
    const result = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_API",
      payload: result.data,
    });
  };
};
//action 'Select'
export const selectPolicy = (name) => {
  return {
    type: "SELECTED",
    payload: {
      name: name,
    },
  };
};

//action 'Pay'
export const makeClaim = (name, howMuch) => {
  return {
    type: "CLAIM",
    payload: {
      name: name,
      howMuch: howMuch,
    },
  };
};
// action 'Amount'
export const calculateAmount = (name, amount) => {
  return {
    type: "AMOUNT",
    payload: {
      name: name,
      amount: amount,
    },
  };
};
//action 'Create'
export const createPolicy = (name) => {
  return {
    type: "+POLICY",
    payload: {
      name: name,
      amount: 5,
    },
  };
};
//action 'Remove'
export const deletePolicy = (name) => {
  return {
    type: "-POLICY",
    payload: {
      name: name,
    },
  };
};
