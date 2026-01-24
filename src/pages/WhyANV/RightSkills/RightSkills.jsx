import CommonBanner from "../../../components/CommonBanner/CommonBanner";
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
		</section>
	);
};

export default RightSkills;
