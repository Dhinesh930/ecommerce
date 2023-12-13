import React from "react";
import ProductData from "../Data/ProductData";
import "./dashboard.css";
import { useNavigate } from "react-router";

export default function Dashboard({ searchQuery }) {
  const navigate = useNavigate();

  console.log("searchQuery dash Prod:", searchQuery);
  const filteredProducts = ProductData.filter((product) =>
    product.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="dashboard">
      {filteredProducts.map((product) => (
        <div className="card" key={product.id}>
          <div>
            <img className="img" src={product.thumbnail} alt={product.title} />
          </div>
          <div>
            <h5 className="product-name">{product.title}</h5>
          </div>
          <div>
            <h5 className="product-price">${product.price}</h5>
          </div>
          <div>
            <button
              className="add-btn"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              view details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
