import CommonBanner from "../../components/CommonBanner/CommonBanner";
import { alumniData } from "./data";
import "./Alumini.css";

const Alumni = () => {
	return (
		<section className="digital-learning">
			{/* Banner */}
			<CommonBanner
				title={alumniData.banner.title}
				subtitle={alumniData.banner.subtitle}
				image={alumniData.banner.image}
			/>

			{/* Intro */}
			<section className="alumni-intro container">
				<p>{alumniData.intro}</p>
			</section>

			{/* Stats */}
			<section className="alumni-stats container">
				{alumniData.stats.map((item, index) => (
					<div className="stat-card" key={index}>
						<h3>{item.value}</h3>
						<span>{item.label}</span>
					</div>
				))}
			</section>

			{/* Mentors */}
			<section className="alumni-mentors container">
				<h2>Meet Our Alumni Mentors</h2>

				<div className="mentor-grid">
					{alumniData.mentors.map((mentor, index) => (
						<div className="mentor-card" key={index}>
							<div className="mentor-avatar">
								{mentor.name.charAt(0)}
							</div>
							<h4>{mentor.name}</h4>
							<p>{mentor.role}</p>
							<span>{mentor.org}</span>
						</div>
					))}
				</div>
			</section>

			{/* CTA */}
			<section className="alumni-cta">
				<h3>Be a Part of the ANV Alumni Network</h3>
				<button>Join Alumni Community</button>
			</section>
		</section>
	);
};

export default Alumni;
