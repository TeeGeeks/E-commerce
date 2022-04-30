import React, { useContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import "./App.css";
import CartProvider from "./store/CartProvider";
import MainBody from "./components/Pages/MainBody";
import Products from "./components/Pages/Products";
import AddProducts from "./components/Pages/AddProducts";
import ContactUs from "./components/Pages/ContactUs";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import ForgotPassword from "./components/Pages/ForgotPassword";
import ResetPassword from "./components/Pages/ResetPassword";
import { AuthContext, AuthContextProvider } from "./store/auth-context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(props) {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();

  const RequireAuth = ({ children }) => {
    return currentUser ? (
      children
    ) : (
      <Navigate replace to="/sign-in" state={{ from: location.pathname }} />
    );
  };

  return (
    <CartProvider>
      <AuthContextProvider>
        <div className="content">
          <ToastContainer />
          <Routes>
            <Route path="/" element={<MainBody />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/add-products"
              element={
                <RequireAuth>
                  <AddProducts />
                </RequireAuth>
              }
            />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/*" element={<MainBody />} />
          </Routes>
        </div>

        <Footer />
      </AuthContextProvider>
    </CartProvider>
  );
}

export default App;
