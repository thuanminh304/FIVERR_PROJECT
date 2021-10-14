import {  createStore, applyMiddleware, combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import quanLyNguoiDungReducer from "containers/admin/nguoi-dung/module/reducer";
//

const rootReducer = combineReducers({
  quanLyNguoiDungReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['quanLyNguoiDungReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

let persistor = persistStore(store);

export { persistor ,store};
