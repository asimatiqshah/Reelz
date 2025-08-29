import { combineReducers, configureStore } from "@reduxjs/toolkit";
import lightModeReducer from './lightModeSlice'
import { FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE, persistReducer, persistStore } from "redux-persist";
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


const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['theme'],
  blackList: []
}

const rootReducer = combineReducers({
  theme: lightModeReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE],
      }
    }),
});

// persistor
export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch