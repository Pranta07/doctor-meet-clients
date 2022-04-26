// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import { ContextProvider } from "./contexts/Context";
// import "simplebar/src/simplebar.css";

// // lazy image
// import "react-lazy-load-image-component/src/effects/blur.css";
// import "react-lazy-load-image-component/src/effects/opacity.css";
// import "react-lazy-load-image-component/src/effects/black-and-white.css";

// // contexts
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import { CartProvider } from "react-use-cart";

// ReactDOM.render(
//   <React.StrictMode>
//     <CartProvider>
//       <ContextProvider>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </ContextProvider>
//     </CartProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// scroll bar
import React from "react";
import { ContextProvider } from "./contexts/Context";
import "simplebar/src/simplebar.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

// contexts
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "react-use-cart";
import "simplebar/src/simplebar.css";

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
import AuthProvider from "./contexts/AuthProvider";

// ----------------------------------------------------------------------

ReactDOM.render(
  <ContextProvider>
    <HelmetProvider>
      <SettingsProvider>
        <CollapseDrawerProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CollapseDrawerProvider>
      </SettingsProvider>
    </HelmetProvider>
  </ContextProvider>,
  document.getElementById("root")
);
