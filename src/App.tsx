import { Routes, Route, Navigate } from "react-router";
import "./App.scss";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Admin from "./components/Admin";
import PageNotFound from "./components/PageNotFound";
import ContactIn from "./components/ContactIn";
import ContactEu from "./components/ContactEu";
import ContactUs from "./components/ContactUs";
import ContactOther from "./components/ContactOther";

function App() {
  const user: boolean = true;

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="contact" element={<Contact />}>
            <Route path="in" element={<ContactIn />} />
            <Route path="eu" element={<ContactEu />} />
            <Route path="us" element={<ContactUs />} />
            <Route path="*" element={<ContactOther />} />
          </Route>
          <Route
            path="admin"
            element={user ? <Admin /> : <Navigate to="/" />}
          />
          <Route path="*" element={<PageNotFound title="404" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
