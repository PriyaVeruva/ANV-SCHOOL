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
					<h4>ANV Schools In</h4>
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
						A.N.V VIDHYALAYA MATRICULATION SCHOOL,
						<br />
						Ayyanur road
						<br />
						Vellakovil - 638111.
					</p>

					<p>
						<FaEnvelope />{" "}
						<a
							href="mailto:anv_metschool@yahoo.in"
							className="hyperlink"
						>
							anv_metschool@yahoo.in
						</a>
						<br />
						<a
							href="mailto:anvms21@gmail.com"
							className="hyperlink"
						>
							anvms21@gmail.com
						</a>
					</p>
					<p>
						<FaPhoneAlt /> 91- 88071 40474, +91- 90428 40474
					</p>
					<p>
						<strong>
							<a
								href="https://www.anvschool.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hyperlink"
							>
								ANV School Official Website
							</a>
						</strong>
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
							<Link to="/why-podar">Why ANV</Link>
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
				<a
					href="https://www.facebook.com/anv.vellakovil.3?rdid=RWD97iJpY59hJOvO&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F185qkAwMZV%2F#"
					target="_blank"
				>
					<FaFacebookF />
				</a>
				<a href="#">
					<FaLinkedinIn />
				</a>
				<a
					href="https://www.instagram.com/anvschool?igsh=ZDVqM3lvYXAwOGMy"
					target="_blank"
				>
					<FaInstagram />
				</a>
				<a
					href="https://youtube.com/@anv_school?si=IEdhJG5lgwfNE5kL"
					target="_blank"
				>
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
