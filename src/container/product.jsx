import React from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import product from "../Data/ProductData";
import "./product.css";
import { addItem } from "../redux/reducer/cart";
import { toast } from "react-toastify";

export default function Product() {
  const params = useParams();
  const dispatch = useDispatch();
  const props = product.find((element) => element.id === parseInt(params.id));

  const addToCart = () => {
    dispatch(addItem(props));
    toast.success("Item added to cart!");
  };

  return (
    <div className="details">
      <div>
        <img className="image" src={props.thumbnail} alt={props.title} />
      </div>
      <div>
        <h5 className="pdt-name">{props.title}</h5>
        <h5 className="pdt-price">${props.price}</h5>
        <h5 className="pdt-description">Description : {props.description}</h5>
        <h5 className="pdt-rating">Rating : {props.rating}</h5>
        <button className="add-btn" onClick={addToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
