import "./Circulars.css";
import { circularData } from "./data";
import { generateCircularPDF } from "./generateCircularPDF";

const Circulars = () => {
	return (
		<div className="circular-page">
			<h1>School Circulars</h1>

			<div className="circular-list">
				{circularData.map((item) => (
					<div className="circular-card" key={item.id}>
						<div>
							<h3>{item.title}</h3>
							<span>{item.date}</span>
						</div>

						<button
							onClick={() => generateCircularPDF(item)}
							className="download-btn"
						>
							Download PDF
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Circulars;
