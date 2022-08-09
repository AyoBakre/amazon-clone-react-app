import React from "react";
import "../css/Home.css";
import Banner from "../images/banner.jpg";
import Product from "./Product";
import ProductImg1 from "../images/product-img1.jpg";
import ProductImg2 from "../images/product-img2.jpg";
import ProductImg3 from "../images/product-img3.jpg";
import ProductImg4 from "../images/product-img4.jpg";
import ProductImg5 from "../images/product-img5.jpg";
import ProductImg6 from "../images/product-img6.jpg";


function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img className="home__image" src={Banner} />
				<div className="home__row">
					<Product
            id={2}
						title="The lean Startup"
						price={29.99}
						img={ProductImg1}
						rating={5}
					/>
					<Product
            id={3}
						title="Lontor Lamp"
						price={109.99}
						img={ProductImg2}
						rating={5}
					/>
				</div>
				<div className="home__row">
        <Product
          id={4}
						title="T-shirt Hoodie"
						price={129.99}
						img={ProductImg3}
						rating={5}
					/>
					<Product
            id={5}
						title="Apple Airpods"
						price={29.99}
						img={ProductImg4}
						rating={5}
					/>
					<Product
            id={6}
						title="Samsung S21 pro max"
						price={39.99}
						img={ProductImg5}
						rating={2}
					/>
				</div>
				<div className="home__row">
        <Product
          id={1}
						title="Fine Wine"
						price={299.99}
						img={ProductImg6}
						rating={1}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
