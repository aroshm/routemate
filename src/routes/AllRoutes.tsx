import { Routes, Route, Navigate } from "react-router";

import {
  Admin,
  Home,
  ProductDetails,
  ProductList,
  Contact,
  ContactEu,
  ContactIn,
  ContactOther,
  ContactUs,
  PageNotFound,
} from "../pages";

const AllRoutes = () => {
  const user: boolean = true;

  return (
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
      <Route path="admin" element={user ? <Admin /> : <Navigate to="/" />} />
      <Route path="*" element={<PageNotFound title="404" />} />
    </Routes>
  );
};

export default AllRoutes;
