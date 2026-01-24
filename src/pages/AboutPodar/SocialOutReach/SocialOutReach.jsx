import "./SocialOutReach.css";
import { socialOutReachData } from "./data";
const SocialOutReach = () => {
	const { title, description, cards, image } = socialOutReachData;

	return (
		<div className="social-outreach">
			<h1 className="social-title">{title}</h1>
			<div className="social-section">
				<img src={image} alt="" className="foodDonation" />
				{/* <div className="title-divider"></div> */}

				<p className="social-description">{description}</p>
			</div>

			<div className="outreach-grid">
				{cards.map((card, index) => (
					<div className="outreach-card" key={index}>
						<img src={card.image} alt={card.title} />
						<h3>{card.title}</h3>

						{card.description.map((text, i) => (
							<p key={i}>{text}</p>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default SocialOutReach;
