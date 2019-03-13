import * as data from "../../screens/jsonFile/sample.json";
export const PRODUCT_DATA = "PRODUCT_DATA";

export const PRODUCTDATA = data => ({ type: PRODUCT_DATA, data });

export const getProducts = () => {
  return dispatch => {
    const result = data.name;

    if (result == "testing") {
      dispatch(PRODUCTDATA(result));
    }
  };
};

const initialState = {
  productData: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_DATA:
      return { ...state, productData: action.data, success: null };
    default:
      return state;
  }
}
