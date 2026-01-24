import { useState } from "react";
import "./RightFaculty.css"; // Make sure you have CSS
import { rightFaculty } from "./data";

const TrainingGrid = () => {
	const { trainingPrograms } = rightFaculty;
	const [expanded, setExpanded] = useState({});

	const toggleExpand = (id) => {
		setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
	};

	return (
		<section className="training-grid-section">
			<div className="training-grid-container">
				{trainingPrograms.map((program) => {
					const isExpanded = expanded[program.id] || false;
					const showToggle = program.description.length > 100;

					// Conditionally show part of description when collapsed
					const displayedText = isExpanded
						? program.description
						: program.description.slice(0, 100) +
							(showToggle ? "..." : "");

					return (
						<div key={program.id} className="training-card">
							<div className="training-icon">
								<span className="step-icon">
									{program.icon}
								</span>
							</div>
							<h3 className="training-title">
								{program.title}
							</h3>
							<p className="training-description">
								{displayedText}
							</p>
							{showToggle && (
								<button
									className="know-more-btn"
									onClick={() =>
										toggleExpand(program.id)
									}
								>
									{isExpanded
										? "Know Less"
										: "Know More"}
								</button>
							)}
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default TrainingGrid;
