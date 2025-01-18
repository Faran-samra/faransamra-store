const product = [];
export const getProductReducer = (state = { product }, action) => {
  switch (action.type) {
    case "SUCCES_GET_PRODUCTS":
      return { product: action.payload };
    case "FAIL_GET_PRODUCTS":
      return { product: action.payload };
      default : return state;
  }
};
