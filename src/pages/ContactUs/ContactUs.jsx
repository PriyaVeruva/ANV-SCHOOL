import CommonBanner from "../../components/CommonBanner/CommonBanner";
import "./ContactUs.css";
import { contactUsData } from "./data";

const ContactUs = () => {
	const { title, image, school, contact, admin, mapEmbedUrl } =
		contactUsData;

	return (
		<section className="digital-learning">
			<CommonBanner title={title} image={image} />
			<div className="contact-container">
				{/* Address Card */}
				<div className="contact-card">
					<h3>🏫 School Address</h3>
					<p className="school-name">{school.name}</p>
					<p className="school-board">{school.board}</p>

					{school.address.map((line, index) => (
						<p key={index}>{line}</p>
					))}
				</div>

				{/* Contact Card */}
				<div className="contact-card">
					<h3>📞 Contact Details</h3>
					<p>
						<strong>Email:</strong>{" "}
						<a href={`mailto:${contact.email}`}>
							{contact.email}
						</a>
					</p>
					<p>
						<strong>Phone:</strong>{" "}
						<a href={`tel:${contact.phone}`}>
							{contact.phone}
						</a>
					</p>
				</div>

				{/* Admin Card */}
				<div className="contact-card">
					<h3>👤 Administration</h3>
					<p>
						<strong>Name:</strong> {admin.name}
					</p>
					<p>
						<strong>Email:</strong>{" "}
						<a href={`mailto:${admin.email}`}>
							{admin.email}
						</a>
					</p>
					<p>
						<strong>Mobile:</strong>{" "}
						<a href={`tel:${admin.mobile}`}>{admin.mobile}</a>
					</p>
				</div>
			</div>
			{/* Map Section */}
			<div className="map-section">
				<iframe
					title="ANV Matric School Map"
					src="https://www.google.com/maps?output=embed&q=ANV+Matric+School+Vellakovil"
					width="100%"
					height="350"
					style={{ border: 0, borderRadius: "12px" }}
					loading="lazy"
					allowFullScreen
				></iframe>
			</div>{" "}
		</section>
	);
};

export default ContactUs;
