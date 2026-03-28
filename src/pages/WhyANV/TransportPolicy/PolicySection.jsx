const PolicySection = ({ title, content }) => {
	return (
		<div className="policy-card">
			<h3>{title}</h3>
			<p>{content}</p>
		</div>
	);
};

export default PolicySection;
