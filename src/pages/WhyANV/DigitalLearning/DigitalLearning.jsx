import CommonBanner from "../../../components/CommonBanner/CommonBanner";
import CommonCurriculum from "../../../components/CommonCurriculum/CommonCurriculum";
import CommonGridLayout from "../../../components/CommonGridLayout/CommonGridLayout";
import "./DigitalLearning.css";
import { digitalLearningData } from "./data";

const DigitalLearning = () => {
	return (
		<section className="digital-learning">
			<CommonBanner
				title={digitalLearningData.title}
				image={digitalLearningData.image}
			/>
			<div className="container">
				<h2 className="section-title">
					{digitalLearningData.subTitle}
				</h2>
				<p className="section-description">
					{digitalLearningData.description}
				</p>

				<CommonGridLayout data={digitalLearningData} />
			</div>
			{/* ICT INFRASTRUCTURE */}
			<section className="infra-section">
				<h2>{digitalLearningData.infrastructureData.title}</h2>

				<div className="infra-grid">
					{digitalLearningData.infrastructureData.items.map(
						(item, index) => (
							<div className="infra-box" key={index}>
								{item}
							</div>
						),
					)}
				</div>
			</section>
			{/*Innovation section */}
			<section className="innovation-section">
				<div className="innovation-box">
					<h3>{digitalLearningData.innovationSection.title}</h3>

					<span className="divider"></span>

					<p>
						{
							digitalLearningData.innovationSection
								.description
						}
					</p>
				</div>
			</section>
			{/* CURRICULUM */}
			<CommonCurriculum />
		</section>
	);
};

export default DigitalLearning;
