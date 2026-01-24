import "./CommonCurriculum.css";
import { curriculumData } from "./data";
const CommonCurriculum = () => {
	return (
		<section className="curriculum-section">
			<h2>{curriculumData.title}</h2>

			<div className="curriculum-grid">
				{curriculumData.cards.map((card, index) => (
					<div className="curriculum-card" key={index}>
						<span className="icon">{card.icon}</span>
						<p>{card.title}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default CommonCurriculum;
