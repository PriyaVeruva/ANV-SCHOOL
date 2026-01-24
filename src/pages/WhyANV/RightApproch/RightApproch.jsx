import CommonBanner from "../../../components/CommonBanner/CommonBanner";
import CommonCurriculum from "../../../components/CommonCurriculum/CommonCurriculum";
import CommonGridLayout from "../../../components/CommonGridLayout/CommonGridLayout";
import { rightApprochData } from "./data";
import "./RightApproch.css";
const RightApproch = () => {
	return (
		<section className="digital-learning">
			<CommonBanner
				title={rightApprochData.title}
				image={rightApprochData.image}
			/>
			<p className="innovation-intro">
				{rightApprochData.description}
			</p>
			<h2 className="section-title">
				{rightApprochData.programsTitle}
			</h2>

			<CommonGridLayout data={rightApprochData} />
			<CommonCurriculum />
		</section>
	);
};

export default RightApproch;
