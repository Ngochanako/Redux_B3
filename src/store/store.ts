import { combineReducers, createStore } from "redux";
import ProductsReducer from "./reducers/ProductsReducer";
import ProductReducer from "./reducers/ProductReducer";
import NotificationReducer from "./reducers/NotificationReducer";
import CartReducer from "./reducers/CartReducer";
let rootReducer=combineReducers({
    products:ProductsReducer,
    product:ProductReducer,
    notify:NotificationReducer,
    carts:CartReducer,
})
let store=createStore(rootReducer);
export default store;