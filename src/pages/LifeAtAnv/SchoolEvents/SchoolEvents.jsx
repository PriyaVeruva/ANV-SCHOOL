import React from "react";
import { schoolEventsData } from "./data";
import "./SchoolEvents.css";

const SchoolEvents = () => {
	return (
		<div className="events-page">
			{/* Hero Section */}
			<section className="events-hero">
				<img
					src={schoolEventsData.image}
					alt="school banner"
					className="hero-image"
				/>

				<div className="hero-overlay">
					<h1>{schoolEventsData.title}</h1>
					<p>{schoolEventsData.subtitle}</p>
				</div>
			</section>

			{/* Intro Section */}
			<section className="events-intro">
				<h2>{schoolEventsData.introTitle}</h2>
				<p>{schoolEventsData.introDescription}</p>
			</section>

			{/* Events Grid */}
			<section className="events-grid">
				{schoolEventsData.events.map((event, index) => (
					<div className="event-card" key={index}>
						<div className="image-wrapper">
							<img src={event.image} alt={event.title} />
						</div>

						<div className="event-content">
							<h3>{event.title}</h3>
							<p>{event.description}</p>
						</div>
					</div>
				))}
			</section>
		</div>
	);
};

export default SchoolEvents;
