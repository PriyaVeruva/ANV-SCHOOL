import { Link } from "react-router-dom";
import "./Footer.css";
import {
	FaFacebookF,
	FaLinkedinIn,
	FaInstagram,
	FaYoutube,
	FaEnvelope,
	FaPhoneAlt,
	FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="site-footer">
			{/* Top Section */}
			<div className="footer-top">
				<div className="footer-block">
					<h4>Podar Schools In</h4>
					<p>Chennai</p>
				</div>
			</div>

			{/* Main Footer */}
			<div className="footer-container">
				{/* Contact */}
				<div className="footer-col">
					<h4>Contact Us</h4>
					<p>
						<FaMapMarkerAlt />
						No. 3/2, Hommadevanahalli, Begur Hobli,
						<br />
						Behind T. John College,
						<br />
						Off Bannerghatta Road,
						<br />
						Bengaluru – 560083, Karnataka
					</p>

					<p>
						<FaEnvelope /> admissions@podar.org
					</p>
					<p>
						<FaPhoneAlt /> 6366437899
					</p>
					<p>
						<strong>School Affiliation No:</strong> KA258
					</p>
				</div>

				{/* Quick Links */}
				<div className="footer-col">
					<h4>Quick Links</h4>
					<ul>
						<li>
							<Link to="/about">About Us</Link>
						</li>
						<li>
							<Link to="/why-podar">Why Podar</Link>
						</li>
						<li>
							<Link to="/brochure">Download Brochure</Link>
						</li>
						<li>
							<Link to="/transport-policy">
								Transport Policy
							</Link>
						</li>
						<li>
							<Link to="/careers">Careers</Link>
						</li>
					</ul>
				</div>

				{/* More Links */}
				<div className="footer-col">
					<h4>&nbsp;</h4>
					<ul>
						<li>
							<Link to="/admissions">Admissions</Link>
						</li>
						<li>
							<Link to="/faqs">FAQs</Link>
						</li>
						<li>
							<Link to="/blogs">Blogs</Link>
						</li>
					</ul>
				</div>
			</div>

			{/* Social */}
			<div className="footer-social">
				<a href="#">
					<FaFacebookF />
				</a>
				<a href="#">
					<FaLinkedinIn />
				</a>
				<a href="#">
					<FaInstagram />
				</a>
				<a href="#">
					<FaYoutube />
				</a>
			</div>

			{/* Bottom */}
			<div className="footer-bottom">
				<p>
					© Copyright 2026 | Privacy Policy | Terms & Conditions
				</p>
			</div>
		</footer>
	);
};

export default Footer;
