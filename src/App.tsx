import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ProductsPage, ProductDetail } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<ProductsPage />} />
        <Route path="/produtos/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
