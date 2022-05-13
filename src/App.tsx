import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import AuthProvider from "./contexts/AuthProvider";
import Router from "./routes/index";
// theme
import ThemeProvider from "./theme/index";
// components
import ScrollToTop from "./components/ScrollToTop";

// ----------------------------------------------------------------------

export default function App() {
    return (
        <ThemeProvider>
          
            <AuthProvider>
                <ScrollToTop />
                <Router />
            </AuthProvider>
        </ThemeProvider>
    );
}
