import "./Locations.css";
import { locationsData } from "./data";

const Locations = () => {
	return (
		<div className="locations">
			{/* HERO */}
			<div className="loc-hero">
				<img src={locationsData.hero.image} alt="" />
				<div className="loc-overlay">
					<h1>{locationsData.hero.title}</h1>
					<p>{locationsData.hero.subtitle}</p>
				</div>
			</div>

			{/* TITLE */}
			<div className="loc-header">
				<h2>Explore Our Locations</h2>
				<p>World-class campuses designed for excellence</p>
			</div>

			{/* CARDS */}
			<div className="loc-grid">
				{locationsData.cities.map((city) => (
					<div className="loc-card" key={city.id}>
						<img src={city.image} alt={city.name} />

						<div className="loc-card-content">
							<h3>{city.name}</h3>
							<p>{city.address}</p>
							<button>View Campus →</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Locations;
