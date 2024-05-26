import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import {AppProviders***REMOVED*** from "./context";


const root = ReactDOM.createRoot(document.getElementById("root") as Element);

if (process.env.MOCKED_API === "true") {
  const { worker ***REMOVED*** = require("./mocks/browser"); // eslint-disable-line @typescript-eslint/no-var-requires
  worker.start();
***REMOVED***

root.render(
  <AppProviders>
    <App />
  </AppProviders>
);
