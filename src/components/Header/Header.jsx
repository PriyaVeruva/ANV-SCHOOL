import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { headerData } from "./data";

const Header = () => {
	const [activeMenu, setActiveMenu] = useState(null);
	const [activeSubMenu, setActiveSubMenu] = useState(null);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const closeAllMenus = () => {
		setActiveMenu(null);
		setActiveSubMenu(null);
		setIsMobileMenuOpen(false);
	};

	return (
		<div className="header-section">
			{/* MOBILE HEADER */}
			<div className="mobile-header">
				<img
					src={headerData[0].image}
					alt="logo"
					className="logo"
				/>

				<div
					className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			{/* DESKTOP MENU */}
			<div className="desktop-menu">
				{headerData.map((ele, i) => (
					<nav
						key={i}
						className={
							activeMenu === ele.label &&
							ele.type !== "logo"
								? "highlight-nav-item"
								: "nav-item"
						}
						onMouseEnter={() => setActiveMenu(ele.label)}
						// onMouseLeave={() => setActiveMenu(null)}
					>
						{ele.type === "logo" ? (
							<Link to={ele.link}>
								<img
									src={ele.image}
									alt="logo"
									className="logo"
								/>
							</Link>
						) : (
							<Link to={ele.link}>{ele.label}</Link>
						)}

						{/* DESKTOP DROPDOWN */}
						{activeMenu === ele.label && ele.dropdown && (
							<div className="sub-menus">
								{ele.dropdown.map((sub, idx) => (
									<div key={idx} className="options">
										<Link
											to={sub.link}
											onMouseEnter={() =>
												setActiveSubMenu(
													sub.label,
												)
											}
										>
											{sub.label}
										</Link>

										{activeSubMenu ===
											sub.label &&
											sub.dropdown && (
												<div className="nested-menu">
													{sub.dropdown.map(
														(
															nested,
															nidx,
														) => (
															<Link
																key={
																	nidx
																}
																to={
																	nested.link
																}
															>
																{
																	nested.label
																}
															</Link>
														),
													)}
												</div>
											)}
									</div>
								))}
							</div>
						)}
					</nav>
				))}
			</div>

			{/* MOBILE MENU */}
			<div className={`mobile-menu ${isMobileMenuOpen ? "show" : ""}`}>
				{headerData.map((ele, i) => (
					<div
						key={i}
						className={
							ele.type === "logo"
								? "hidden"
								: "mobile-item"
						}
					>
						{/* MAIN ITEM */}
						<div
							className={
								activeMenu === ele.label
									? "highlight-nav-item"
									: ele.type === "logo"
										? ""
										: "mobile-link"
							}
							onClick={(e) => {
								if (ele.dropdown) {
									e.preventDefault();
									setActiveMenu((prev) =>
										prev === ele.label
											? null
											: ele.label,
									);
								} else {
									closeAllMenus();
								}
							}}
						>
							<Link to={ele.link}>{ele.label}</Link>
							{ele.dropdown && (
								<span>
									{activeMenu === ele.label
										? "−"
										: "+"}
								</span>
							)}
						</div>

						{/* FIRST DROPDOWN */}
						{activeMenu === ele.label && ele.dropdown && (
							<div className="mobile-dropdown">
								{ele.dropdown.map((sub, idx) => (
									<div
										key={idx}
										className="mobile-dropdown-section"
									>
										<div
											className="mobile-sublink"
											onClick={(e) => {
												if (sub.dropdown) {
													e.preventDefault();
													setActiveSubMenu(
														(prev) =>
															prev ===
															sub.label
																? null
																: sub.label,
													);
												} else {
													closeAllMenus();
												}
											}}
										>
											<Link to={sub.link}>
												{sub.label}
											</Link>
										</div>

										{/* SECOND DROPDOWN */}
										{activeSubMenu ===
											sub.label &&
											sub.dropdown && (
												<div className="mobile-nested">
													{sub.dropdown.map(
														(
															nested,
															nidx,
														) => (
															<Link
																key={
																	nidx
																}
																to={
																	nested.link
																}
																onClick={
																	closeAllMenus
																}
															>
																{
																	nested.label
																}
															</Link>
														),
													)}
												</div>
											)}
									</div>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Header;
