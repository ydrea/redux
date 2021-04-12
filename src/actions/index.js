//action 'async'
import jsonPlaceholder from "../APIs/jsonPlaceholder";

export const fetchAPIPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_API", payload: response.data });
};

//action 'Select async'
export const selectPolicy = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "SELECTED", payload: response.data });
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
