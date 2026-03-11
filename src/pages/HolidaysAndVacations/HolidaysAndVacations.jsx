import { holidaysData } from "./data";
import "./HolidaysAndVacations.css";

const HolidaysAndVacations = () => {
	return (
		<div className="holidays-page">
			{/* Banner */}
			<section className="holiday-banner">
				<div className="banner-content">
					<h1>{holidaysData.bannerTitle}</h1>
					<p>{holidaysData.bannerSubtitle}</p>
				</div>
			</section>

			{/* Vacations Table */}

			<section className="holiday-section">
				<h2>Vacations</h2>

				<div className="table-container">
					<table>
						<thead>
							<tr>
								<th>Vacation</th>
								<th>From</th>
								<th>To</th>
								<th>School Reopens (Students)</th>
								<th>School Reopens (Teachers)</th>
							</tr>
						</thead>

						<tbody>
							{holidaysData.vacations.map((vac, index) => (
								<tr key={index}>
									<td>{vac.name}</td>
									<td>{vac.from}</td>
									<td>{vac.to}</td>
									<td>{vac.studentsReopen}</td>
									<td>{vac.teachersReopen}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>

			{/* Holidays */}

			<section className="holiday-section">
				<h2>Gazetted Holidays</h2>

				<div className="table-container">
					<table>
						<thead>
							<tr>
								<th>Date</th>
								<th>Event</th>
							</tr>
						</thead>

						<tbody>
							{holidaysData.holidays.map(
								(holiday, index) => (
									<tr key={index}>
										<td>{holiday.date}</td>
										<td>{holiday.event}</td>
									</tr>
								),
							)}
						</tbody>
					</table>
				</div>
			</section>
		</div>
	);
};

export default HolidaysAndVacations;
