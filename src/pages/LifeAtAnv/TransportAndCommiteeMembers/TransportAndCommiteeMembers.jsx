import "./TransportAndCommiteeMembers.css";
import { committeeData } from "./data";
import { generateCommitteePDF } from "../../../assets/pdfs/generateCommitteePDF";

const TransportAndCommiteeMembers = () => {
	const { bannerTitle, bannerSubtitle, intro, members, pdf, image } =
		committeeData;

	return (
		<div className="transport-committee-page">
			{/* Banner */}
			<section className="committee-banner">
				<img src={image} alt="" />
				<div className="committee-banner-section">
					<h1>{bannerTitle}</h1>
					<p>{bannerSubtitle}</p>
				</div>
			</section>

			{/* Intro */}
			<section className="committee-intro">
				<p>{intro}</p>
			</section>

			{/* Members */}
			<section className="committee-members">
				<h2>Committee Members</h2>

				<div className="members-grid">
					{members.map((member, index) => (
						<div className="member-card" key={index}>
							<h3>{member.name}</h3>
							<span>{member.role}</span>
						</div>
					))}
				</div>
			</section>

			{/* Download */}
			<section className="committee-download">
				<button
					onClick={generateCommitteePDF}
					className="download-btn"
				>
					Download Full Committee List (PDF)
				</button>
			</section>
		</div>
	);
};

export default TransportAndCommiteeMembers;
