import "./CommonBanner.css";
const CommonBanner = ({ title, image }) => {
	return (
		<div className="paddingSection">
			<h1 className="social-title">{title}</h1>
			<img src={image} alt="" className="digitalBanner" />
		</div>
	);
};

export default CommonBanner;
