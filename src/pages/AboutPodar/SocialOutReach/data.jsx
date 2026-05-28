import foodDonation from "../../../assets/images/foodDonation.jpg";
import bloodDonationImg from "../../../assets/images/ANV-BloodDonation.png";
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
			image: bloodDonationImg,
			title: "ANV Blood Donation Camp",
			description: [
				`ANV Education Network organized a Blood Donation Camp to help save lives and support people in need."

"Students, staff, and volunteers participated enthusiastically in the noble cause."

"The camp was conducted with proper medical support and safety measures."

"This initiative reflects ANV Education Network’s commitment to community service and social responsibility.`,
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
