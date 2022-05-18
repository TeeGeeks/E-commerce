import React, { useContext, Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import "./App.css";
import CartProvider from "./store/CartProvider";
import { AuthContext, AuthContextProvider } from "./store/auth-context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Layout/Header";

const MainBody = React.lazy(() => import("./components/Pages/MainBody"));
const Products = React.lazy(() => import("./components/Pages/Products"));
const AddProducts = React.lazy(() => import("./components/Pages/AddProducts"));
const ContactUs = React.lazy(() => import("./components/Pages/ContactUs"));
const Login = React.lazy(() => import("./components/Pages/Login"));
const Register = React.lazy(() => import("./components/Pages/Register"));
const ForgotPassword = React.lazy(() =>
  import("./components/Pages/ForgotPassword")
);
const ResetPassword = React.lazy(() =>
  import("./components/Pages/ResetPassword")
);
const SingleProduct = React.lazy(() =>
  import("./components/Pages/SingleProduct")
);

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
        <Header />
        <div className="content">
          <ToastContainer />

          <Suspense
            fallback={
              <div className="centered">
                <LoadingSpinner />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Navigate to="/products" />}></Route>
              <Route path="/products" element={<MainBody />}></Route>
              <Route path="/product/:productId" element={<SingleProduct />} />

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
              <Route path="/checkout" element={<Products />} />
              <Route path="/password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/*" element={<MainBody />} />
            </Routes>
          </Suspense>
        </div>

        <Footer />
      </AuthContextProvider>
    </CartProvider>
  );
}

export default App;

// https://react-http-9f1d7.web.app
