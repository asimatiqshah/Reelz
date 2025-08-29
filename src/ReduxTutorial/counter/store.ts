import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer  from "./counterSlice";
import nameReducer from "../persist/nameSlice"
import { persistReducer, persistStore } from "redux-persist";
import { MMKV } from "react-native-mmkv";


// MMKV instance
const storage = new MMKV();

// Custom storage for redux-persist
const reduxStorage = {
  setItem: (key: string, value: string) => {
    storage.set(key, value)
    return Promise.resolve(true)
  },
  getItem: (key: string) => {
    const value = storage.getString(key)
    return Promise.resolve(value ?? null)
  },
  removeItem: (key: string) => {
    storage.delete(key)
    return Promise.resolve()
  },
}



//THIS IS PERSIST PART
// note for remember :-  put rootReducer key name here in whitelist
const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['counter','name'] // only navigation will be persisted
}

// ROOT REDUCER MEANS COMBINE ALL REDUCERS IN ONE REDUCER
const rootReducer = combineReducers({
    counter:counterReducer,
    name: nameReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


//NOTE  counterReducer = IT'S JUST NAME IT CAN BE ANYTHING WHAT YOU LIKE 
export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// persistor
export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch