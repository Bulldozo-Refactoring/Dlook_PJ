import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "app/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";

import App from "App";
import "app/style/common.scss";

// export let persistor = persistStore(store);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
    {/* </PersistGate> */}
  </Provider>
);
