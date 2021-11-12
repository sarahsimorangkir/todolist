import { configureStore } from "@reduxjs/toolkit";
import mytodolistReducer from '../stores/todolist'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
    key : "root",
    storage,
};

const rootReducer = combineReducers ({
    mytodolist : mytodolistReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer : persistedReducer,
});

export const persistor = persistStore(store);
export default store;