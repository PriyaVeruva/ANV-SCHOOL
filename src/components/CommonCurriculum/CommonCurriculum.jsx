import "./CommonCurriculum.css";
import { admissionProcessQucikLinksData, curriculumData } from "./data";
import { useLocation } from "react-router-dom";

const CommonCurriculum = () => {
	const { pathname } = useLocation();

	const isAdmissionPage = pathname === "/admission-process";

	const data = isAdmissionPage
		? admissionProcessQucikLinksData
		: curriculumData;
	const gridSection = isAdmissionPage ? "admission-grid" : "curriculum-grid";

	return (
		<section className="curriculum-section">
			<h2>{data.title}</h2>

			<div className={gridSection}>
				{data.cards.map((card, index) => (
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
