import "./SchoolBrocher.css";
import { brochureData } from "./data";

const SchoolBrocher = () => {
	return (
		<div className="brochure">
			{/* HERO */}
			<section
				className="hero"
				style={{
					backgroundImage: `url(${brochureData.hero.image})`,
				}}
			>
				<div className="hero-overlay">
					<div className="hero-text">
						<h1>{brochureData.hero.title}</h1>
						<p>{brochureData.hero.subtitle}</p>
					</div>
				</div>
			</section>

			{/* ABOUT */}
			<section className="container split">
				<img src={brochureData.about.image} alt="" />
				<div>
					<h2>{brochureData.about.title}</h2>
					<p>{brochureData.about.content}</p>
				</div>
			</section>

			{/* HIGHLIGHT */}
			<section
				className="highlight"
				style={{
					backgroundImage: `url(${brochureData.highlight.image})`,
				}}
			>
				<h2>{brochureData.highlight.text}</h2>
			</section>

			{/* ACADEMICS */}
			<section className="container academics">
				<h2>Why Choose ANV</h2>
				<div className="acad-grid">
					{brochureData.academics.map((item, i) => (
						<div key={i}>
							<h3>
								{item.icon} {item.title}
							</h3>
							<p>{item.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* FACILITIES */}
			<section className="container facilities">
				<h2>Our Facilities</h2>
				<div className="grid">
					{brochureData.facilities.map((f, i) => (
						<div key={i}>
							<img src={f.image} alt="" />
							<p>{f.name}</p>
						</div>
					))}
				</div>
			</section>

			{/* TRANSPORT */}
			<section className="container split reverse">
				<div>
					<h2>{brochureData.transport.title}</h2>
					<ul>
						{brochureData.transport.points.map((p, i) => (
							<li key={i}>{p}</li>
						))}
					</ul>
				</div>
				<img src={brochureData.transport.image} alt="" />
			</section>

			{/* CTA */}
			<section className="cta">
				<h2>{brochureData.cta.title}</h2>
				<p>{brochureData.cta.subtitle}</p>
				<button>Apply Now</button>
			</section>
		</div>
	);
};

export default SchoolBrocher;
