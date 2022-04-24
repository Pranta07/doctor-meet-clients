import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./context/Context";
import "simplebar/src/simplebar.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
// contexts
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "react-use-cart";
import AuthProvider from "./context/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
      <CartProvider>
      <AuthProvider>
        {/* <ContextProvider> */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        {/* </ContextProvider> */}
        </AuthProvider>
      </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
