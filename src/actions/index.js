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
