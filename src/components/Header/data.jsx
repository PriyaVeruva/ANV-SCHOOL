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
			{ label: "School Brochure", link: "/school-brocher" },
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
						link: "/transport-policy",
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
				link: "/admission-process",
			},
			{
				label: "Fee Structure",
				link: "/fee-structure",
			},
		],
	},
	{
		label: "Life at AVN",
		dropdown: [
			{
				label: "School Events",
				link: "/school-events",
			},
			{
				label: "Transport Routes",
				link: "/transport-routes",
			},
			{
				label: "Holidays and Vacations",
				link: "/holidays",
			},
			{
				label: "Transport and Committee Members",
				link: "/transport",
			},
			{
				label: "Circulars",
				link: "/circulars",
			},
			{
				label: "Declaration Letter",
				link: "/declaration-letter",
			},
		],
	},
	{ label: "Locations", link: "/locations" },
	{ label: "Careers", link: "/careers" },
	{ label: "Blogs", link: "/blogs" },
	{ label: "Alumni", link: "/alumini" },
	{ label: "Contact Us", link: "/contact-us" },
];
