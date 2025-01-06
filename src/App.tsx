import "./App.css";
import Home from "./routes/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ShopNow from "./routes/ShopNow";
import Contact from "./routes/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop-now" element={<ShopNow />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
