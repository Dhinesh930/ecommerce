import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyItem, removeItem } from "../redux/reducer/cart";
import './cart.css';
import { toast } from 'react-toastify';

export default function Cart() {
    const list = useSelector((state) => state.cart.list);
    const dispatch = useDispatch();

    const incrementItem = (item) => {
        const newItem = { ...item, count: item.count || 0 };
        dispatch(modifyItem({ ...newItem, count: newItem.count + 1 }));
    };
    
    const decrementItem = (item) => {
        if (item.count === 1) {
          dispatch(removeItem(item));
        } 
        else {
            const newItem = { ...item, count: item.count || 0 }; // Assigns 0 if item.count is not defined
            dispatch(modifyItem({ ...newItem, count: newItem.count - 1 }));
        }
    };

    const removeItemFromCart = (item) => {
        dispatch(removeItem(item));
    };

    const total = list.reduce((acc, item) => acc + item.price * item.count, 0);
    const checkout = () => toast.success("your adder successfilly recived ");

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
                        <h6 className="card-item-price"> ${item.price}</h6>
                    </div>
                    <div>
                        <span className="card-item-quantity"> Quantity: {item.count}</span>
                    </div>
                    <div>
                        <button className="incrementItem" onClick={() => incrementItem(item)}>+</button>
                        <button className="decrementItem" onClick={() => decrementItem(item)}>-</button>
                        <button className="removeItemFromCart" onClick={() => removeItemFromCart(item)}>Remove</button>
                    </div>
                </div>
            ))}

            <div className="total">
                Total: ${total.toFixed(2)}
            </div>
            <button className="checkoutButton" onClick={checkout} >
                Checkout
            </button>
            </div>
    );
}
