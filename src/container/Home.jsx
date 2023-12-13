import React, { useState } from "react";
import Header from "../components/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Product from "./product";
import Cart from "./cart";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  console.log("Dash search", searchQuery);
  return (
    <div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Dashboard searchQuery={searchQuery} />} />
        <Route path="./product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
