import alumniBanner from "../../assets/images/alumni.jpg";
import CommonBanner from "../../components/CommonBanner/CommonBanner";

const FeeStructure = () => {
	return (
		<div>
			<section className="digital-learning">
				{/* Banner */}
				<CommonBanner
					title={"ANV School Fee Structure"}
					image={alumniBanner}
				/>
			</section>
		</div>
	);
};

export default FeeStructure;
