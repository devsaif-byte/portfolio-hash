import Product from "../product/Product";
import "./productList.css";

const ProductList = () => {
	return (
		<div className="pl">
			<div className="pl-texts">
				<h1 className="pl-title">Create & inspire. It's Saif</h1>
				<p className="pl-desc">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
					exercitationem totam reprehenderit neque illum ullam saepe quisquam
					dicta reiciendis deleniti!
				</p>
			</div>
			<div className="pl-list">
				<Product></Product>
				<Product></Product>
				<Product></Product>
				<Product></Product>
				<Product></Product>
				<Product></Product>
			</div>
		</div>
	);
};

export default ProductList;
