import CommonBanner from "../../../components/CommonBanner/CommonBanner";
import CommonGridLayout from "../../../components/CommonGridLayout/CommonGridLayout";
import Initiatives from "../../../components/Initiatives/Initiatives";
import { rightSkillsData } from "./data";
import "./RightSkills.css";
const RightSkills = () => {
	return (
		<section className="digital-learning">
			<CommonBanner
				title={rightSkillsData.title}
				image={rightSkillsData.image}
			/>
			<div className="innovation-intro">
				<p>{rightSkillsData.description}</p>
			</div>
			{/* Sections */}
			<h2 className="section-title">{rightSkillsData.events}</h2>

			<div className="right-skills__sections">
				{rightSkillsData.sections.map((section) => (
					<div
						key={section.id}
						className="right-skills__section-card"
						style={{ borderTopColor: section.accent }}
					>
						<h3 style={{ color: section.accent }}>
							{section.title}
						</h3>
						<p className="section-desc">
							{section.description}
						</p>
						<ul>
							{section.items.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>

			{/*Sports Events*/}
			<h2 className="section-title">{rightSkillsData.sports.title}</h2>
			<CommonGridLayout data={rightSkillsData.sports} />
			<h2 className="section-title">
				{rightSkillsData.cultural.title}
			</h2>
			<CommonGridLayout data={rightSkillsData.cultural} />

			{/* Highlights */}
			<h2 className="section-title">{rightSkillsData.moreEvents}</h2>

			<div className="right-skills__highlights">
				{rightSkillsData.highlights.map((item) => (
					<div key={item.number} className="highlight-card">
						<span className="highlight-number">
							{item.number}
						</span>
						<h4>{item.title}</h4>
						<p>{item.desc}</p>
					</div>
				))}
			</div>
			{/*student council */}
			<section className="training-section">
				<div className="training-text">
					<h2>{rightSkillsData.studentCouncil.title}</h2>
					<p>{rightSkillsData.studentCouncil.description}</p>
				</div>
				<div className="training-image">
					<img
						src={rightSkillsData.studentCouncil.image}
						alt={""}
					/>
				</div>
			</section>
			{/*evnets at anv */}
			<Initiatives title={"Events at ANV"} />
		</section>
	);
};

export default RightSkills;
