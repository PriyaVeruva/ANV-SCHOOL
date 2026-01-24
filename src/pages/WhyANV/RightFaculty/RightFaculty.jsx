import "./RightFaculty.css";
import CommonBanner from "../../../components/CommonBanner/CommonBanner";
import { rightFaculty } from "./data";
import TrainingGrid from "./TrainingGrid";

const RightFaculty = () => {
	const {
		recruitmentProcessData,
		anvContent: {
			section3: { title, description, image },
		},
	} = rightFaculty;
	return (
		<section className="digital-learning">
			<CommonBanner
				title={rightFaculty.title}
				image={rightFaculty.image}
			/>
			<div className="innovation-intro">
				{rightFaculty.description}
			</div>
			<section className="recruitment">
				<div className="recruitment__header">
					<h2>{recruitmentProcessData.title}</h2>
					<p>{recruitmentProcessData.subTitle}</p>
				</div>

				<div className="recruitment__steps">
					{recruitmentProcessData.steps.map((item, index) => (
						<div className="recruitment-step" key={index}>
							<div className="step-badge">{item.step}</div>

							<div className="step-content">
								<span className="step-icon">
									{item.icon}
								</span>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</section>
			<section className="training-section">
				<div className="training-text">
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				<div className="training-image">
					<img src={image} alt={title} />
				</div>
			</section>
			<TrainingGrid />
		</section>
	);
};

export default RightFaculty;
