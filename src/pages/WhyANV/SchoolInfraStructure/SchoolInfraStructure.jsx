import CommonBanner from "../../../components/CommonBanner/CommonBanner";
import CommonCurriculum from "../../../components/CommonCurriculum/CommonCurriculum";
import CommonGridLayout from "../../../components/CommonGridLayout/CommonGridLayout";
import { schoolInfraData } from "./data";
import "./SchoolInfraStructure.css";
const SchoolInfraStructure = () => {
	return (
		<section className="digital-learning">
			<CommonBanner
				title={schoolInfraData.title}
				image={schoolInfraData.image}
			/>
			<div className="innovation-intro school-infra">
				{schoolInfraData.description}
			</div>
			<CommonGridLayout data={schoolInfraData} />
			<CommonCurriculum />
		</section>
	);
};

export default SchoolInfraStructure;
