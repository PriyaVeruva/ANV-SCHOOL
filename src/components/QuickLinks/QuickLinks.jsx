import { quickLinksData } from "./data";
import "./QuickLinks.css";
const QuickLinks = ({ title }) => {
	return (
		<div className="section7">
			<h2 className="section7-title">{title}</h2>
			<div className="section7-cards">
				{quickLinksData.section7.cards.map((card, index) => (
					<div
						key={index}
						className="info-card"
						onClick={() => navigate(card.link)}
					>
						<div className="icon-wrapper">
							<img
								src={
									card.icon.startsWith("http") &&
									card.icon
								}
								alt={card.label}
							/>
						</div>
						<p>{card.label}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default QuickLinks;
