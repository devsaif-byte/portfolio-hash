import myImage from "../../img/me.png";
import "./intro.css";
const Intro = () => {
	return (
		<div className="i">
			<div className="i-left">
				<div className="i-left-wrapper">
					<h2 className="i-intro">Hello My name is</h2>
					<h1 className="i-name">Saif Mohammad</h1>
					<div className="i-title">
						<div className="i-title-wrapper">
							<div className="i-title-item">Web Developer</div>
							<div className="i-title-item">UI/UX Designer</div>
							<div className="i-title-item">Photographer</div>
							<div className="i-title-item">Writer</div>
							<div className="i-title-item">Content Creator</div>
						</div>
					</div>
					<div className="i-desc">
						<p>
							I design and develop services for customers of all sizes,
							specializing in creating stylish, modern websites, web services
							and online stores.
						</p>
					</div>
				</div>
			</div>
			<div className="i-right">
				<div className="i-bg"></div>
				<img src={myImage} alt="" className="i-image" />
			</div>
		</div>
	);
};

export default Intro;
