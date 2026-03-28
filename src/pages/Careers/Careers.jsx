import "./Careers.css";
import { careersData } from "./data";

const Careers = () => {
	return (
		<div className="careers">
			{/* HERO */}
			<div className="career-hero">
				<img src={careersData.hero.image} alt="" />
				<div className="career-overlay">
					<h1>{careersData.hero.title}</h1>
					<p>{careersData.hero.subtitle}</p>
				</div>
			</div>

			{/* WHY JOIN */}
			<div className="career-section">
				<h2>Why Join ANV?</h2>
				<div className="benefits">
					{careersData.benefits.map((item, i) => (
						<div className="benefit-card" key={i}>
							<h3>{item.title}</h3>
							<p>{item.desc}</p>
						</div>
					))}
				</div>
			</div>

			{/* JOB LIST */}
			<div className="career-section">
				<h2>Open Positions</h2>
				<div className="jobs">
					{careersData.jobs.map((job) => (
						<div className="job-card" key={job.id}>
							<div>
								<h3>{job.role}</h3>
								<p>
									{job.location} • {job.type}
								</p>
							</div>
							<button>Apply Now</button>
						</div>
					))}
				</div>
			</div>

			{/* CTA */}
			<div className="career-cta">
				<h2>Shape the Future with ANV</h2>
				<p>Join a community that inspires young minds every day.</p>
				<button>Send Your Resume</button>
			</div>
		</div>
	);
};

export default Careers;
