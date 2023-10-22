import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyItem, removeItem } from "../redux/reducer/cart";
import './cart.css';

export default function Cart() {
    const list = useSelector((state) => state.cart.list);
    const dispatch = useDispatch();

    const incrementItem = (item) => {
        dispatch(modifyItem({ ...item, count: item.count + 1 }));
    };

    const decrementItem = (item) => {
        if (item.count === 1) {
            dispatch(removeItem(item));
        } else {
            dispatch(modifyItem({ ...item, count: item.count - 1 }));
        }
    };

    const removeItemFromCart = (item) => {
        dispatch(removeItem(item));
    };

    return (
        <div>
            {list.map((item) => (
                <div className="card-items" key={item.id}>
                    <div>
                        <img
                            src={item.thumbnail}
                            height={150}
                            width={180}
                            alt={item.title}
                            className="card-item-image"
                        />
                    </div>
                    <div>
                        <h5 className="card-items-header">{item.title}</h5>
                    </div>
                    <div>
                        <h6 className="card-title">Price: ${item.price}</h6>
                    </div>
                    <div>
                        <button className="btn-success" onClick={() => incrementItem(item)}>+</button>
                    </div>
                    <div>
                        <span className="ms"> Quantity:{item.count+1}</span>
                    </div>
                    <div>
                        <button className="btn-failed" onClick={() => decrementItem(item)}>-</button>
                    </div>
                    <div>
                        <button className="btn-failed" onClick={() => removeItemFromCart(item)}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
