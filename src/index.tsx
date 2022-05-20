import React from "react";
import "simplebar/src/simplebar.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

// contexts
import "./index.css";
import "simplebar/src/simplebar.css";
import { Provider } from "react-redux";
import store from "../src/redux/store";
// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// contexts
import { SettingsProvider } from "./contexts/SettingsContext";
import { CollapseDrawerProvider } from "./contexts/CollapseDrawerContext";
//
import App from "./App";
// import AuthProvider from "./contexts/AuthProvider";
import { CartProvider } from "react-use-cart";
// ----------------------------------------------------------------------

ReactDOM.render(
  <Provider store={store}>
    <CartProvider>
      <HelmetProvider>
        <SettingsProvider>
          <CollapseDrawerProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CollapseDrawerProvider>
        </SettingsProvider>
      </HelmetProvider>
    </CartProvider>
  </Provider>,
  document.getElementById("root")
);
