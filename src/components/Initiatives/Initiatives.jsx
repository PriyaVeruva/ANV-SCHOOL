import { useRef } from "react";
import { initiativesData } from "./data";

const Initiatives = () => {
	const section9carouselRef = useRef(null);

	const scroll9 = (direction) => {
		const width = section9carouselRef.current.offsetWidth;
		section9carouselRef.current.scrollBy({
			left: direction * width,
			behavior: "smooth",
		});
	};
	return (
		<div className="section8">
			<h2 className="section8-title">
				{initiativesData.section9.title}
			</h2>
			<button className="nav-btn left" onClick={() => scroll9(-1)}>
				&#10094;
			</button>
			<div className="carousel-wrapper" ref={section9carouselRef}>
				{initiativesData.section9.cards.map((card, index) => (
					<div className="carousel-card" key={index}>
						<img
							src={
								card.image.startsWith("http") &&
								card.image
							}
							alt={card.title}
						/>
						<h3>{card.title}</h3>
						<p>{card.description}</p>
					</div>
				))}
			</div>
			<button className="nav-btn right" onClick={() => scroll9(1)}>
				&#10095;
			</button>
		</div>
	);
};

export default Initiatives;
