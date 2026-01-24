import CommonBanner from "../../../components/CommonBanner/CommonBanner";
import { artCurriculumData } from "./data";
import "./ArtCurriculum.css";
import CommonGridLayout from "../../../components/CommonGridLayout/CommonGridLayout";
import CommonCurriculum from "../../../components/CommonCurriculum/CommonCurriculum";
const ArtCurriculum = () => {
	const { sectionTitle, sectionSubtitle, vision, mission, highlights } =
		artCurriculumData.artDepartmentData;

	return (
		<section className="art-curriculum">
			<CommonBanner
				title={artCurriculumData.title}
				image={artCurriculumData.image}
			/>
			<h2 className="section-title">{artCurriculumData.subTitle}</h2>
			<section className="art-vision-mission">
				<h2>{sectionTitle}</h2>
				<p>{sectionSubtitle}</p>

				<div className="vm-cards">
					<div className="card">
						<h3>{vision.title}</h3>
						<p>{vision.description}</p>
					</div>

					<div className="card">
						<h3>{mission.title}</h3>
						<p>{mission.description}</p>
					</div>
				</div>

				<ul className="highlights">
					{highlights.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</section>
			<h2 className="section-title">
				{artCurriculumData.curriculumHeader}
			</h2>

			<CommonGridLayout data={artCurriculumData} />
			{/*Art curriculum highlights*/}
			<section className="art-curriculum">
				<div className="art-curriculum__header">
					<h2>
						{artCurriculumData.artCurriculumHighlights.title}
					</h2>
					<p>
						{
							artCurriculumData.artCurriculumHighlights
								.subTitle
						}
					</p>
				</div>

				<div className="art-curriculum__grid">
					{artCurriculumData.artCurriculumHighlights.highlights.map(
						(item, index) => (
							<div className="art-card" key={index}>
								<div className="art-card__icon">
									{item.icon}
								</div>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</div>
						),
					)}
				</div>

				<section className="art-support">
					<div className="art-support__header">
						<h2>{artCurriculumData.artSupportData.title}</h2>
						<p>{artCurriculumData.artSupportData.subTitle}</p>
					</div>

					<div className="art-support__grid">
						{artCurriculumData.artSupportData.supportItems.map(
							(item, index) => (
								<div
									className="support-card"
									key={index}
								>
									<span className="support-card__icon">
										{item.icon}
									</span>
									<h3>{item.title}</h3>
									<p>{item.description}</p>
								</div>
							),
						)}
					</div>
				</section>
			</section>
			<CommonCurriculum />
		</section>
	);
};

export default ArtCurriculum;
