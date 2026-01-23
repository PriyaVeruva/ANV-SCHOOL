import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { headerData } from "./data";
const Header = () => {
	const [activeMenu, setActiveMenu] = useState(null);
	const [activeSubMenu, setActiveSubMenu] = useState(null);
	const handleMenuEnter = (label) => {
		setActiveMenu(label);
		// setActiveSubMenu(null);
	};
	const handleMouseLeave = () => {
		setActiveMenu(null);
	};
	const handleSubMenuClick = (label) => {
		console.log(label, "label");
		setActiveSubMenu((prev) => (prev === label ? null : label));
	};
	const closeAllMenus = () => {
		setActiveMenu(null);
		setActiveSubMenu(null);
	};

	console.log(activeSubMenu, "activeSubMenu");
	return (
		<div className="header-section">
			{headerData.map((ele, i) => (
				<nav
					key={i}
					className={
						activeMenu === ele.label && ele.type !== "logo"
							? "highlight-nav-item"
							: "nav-item"
					}
					onMouseEnter={() => handleMenuEnter(ele.label)}
					onMouseLeave={handleMouseLeave}
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
						<Link to={ele.link} onClick={closeAllMenus}>
							{ele.label}
						</Link>
					)}

					{/* First-level dropdown */}
					{activeMenu === ele.label && ele.dropdown && (
						<div className="sub-menus">
							{ele.dropdown.map((sub, idx) => (
								<div key={idx} className="options">
									<Link
										to={sub.link}
										onClick={closeAllMenus}
										onMouseEnter={(e) => {
											e.preventDefault();
											handleSubMenuClick(
												sub.label,
											);
										}}
									>
										{sub.label}
									</Link>

									{/* Second-level dropdown */}
									{activeSubMenu === sub.label &&
										sub.dropdown && (
											<div
												className={
													sub.dropdown
														? "nested-menu"
														: "nested-menu"
												}
												onClick={(e) => {
													e.preventDefault();
													handleSubMenuClick(
														sub.label,
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
	);
};

export default Header;
