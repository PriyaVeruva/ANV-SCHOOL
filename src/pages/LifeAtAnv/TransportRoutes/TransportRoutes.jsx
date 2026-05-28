import "./TransportRoutes.css";
import transportBanner from "../../../assets/images/schoolTransport.jpg";

const TransportRoutes = () => {
	return (
		<div className="transport-page">
			{/* Banner Section */}
			<section className="transport-hero">
				<img src={transportBanner} alt="School Transport" />
				<div className="transport-overlay">
					<h1>School Transport Routes</h1>
					<p>Safe & Reliable Transportation for Our Students</p>
				</div>
			</section>

			{/* Intro Section */}
			<section className="transport-intro">
				<h2>Convenient Transport Facilities</h2>
				<p>
					ANV School provides safe and reliable transportation
					services for students across various parts of the city.
					Our buses are maintained with high safety standards and
					operated by experienced drivers and staff.
				</p>
			</section>

			{/* Routes Section */}
			{/* <section className="routes-container">
				<div className="route-card">
					<h3>Route 1 - City Center</h3>
					<p>
						Stops: Market Road → Central Park → Library Circle
					</p>
				</div>

				<div className="route-card">
					<h3>Route 2 - North Zone</h3>
					<p>Stops: Green Avenue → Lake View → Temple Road</p>
				</div>

				<div className="route-card">
					<h3>Route 3 - South Zone</h3>
					<p>Stops: Hill Street → Sunrise Colony → Bus Stand</p>
				</div>

				<div className="route-card">
					<h3>Route 4 - East Zone</h3>
					<p>
						Stops: Metro Station → Garden Layout → Main Circle
					</p>
				</div>
			</section> */}
			{/*once routes confirmed uncommnet above one and remove below one*/}

			<section className="routes-container">
				<div className="route-card">
					<h3>Route Information</h3>
					<p>
						Bus routes are currently being finalized.
						Transportation details will be updated soon.
					</p>
				</div>

				<div className="route-card">
					<h3>Pickup & Drop Points</h3>
					<p>
						Multiple pickup and drop locations will be
						available across different areas for student
						convenience.
					</p>
				</div>

				<div className="route-card">
					<h3>Transportation Support</h3>
					<p>
						For temporary transport-related queries, please
						contact the school administration office.
					</p>
				</div>
			</section>

			{/* Safety Section */}
			<section className="transport-safety">
				<h2>Transport Safety Features</h2>
				<ul>
					<li>GPS Tracking in all buses</li>
					<li>Experienced Drivers & Attendants</li>
					<li>Regular Vehicle Maintenance</li>
					<li>Safe Pickup & Drop Points</li>
				</ul>
			</section>
		</div>
	);
};

export default TransportRoutes;
