import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import { rootReducer } from "./rootReducer";
import { NODE_ENV } from "../utils/enviroments";
import { TypeEnvironment, TypeSlices } from "../utils/strings";
import { setupAxiosInterceptors } from "../services/userData";

export const persistConfig = {
  key: TypeSlices.Root,
  version: 1,
  storage,
  whitelist: [TypeSlices.Auth],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: (NODE_ENV as string) !== TypeEnvironment.Production,
});

export const persistor = persistStore(store);
setupAxiosInterceptors(store.dispatch, store.getState);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
