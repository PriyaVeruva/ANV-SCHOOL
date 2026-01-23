import { useEffect } from "react";
import Counter from "../../../components/Counter/Counter";
import QuickLinks from "../../../components/QuickLinks/QuickLinks";
import "./AboutUs.css";
import ContactCard from "./ContactCard";
import { aboutusSection } from "./data";
import { useLocation } from "react-router-dom";
const AboutUs = () => {
	const {
		section1,
		section2,
		section3,
		section4,
		section5,
		counterDataSection,
		contactData,
	} = aboutusSection;

	const location = useLocation();

	function scrollBehaviour(id) {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	}
	useEffect(() => {
		if (location.pathname === "/aboutus") {
			scrollBehaviour("aboutus");
		}
		if (location.pathname === "/chairman'smsg") {
			scrollBehaviour("chairman");
		}
	}, [location.pathname]);
	return (
		<div className="aboutus-page" id="aboutus">
			{/* HERO SECTION */}
			<section className="about-hero">
				<img src={section1.image} alt="About ANV" />
				<div className="about-hero-overlay">
					<h1>{section1.title}</h1>
				</div>
			</section>

			{/* ABOUT DESCRIPTION */}
			<section className="about-description">
				{section1.description.split("\n").map((para, i) => (
					<p key={i}>{para}</p>
				))}
			</section>

			{/* IMAGE SECTION */}
			<section className="about-image">
				<img src={section2.image} alt="Students" />
			</section>

			{/*Counter Section*/}
			<div className="section5">
				{counterDataSection.counterData.map((ele, i) => {
					return (
						<div className="mainsection" key={i}>
							<div className="counterSection">
								<Counter
									end={Number(
										ele.number.replace(/,/g, ""),
									)}
								/>

								<span>{ele.title}</span>
							</div>
							{ele?.image && (
								<img
									src={
										ele?.image?.startsWith(
											"http",
										) && ele?.image
									}
									alt=""
								/>
							)}
						</div>
					);
				})}
			</div>
			{/* VISION & PURPOSE */}
			<section className="vision-purpose">
				<div className="card">
					<h3>{section3.title1}</h3>
					<p>{section3.description1}</p>
				</div>

				<div className="card">
					<h3>{section3.title2}</h3>
					<p>{section3.description2}</p>
				</div>
			</section>

			{/* VALUES */}
			<section className="values">
				<div className="values-container">
					<div className="value-item v1">
						<span>Ownership with Integrity</span>
					</div>

					<div className="value-item v2">
						<span>Learners at the Heart</span>
					</div>

					<div className="value-item v3">
						<span>Innovation through Resourcefulness</span>
					</div>

					<div className="center-circle">
						<h2>Our Values</h2>
					</div>
				</div>
			</section>

			{/* CHAIRMAN MESSAGE */}
			<section className="chairman" id="chairman">
				<div className="chairman-card">
					<img src={section5.image} alt="" />
					<div className="chairman-text">
						<h3>{section5.title}</h3>
						<blockquote>
							{section5.description
								.split("\n")
								.map((line, i) => (
									<p key={i}>{line}</p>
								))}
						</blockquote>
					</div>
				</div>
			</section>
			{/*Contact Us Section*/}
			<section className="contact-section">
				<h2 className="section-title">Contact Us</h2>
				<div className="contact-grid">
					{contactData.map((item, index) => (
						<ContactCard key={index} {...item} />
					))}
				</div>
			</section>
			<QuickLinks title={"Quick Links"} />
		</div>
	);
};

export default AboutUs;
