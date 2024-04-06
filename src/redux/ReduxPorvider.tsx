"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";

import { persistor, store } from "./store";

export const ReduxPorvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster
          richColors
          position="top-right"
          expand={false}
          closeButton
          duration={6000}
        />
        {children}
      </PersistGate>
    </Provider>
  );
};
