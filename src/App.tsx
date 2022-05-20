import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./contexts/AuthProvider";
import Router from "./routes/index";
// theme
import ThemeProvider from "./theme/index";
// components
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
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
