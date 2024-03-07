import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../reducers/movieSlice";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, movieReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultNormalizer) =>
    getDefaultNormalizer({ serializableCheck: false }),
});

export const persistor = persistStore(store);
