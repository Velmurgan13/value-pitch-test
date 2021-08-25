import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../src/reducer/root-reducer";

const initialState = {};
const composeEnhancer = composeWithDevTools({
  trace: true,
});

export default function configureStore() {
  return createStore(
    rootReducer(),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );
}
