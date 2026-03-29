import "./CommonBanner.css";

const CommonBanner = ({ title, image }) => {
	return (
		<div className="paddingSection">
			<h1 className="section-title">{title}</h1>
			<img src={image} alt={title} className="digitalBanner" />
		</div>
	);
};

export default CommonBanner;
