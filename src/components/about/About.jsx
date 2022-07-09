import "./about.css";

const About = () => {
	return (
		<div className="a">
			<div className="a-left">
				<div className="a-card-bg"></div>
				<div className="a-card">
					<img
						className="a-img"
						src="https://images.unsplash.com/photo-1595004699237-8b72f3fedca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
						alt=""
					/>
				</div>
			</div>
			<div className="a-right">
				<h1 className="a-title">About me</h1>
				<p className="a-subtitle">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. In eveniet,
					dolorum inventore voluptatum provident officia id suscipit debitis,
					doloremque amet sapiente consequatur neque velit alias non facilis vel
					odio optio necessitatibus labore eligendi veritatis?
				</p>
				<p className="a-desc">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
					repellendus quisquam explicabo ipsum sunt rerum voluptas recusandae,
					ab pariatur obcaecati architecto sit deleniti et reprehenderit facilis
					doloribus earum, repudiandae natus libero odio aut! Magni nisi,
					doloremque impedit repellat nulla cupiditate vitae illo. Sed in
					doloremque vero deleniti facilis eaque laborum, repellendus tenetur
					dignissimos dolorum porro enim ipsum soluta nemo repudiandae.
				</p>
			</div>
		</div>
	);
};

export default About;
