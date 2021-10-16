import {  createStore, applyMiddleware, combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import quanLyNguoiDungReducer from "containers/admin/nguoi-dung/module/reducer";
import xacThucNguoiDungReducer from "containers/shared/Auth/module/reducers";
//

const rootReducer = combineReducers({
  quanLyNguoiDungReducer,
  xacThucNguoiDungReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['xacThucNguoiDungReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

let persistor = persistStore(store);

export { persistor ,store};
