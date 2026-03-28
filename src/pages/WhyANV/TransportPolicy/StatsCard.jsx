const StatsCard = ({ value, label }) => {
	return (
		<div className="stats-card">
			<h3>{value}</h3>
			<p>{label}</p>
		</div>
	);
};

export default StatsCard;
