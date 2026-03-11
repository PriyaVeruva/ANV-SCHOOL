import "./DeclarationLetter.css";
import { declarationData } from "./data";
import { generateDeclarationPDF } from "./generateDeclarationPDF";
import banner from "../../../assets/images/integrated-learning.jpg";
const DeclarationLetter = () => {
	return (
		<div className="declaration-page">
			<section className="events-hero">
				<img
					src={banner}
					alt="school banner"
					className="hero-image"
				/>

				<div className="hero-overlay">
					<h1>Declaration Letter</h1>
					<p>Transparency & Compliance</p>
				</div>
			</section>

			<section className="declaration-content">
				<p>{declarationData.content}</p>
			</section>

			<section className="declaration-download">
				<button
					onClick={() => generateDeclarationPDF(declarationData)}
					className="download-btn"
				>
					Download Declaration Letter
				</button>
			</section>
		</div>
	);
};

export default DeclarationLetter;
