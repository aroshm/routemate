import { Routes, Route, Navigate } from "react-router";
import "./App.scss";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Admin from "./components/Admin";

function App() {
  const user: boolean = true;

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/0001" element={<ProductDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="admin"
            element={user ? <Admin /> : <Navigate to="/" />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
