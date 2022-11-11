import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./Includes/CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout container-fluid">
      <div className="checkout__left">
        <img
          className="banner__logo"
          src="https://i.postimg.cc/fWqvmBm7/image-Slider.jpg"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
