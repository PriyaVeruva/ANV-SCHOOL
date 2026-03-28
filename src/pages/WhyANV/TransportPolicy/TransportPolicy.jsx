import { transportData } from "./data";
import PolicySection from "./PolicySection";
import StatsCard from "./StatsCard";
import "./TransportPolicy.css";

const TransportPolicy = () => {
	return (
		<div className="transport-container">
			{/* HERO */}
			<section className="events-hero">
				<img
					src={transportData.hero.image}
					alt="transport"
					className="hero-image"
				/>
				<div className="hero-overlay">
					<h1>{transportData.hero.title}</h1>
					<p>{transportData.hero.subtitle}</p>
				</div>
			</section>

			{/* STATS */}
			<section className="stats">
				{transportData.stats.map((item) => (
					<StatsCard key={item.id} {...item} />
				))}
			</section>

			{/* VISION / MISSION */}
			<section className="sections">
				{transportData.sections.map((sec, index) => (
					<PolicySection key={index} {...sec} />
				))}
			</section>

			{/* SAFETY */}
			<section className="safety">
				<h2>🚍 Safety Guidelines</h2>
				<div className="safety-grid">
					{transportData.safetyRules.map((rule, i) => (
						<div key={i} className="safety-item">
							✔ {rule}
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default TransportPolicy;
