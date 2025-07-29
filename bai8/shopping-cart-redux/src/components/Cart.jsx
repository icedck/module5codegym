import React from "react";
import Product from "./Product";
import { getTotal, getCartProducts } from "../reducers";
import { useSelector, useDispatch } from "react-redux";
import { checkout } from "../actions";


const Cart = () => {
  const products = useSelector(getCartProducts);
  const total = useSelector(getTotal);

  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map((product) => (
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    ))
  ) : (
    <em>Please add some products to cart.</em>
  );

  const dispatch = useDispatch()

  const handleCheckout = () => {
    dispatch(checkout(products))
  }

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: ${total}</p>
      <button onClick={handleCheckout}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
};

export default Cart;
