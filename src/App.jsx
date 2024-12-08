import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Gallery from "./pages/Gallery";
import Commission from "./pages/Commission";
import TermsAndConditions from "./pages/TermsAndConditions";
import PageNotFound from "./pages/PageNotFound";
import Connect from "./pages/components/Connect";
import "./App.css";

/**
 * The main application component that sets up the routing for the app.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/commission" element={<Commission />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
