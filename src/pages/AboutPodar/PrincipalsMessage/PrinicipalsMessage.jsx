import { principalMsg } from "./data";
import "./PrincipalsMessage.css";

const PrincipalsMessage = () => {
	return (
		<section className="principal-section">
			{/* Image */}
			<div className="principal-content">
				<h2>{principalMsg.title}</h2>
			</div>
			<div className="principal-image">
				<img
					src={
						principalMsg.image.startsWith("http") &&
						principalMsg.image
					}
					alt="Principal"
				/>
			</div>

			<div className="principal-container">
				{/* Content */}
				<div className="principal-content">
					{principalMsg.description.map((ele, i) => (
						<p key={i}>{ele}</p>
					))}

					<p className="principal-closing">
						{principalMsg.closing}
					</p>

					<div className="principal-signature">
						{principalMsg.signature
							.split("\n")
							.map((line, i) => (
								<span key={i}>{line}</span>
							))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PrincipalsMessage;
