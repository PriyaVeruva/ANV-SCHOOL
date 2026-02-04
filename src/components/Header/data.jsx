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
		label: "About ANV",
		dropdown: [
			{ label: "About Us", link: "/aboutus" },
			{ label: "Chairmans Message", link: "/chairman'smsg" },
			{ label: "ANV Initiatives", link: "/anv-initiatives" },
			{ label: "Principal Message", link: "/principalsmsg" },
			{ label: "Social OutReach", link: "/social-outreach" },
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
						link: "/digital-learning",
					},
					{
						label: "Art Innovation Lab",
						link: "/art-innovation-lab",
					},
					{
						label: "Art Curriculm",
						link: "/art-curriculum",
					},
				],
			},
			{ label: "Right Faculty", link: "/right-faculty" },
			{
				label: "Right Environment",
				dropdown: [
					{
						label: "School Infrastructure",
						link: "/school-infrastructure",
					},
					{
						label: "Transport Policy",
						link: "",
					},
				],
			},
			{ label: "Right Approch", link: "/right-approch" },
			{ label: "Right Skills", link: "/right-skills" },
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
