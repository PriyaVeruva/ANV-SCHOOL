import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";
import Counter from "../../components/Counter/Counter";
import { homePageData } from "./data";
import "./HomePage.css";
import { useRef } from "react";
import QuickLinks from "../../components/QuickLinks/QuickLinks";
import Initiatives from "../../components/Initiatives/Initiatives";
const HomePage = () => {
	const carouselRef = useRef(null);
	const section8carouselRef = useRef(null);
	const section10carouselRef = useRef(null);

	const scroll = (direction) => {
		const width = carouselRef.current.offsetWidth;
		carouselRef.current.scrollBy({
			left: direction * width,
			behavior: "smooth",
		});
	};
	const scroll8 = (direction) => {
		const width = section8carouselRef.current.offsetWidth;
		section8carouselRef.current.scrollBy({
			left: direction * width,
			behavior: "smooth",
		});
	};
	const scroll10 = (direction) => {
		const width = section10carouselRef.current.offsetWidth;
		section10carouselRef.current.scrollBy({
			left: direction * width,
			behavior: "smooth",
		});
	};
	return (
		<>
			<div className="section1">
				<img src={homePageData.section1.image} alt="" />
				<h2>{homePageData.section1.title}</h2>
				<h3>{homePageData.section1.subtitle}</h3>
			</div>
			<div className="section2">
				<div className="bgicons">
					<img src={homePageData.section2.image1} alt="" />
					<p className="keyhighlights">
						{homePageData.section2.description}
					</p>
					<img src={homePageData.section2.image2} alt="" />
				</div>
			</div>
			<div className="section3">
				<button className="nav-btn left" onClick={() => scroll(-1)}>
					&#10094;
				</button>

				<div className="carousel-wrapper" ref={carouselRef}>
					{homePageData.section3.carouselSection.map(
						(ele, i) => (
							<div key={i} className="carousel-card">
								<img src={ele.image} alt={ele.title} />
								<h3>{ele.title}</h3>
								<p>{ele.description}</p>
							</div>
						),
					)}
				</div>

				<button className="nav-btn right" onClick={() => scroll(1)}>
					&#10095;
				</button>
			</div>
			<div className="section4">
				<p className="section4-subtitle">
					{homePageData.section4.text1}
				</p>
				<div className="section4-headings">
					<h2>{homePageData.section4.text2}</h2>
					<span className="divider-dot">•</span>
					<h2>{homePageData.section4.text3}</h2>
				</div>
				<p className="section4-description">
					{homePageData.section4.text4}
				</p>

				<h3 className="section4-highlight">
					{homePageData.section4.text5}
					<span>{homePageData.section4.text6}</span>
				</h3>
			</div>
			<div className="section5">
				{homePageData.section5.counterData.map((ele, i) => {
					return (
						<div className="mainsection" key={i}>
							<div className="counterSection">
								{/* <h2>{ele.number}</h2> */}
								<Counter
									end={Number(
										ele.number.replace(/,/g, ""),
									)}
								/>

								<span>{ele.title}</span>
							</div>
							{ele?.image && (
								<img
									src={
										ele?.image?.startsWith(
											"http",
										) && ele?.image
									}
									alt=""
								/>
							)}
						</div>
					);
				})}
			</div>
			<div className="section6">
				<EnquiryForm />
			</div>
			<QuickLinks title={"Information on ANV School"} />

			<div className="section8">
				<h2 className="section8-title">
					{homePageData.section8.title}
				</h2>
				<button
					className="nav-btn left"
					onClick={() => scroll8(-1)}
				>
					&#10094;
				</button>
				<div className="carousel-wrapper" ref={section8carouselRef}>
					{homePageData.section8.cards.map((card, index) => (
						<div className="carousel-card" key={index}>
							<img src={card.image} alt={card.title} />
							<h3>{card.title}</h3>
							<p>{card.description}</p>
						</div>
					))}
				</div>
				<button
					className="nav-btn right"
					onClick={() => scroll8(1)}
				>
					&#10095;
				</button>

				<button className="journey-btn">
					{homePageData.section8.buttonText}
				</button>
			</div>
			{/*section 9*/}
			<Initiatives />

			{/*section10*/}
			<div className="section8">
				<h2 className="section8-title">
					{homePageData.section10.title}
				</h2>
				<h3 className="section8-description">
					{homePageData.section10.description}
				</h3>

				<button
					className="nav-btn left"
					onClick={() => scroll10(-1)}
				>
					&#10094;
				</button>
				<div
					className="carousel-wrapper"
					ref={section10carouselRef}
				>
					{homePageData.section10.cards.map((card, index) => (
						<div className="carousel-card" key={index}>
							<img src={card.image} alt={card.title} />
							<h3>{card.title}</h3>
							<p>{card.description}</p>
						</div>
					))}
				</div>
				<button
					className="nav-btn right"
					onClick={() => scroll10(1)}
				>
					&#10095;
				</button>
				<button className="journey-btn">
					{homePageData.section10.buttonText}
				</button>
			</div>
		</>
	);
};

export default HomePage;
