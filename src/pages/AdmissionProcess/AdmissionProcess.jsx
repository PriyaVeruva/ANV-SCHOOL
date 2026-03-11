import { useRef, useState } from "react";
import alumniBanner from "../../assets/images/alumni.jpg";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import { admissionTabs } from "./data";
import "./AdmissionProcess.css";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";
import QuickLinks from "../../components/QuickLinks/QuickLinks";
import { homePageData } from "../HomePage/data";
import CommonCurriculum from "../../components/CommonCurriculum/CommonCurriculum";
import FAQ from "./FAQ";

const AdmissionProcess = () => {
	const [activeTab, setActiveTab] = useState("process");
	const enquiryRef = useRef(null);

	const currentTab = admissionTabs.find((tab) => tab.id === activeTab);

	const handleEnquiry = () => {
		enquiryRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<>
			{/* Banner */}
			<section className="digital-learning">
				<CommonBanner
					title="ANV School Admission Process"
					image={alumniBanner}
				/>
			</section>

			{/* Tabs */}
			<section className="admission-wrapper">
				<div className="tabs">
					{admissionTabs.map((tab) => (
						<button
							key={tab.id}
							className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
							onClick={() => setActiveTab(tab.id)}
						>
							{tab.label}
						</button>
					))}
				</div>

				{/* Content */}
				<div className="tab-content">
					{/* Admission Process */}
					{activeTab === "process" && (
						<div className="steps">
							{currentTab.content.map((step) => (
								<div
									key={step.step}
									className="step-card"
								>
									<span>{step.step}</span>
									<p>{step.text}</p>
								</div>
							))}
						</div>
					)}

					{/* Documents */}
					{activeTab === "documents" && (
						<ul className="doc-list">
							{currentTab.content.map((doc, index) => (
								<li key={index}>{doc}</li>
							))}
						</ul>
					)}

					{/* Age Norms */}
					{activeTab === "age" && (
						<div className="age-grid">
							{currentTab.content.map((item, index) => (
								<div key={index} className="age-card">
									<h4>{item.class}</h4>
									<p>{item.age}</p>
								</div>
							))}
						</div>
					)}

					{/* Enquiry */}
					{activeTab === "enquiry" && (
						<div className="enquiry-box">
							<p>{currentTab.content}</p>
							<button
								className="enquiry-btn"
								onClick={handleEnquiry}
							>
								Enquire Now
							</button>
						</div>
					)}
				</div>
				<div className="section6" ref={enquiryRef}>
					<EnquiryForm />
				</div>
				<QuickLinks title={"Information on ANV School"} />
				<div className="section4">
					<p className="section4-subtitle">
						{homePageData.section4.text1}
					</p>
					<div className="section4-headings">
						<h2>{homePageData.section4.text2}</h2>
						<span className="divider-dot">•</span>
						<h2>{homePageData.section4.text3}</h2>
					</div>
					<p className="section4-description">
						{homePageData.section4.text4}
					</p>

					<h3 className="section4-highlight">
						{homePageData.section4.text5}
						<span>{homePageData.section4.text6}</span>
					</h3>
				</div>
				<CommonCurriculum />
				<FAQ />
			</section>
		</>
	);
};

export default AdmissionProcess;
