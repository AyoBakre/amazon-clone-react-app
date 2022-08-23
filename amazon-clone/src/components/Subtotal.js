import React from "react";
import "../css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Subtotal() {
	const [state, dispatch] = useStateValue();

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({state.basket?.length} items):
							<strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This Order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={state.basket.price}
				displayType={"text"}
				thousandSeaparator={true}
				prefix={"$"}
			/>
			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
