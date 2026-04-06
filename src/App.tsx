import { Routes, Route } from "react-router";
import "./App.scss";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/0001" element={<ProductDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
