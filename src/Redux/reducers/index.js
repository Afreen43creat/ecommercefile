import { combineReducers } from "redux";
import { ProductsReducer, selectedProductsReducer } from "../.Redux/reducers/ProductsReducer";
const reducers = combineReducers({
  allProducts: ProductsReducer,
  product: selectedProductsReducer,
});
export default reducers;