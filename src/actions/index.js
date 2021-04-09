//action 'async'
import jsonPlaceholder from "../APIs/jsonPlaceholder";

export const fetchAPIPosts = async () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_API",
      payload: response,
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
