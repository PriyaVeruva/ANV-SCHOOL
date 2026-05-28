import { useState, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { headerData } from "./data";

const Header = () => {
	const [activeMenu, setActiveMenu] = useState(null);
	const [activeSubMenu, setActiveSubMenu] = useState(null);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// A reference pointer to store our active timeout ID
	const timeoutRef = useRef(null);

	const closeAllMenus = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setActiveMenu(null);
		setActiveSubMenu(null);
		setIsMobileMenuOpen(false);
	};

	// Safely schedules a menu close action when cursor wanders away
	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setActiveMenu(null);
			setActiveSubMenu(null);
		}, 150); // 150ms buffer prevents flickering across element gaps
	};

	// Instantly intercepts and cancels a scheduled close if cursor moves back in
	const handleMouseEnter = (menuLabel) => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setActiveMenu(menuLabel);
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
						onMouseEnter={() => handleMouseEnter(ele.label)}
						onMouseLeave={handleMouseLeave} // FIX 1: Stable timer exit
					>
						{ele.type === "logo" ? (
							<Link to={ele.link} onClick={closeAllMenus}>
								<img
									src={ele.image}
									alt="logo"
									className="logo"
								/>
							</Link>
						) : (
							<Link
								to={ele.link}
								onClick={() => {
									if (!ele.dropdown) closeAllMenus();
								}}
							>
								{ele.label}
							</Link>
						)}

						{/* DESKTOP DROPDOWN */}
						{activeMenu === ele.label && ele.dropdown && (
							<div className="sub-menus">
								{ele.dropdown.map((sub, idx) => (
									<div
										key={idx}
										className="options"
										onMouseEnter={() => {
											// Keeps the parent menu open during internal navigation
											if (timeoutRef.current)
												clearTimeout(
													timeoutRef.current,
												);

											if (sub.dropdown) {
												setActiveSubMenu(
													sub.label,
												);
											} else {
												setActiveSubMenu(
													null,
												);
											}
										}}
									>
										<Link
											to={sub.link}
											onClick={closeAllMenus}
										>
											{sub.label}
										</Link>

										{/* SECONDARY FLY-OUT DROPDOWN */}
										{activeSubMenu ===
											sub.label &&
											sub.dropdown && (
												<div
													className="nested-menu"
													onMouseEnter={() => {
														if (
															timeoutRef.current
														)
															clearTimeout(
																timeoutRef.current,
															);
													}}
												>
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
