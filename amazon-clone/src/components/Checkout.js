import React from "react";
import "../css/Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";

function Checkout() {
	const [state, dispatch] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout__left">
				<h2 className="checkout__title">Your Shopping Basket</h2>
				{state.basket.map((item) => (
					<CheckoutProduct
						id={item.id}
						title={item.title}
						img={item.img}
						price={item.price}
						rating={item.rating}
					/>
				))}
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
