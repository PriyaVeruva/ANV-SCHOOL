import foodDonation from "../../../assets/images/foodDonation.jpg";
import kitchenImg from "../../../assets/images/kitchenImg.png";
import ngoImg from "../../../assets/images/ngoImg.png";
import rainwaterImg from "../../../assets/images/rainwaterImg.png";
import solarImg from "../../../assets/images/solarImg.png";

export const socialOutReachData = {
	title: "Social Outreach",
	image: foodDonation,

	description:
		"Since its inception in 1990, ANV Education has been committed to social causes, supporting the marginalized and underprivileged sections of society. ANV Education Network’s commitment to social responsibility is an ongoing effort, ensuring meaningful contributions to the community.",

	cards: [
		{
			image: kitchenImg,
			title: "ANV Charity Kitchen at Mumbai",
			description: [
				"ANV Education Network set up an industrial kitchen at Sewri, Mumbai to provide meals to the homeless and destitute.",
				"During the Covid-19 pandemic, over 600 meals were served daily to frontline workers and quarantined patients.",
			],
		},
		{
			image: ngoImg,
			title: "Partnering with NGOs",
			description: [
				"ANV Education Network collaborates with various NGOs to support child welfare, education, and community development initiatives.",
			],
		},
		{
			image: rainwaterImg,
			title: "Rain Water Harvesting",
			description: [
				"We actively promote sustainable practices by implementing rain water harvesting systems across our school campuses.",
			],
		},
		{
			image: solarImg,
			title: "Solar Panels",
			description: [
				"To support clean energy initiatives, ANV schools have installed solar panels to reduce carbon footprint.",
			],
		},
	],
};
