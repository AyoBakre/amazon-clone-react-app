import React from "react";
import "../css/CheckoutProduct.css";

function CheckoutProduct(props) {
	const { id, title, price, img, rating } = props;

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={img} />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>&#11088;</p>
						))}
				</div>
                <button>Remove from Basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
