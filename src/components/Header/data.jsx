import schoolLogo from "../../assets/images/school-logo.jpeg";
export const headerData = [
	{
		type: "logo",
		image: schoolLogo,
	},
	{
		label: "Home",
		link: "/",
	},
	{
		label: "About Podar",
		dropdown: [
			{ label: "About Us", link: "/aboutus" },
			{ label: "Chairmans Message", link: "/chairman'smsg" },
			{ label: "ANV Initiatives", link: "/anv-initiatives" },
			{ label: "Principal Message", link: "/principalsmsg" },
			{ label: "School OutReach", link: "/social-outreach" },
			{ label: "School Brochure", link: "" },
		],
	},
	{
		label: "Why ANV",
		dropdown: [
			{
				label: "Right Curriculm >",
				dropdown: [
					{
						label: "Digital Learning",
						link: "",
					},
					{
						label: "Art Innovation Lab",
						link: "",
					},
					{
						label: "Art Curriculm",
						link: "",
					},
				],
			},
			{ label: "Right Faculty", link: "" },
			{
				label: "Right Environment",
				dropdown: [
					{
						label: "School Infrastructure",
						link: "",
					},
					{
						label: "Transport Policy",
						link: "",
					},
				],
			},
			{ label: "Right Approch", linlk: "" },
			{ label: "Right Skills", link: "" },
		],
	},
	{
		label: "Admissions",
		dropdown: [
			{
				label: "Admissions Process",
				link: "",
			},
			{
				label: "Fee Structure",
				link: "",
			},
		],
	},
	{
		label: "Life at AVN",
		dropdown: [
			{
				label: "School Events",
				link: "",
			},
			{
				label: "Transport Routes",
				link: "",
			},
			{
				label: "Holidays and Vacations",
				link: "",
			},
			{
				label: "Transport and Committee Members",
				link: "",
			},
			{
				label: "Circulars",
				link: "",
			},
			{
				label: "Declaration Letter",
				link: "",
			},
		],
	},
	{ label: "Locations", link: "" },
	{ label: "Careers", link: "" },
	{ label: "Blogs", link: "" },
	{ label: "Alumni", link: "" },
	{ label: "Contact Us", link: "" },
];
