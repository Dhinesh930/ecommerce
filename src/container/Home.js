import React from "react";
import Header from "../components/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Product from "./product";
import Cart from "./cart";

export default function Home() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product/:id" element={<Product />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  );
}
