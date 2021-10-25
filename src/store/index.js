import {  createStore, applyMiddleware, combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import managementUserReducer from "containers/admin/user/module/reducer";
import AuthReducer from "containers/shared/Auth/module/reducers";
import AdminDashBoardSettingReducer from 'containers/admin/Header/modules/reducers';
//

const rootReducer = combineReducers({
  managementUserReducer,
  AuthReducer,
  AdminDashBoardSettingReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['AdminDashBoardSettingReducer'],
  blacklist: ['AuthReducer']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

let persistor = persistStore(store);

export { persistor ,store};
