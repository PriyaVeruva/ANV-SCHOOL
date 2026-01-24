import "./CommonGridLayout.css";
const CommonGridLayout = ({ data }) => {
	return (
		<div className="cards-grid">
			{data.cards.map((card, index) => (
				<div className="learning-card" key={index}>
					<div className="card-image">
						<img src={card.image} alt={card.title} />
					</div>

					<div className="card-content">
						<h3>
							{card.grades
								? `${card.title}(${card.grades})`
								: card.title}
						</h3>
						<p>{card.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default CommonGridLayout;
