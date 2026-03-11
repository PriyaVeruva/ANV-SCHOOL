import { useState } from "react";
import { admissionFAQ } from "./data";

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null);

	return (
		<section className="faq-section">
			<h2>Frequently Asked Questions</h2>

			<div className="faq-list">
				{admissionFAQ.map((item, index) => (
					<div
						key={index}
						className={`faq-item ${openIndex === index ? "open" : ""}`}
						onClick={() =>
							setOpenIndex(
								openIndex === index ? null : index,
							)
						}
					>
						<div className="faq-question">
							<h4>{item.question}</h4>
							<span>
								{openIndex === index ? "−" : "+"}
							</span>
						</div>

						{openIndex === index && (
							<p className="faq-answer">{item.answer}</p>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default FAQ;
