import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";

import { store } from "app/store";
import App from "App";
import "app/style/common.scss";
import "app/style/style.css"; // 삭제예정

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
