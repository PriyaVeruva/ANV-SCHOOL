import React, { useState } from "react";
import "./FeeStructure.css";

import alumniBanner from "../../assets/images/alumni.jpg";
import CommonBanner from "../../components/CommonBanner/CommonBanner";

import { feeData } from "./data";

const FeeStructure = () => {
	const [activeTab, setActiveTab] = useState("overview");

	return (
		<div className="fee-wrapper">
			<section className="digital-learning">
				<CommonBanner
					title="ANV School Fee Structure"
					image={alumniBanner}
				/>
			</section>

			<div className="fee-container">
				<div className="fee-heading">
					<h2>Academic Year 2026 - 2027</h2>

					<p>
						Transparent and affordable fee structure designed
						to provide quality education, modern facilities,
						and holistic student development.
					</p>
				</div>

				<div className="fee-tabs">
					<button
						className={`fee-tab-btn ${
							activeTab === "overview" ? "active" : ""
						}`}
						onClick={() => setActiveTab("overview")}
					>
						Annual Fee
					</button>

					<button
						className={`fee-tab-btn ${
							activeTab === "terms" ? "active" : ""
						}`}
						onClick={() => setActiveTab("terms")}
					>
						Term Schedule
					</button>
				</div>

				<div className="fee-card">
					<div className="fee-table-wrapper">
						{activeTab === "overview" ? (
							<table className="fee-table">
								<thead>
									<tr>
										<th>Grade</th>
										<th>Tuition Fee</th>
										<th>Book Exp</th>
										<th>Total Fee</th>
										<th>April Discount</th>
										<th>June Discount</th>
									</tr>
								</thead>

								<tbody>
									{feeData.map((row, index) => (
										<tr key={index}>
											<td>{row.class}</td>

											<td>
												₹
												{row.tuition.toLocaleString()}
											</td>

											<td>
												₹
												{row.bookExp.toLocaleString()}
											</td>

											<td className="highlight-total">
												₹
												{row.total.toLocaleString()}
											</td>

											<td>
												₹
												{row.aprilDiscount.toLocaleString()}
											</td>

											<td>
												₹
												{row.juneDiscount.toLocaleString()}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						) : (
							<table className="fee-table">
								<thead>
									<tr>
										<th>Grade</th>
										<th>Book Exp</th>
										<th>Term 1</th>
										<th>Term 2</th>
										<th>Term 3</th>
										<th>Total</th>
									</tr>
								</thead>

								<tbody>
									{feeData.map((row, index) => (
										<tr key={index}>
											<td>{row.class}</td>

											<td>
												₹
												{row.bookExp.toLocaleString()}
											</td>

											<td>
												₹
												{row.term1.toLocaleString()}
											</td>

											<td>
												₹
												{row.term2.toLocaleString()}
											</td>

											<td>
												₹
												{row.term3.toLocaleString()}
											</td>

											<td className="highlight-total">
												₹
												{row.total.toLocaleString()}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						)}
					</div>
				</div>

				<div className="notes-box">
					<h3>📌 Important Notes</h3>

					<ul>
						<li>
							Early payment discounts are applicable only
							before the specified dates.
						</li>

						<li>
							Term-wise payments should be completed before
							each term begins.
						</li>

						<li>
							Transport and hostel fees are not included in
							the above fee structure.
						</li>

						<li>
							School management reserves the right to
							revise fee structure if required.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default FeeStructure;
