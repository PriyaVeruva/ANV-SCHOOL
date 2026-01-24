import CommonBanner from "../../../components/CommonBanner/CommonBanner";
import { artInovationLabData } from "./data";
import "./ArtInnovationLab.css";
import CommonGridLayout from "../../../components/CommonGridLayout/CommonGridLayout";
import CommonCurriculum from "../../../components/CommonCurriculum/CommonCurriculum";
const ArtInnovationLab = () => {
	return (
		<section className="innovation-lab">
			<CommonBanner
				title={artInovationLabData.title}
				image={artInovationLabData.image}
			/>
			{/* INTRO */}
			<div className="innovation-intro">
				<p>{artInovationLabData.description}</p>
			</div>

			{/* WHY IT MATTERS */}
			<div className="innovation-highlights">
				<h3>{artInovationLabData.highlightsTitle}</h3>

				<div className="highlights-grid">
					{artInovationLabData.highlights.map((item, index) => (
						<div className="highlight-card" key={index}>
							<span className="icon">{item.icon}</span>
							<p>{item.text}</p>
						</div>
					))}
				</div>
			</div>
			<h2 className="section-title">
				{artInovationLabData.programsTitle}
			</h2>

			<CommonGridLayout data={artInovationLabData} />
			<CommonCurriculum />
		</section>
	);
};

export default ArtInnovationLab;
