import React from "react";
import "../css/Product.css";
import ProductImg1 from "../images/product-img1.jpg";
import { useStateValue } from "../StateProvider";

function Product(props) {
	const { id, title, price, img, rating } = props;

	const [ state, dispatch ] = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				price: price,
				img: img,
				rating: rating,
			},
		});
	};

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>&#11088;</p>
						))}
				</div>
			</div>
			<img src={img} className="product__img" />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
