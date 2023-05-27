import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./components/Layout/Layout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  window.location.pathname === "/" ||
    window.location.pathname === "/cards" ||
    window.location.pathname === "/cards/cashback" ||
    window.location.pathname === "/loans" ||
    window.location.pathname === "/deposits" ||
    window.location.pathname === "/deposits/kapital" ||
    window.location.pathname === "/transfers" ||
    window.location.pathname === "/orders" ||
    window.location.pathname === "/company" ? (
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
);
