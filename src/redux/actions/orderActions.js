import axios from "../../axios-orders";

export const loadOrders = () => {
  return function (dispatch, getState) {
    dispatch(loadOrderStart());
    const token = getState().signupLoginReducer.token;
    const userID = getState().signupLoginReducer.userId;
    axios
      .get(
        "orders.json?&auth=" +
          token +
          '&orderBy="userId"&equalTo="' +
          userID +
          '"'
      )
      .then((response) => {
        dispatch(loadOrderSuccess(Object.entries(response.data)));
      })
      .catch((err) => {
        dispatch(loadOrderError(err));
      });
  };
};
const loadOrderStart = () => {
  return {
    type: "LOAD_ORDERS_START",
  };
};
const loadOrderSuccess = (loadedOrders) => {
  return {
    type: "LOAD_ORDERS_SUCCESS",
    orders: loadedOrders,
  };
};
const loadOrderError = (error) => {
  return {
    type: "LOAD_ORDERS_ERROR",
    error: error,
  };
};

export const saveOrder = (neworder) => {
  return function (dispatch, getState) {
    dispatch(saveOrderStart());
    const token = getState().signupLoginReducer.token;
    axios
      .post("/orders.json?auth=" + token, neworder)
      .then((response) => {
        dispatch(saveOrderSuccess());
      })
      .catch((error) => {
        dispatch(saveOrderError(error));
      });
    return;
  };
};

const saveOrderStart = () => {
  return {
    type: "SAVE_ORDER_START",
  };
};
const saveOrderSuccess = () => {
  return {
    type: "SAVE_ORDER_SUCCESS",
  };
};
const saveOrderError = (error) => {
  return {
    type: "SAVE_ORDER_ERROR",
    error: error,
  };
};
