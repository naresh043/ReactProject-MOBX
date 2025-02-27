// import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={<div>Loading...</div>} persistor={persistor}> */}
        <App />
        <ToastContainer />
      {/* </PersistGate> */}
    {/* </Provider> */}
  </BrowserRouter>
);
