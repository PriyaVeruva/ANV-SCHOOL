import rightSkillsBanner from "../../../assets/images/rightSkillsBanner.jpg";
import cricket from "../../../assets/images/cricket.jpg";
import basketball from "../../../assets/images/basketball.jpg";
import football from "../../../assets/images/football.jpg";
import dance from "../../../assets/images/dance.jpg";
import theater from "../../../assets/images/theater.jpg";
import music from "../../../assets/images/music.jpg";
import studentcouncil from "../../../assets/images/studentcouncil.jpg";

export const rightSkillsData = {
	title: "The Right Skills",
	subtitle:
		"Shaping confident, creative and future-ready learners beyond classrooms",
	image: rightSkillsBanner,

	description:
		"Each extracurricular activity follows a carefully structured syllabus delivered through a scientific and student-centric approach. This ensures students not only enjoy participation but also develop discipline, leadership, creativity, and teamwork.",
	events: "Let's explore the various events at ANV",
	sections: [
		{
			id: "sports",
			title: "Sports Events",
			accent: "#ff8c42",
			description:
				"Professional coaching and structured training help students build focus, stamina, strategy, and sportsmanship.",
			items: [
				"Football",
				"Cricket",
				"Basketball",
				"Table Tennis",
				"Skating",
				"Yoga",
				"Chess",
			],
		},
		{
			id: "cultural",
			title: "Cultural Events",
			accent: "#9b5de5",
			description:
				"Cultural platforms allow students to explore creativity, confidence, and expression through the arts.",
			items: [
				"Music",
				"Dance",
				"Drama",
				"Art & Craft",
				"Public Speaking",
			],
		},
		{
			id: "council",
			title: "Student Council",
			accent: "#00bbf9",
			description:
				"Students from Std. 9 onwards lead, manage, and execute school events, nurturing leadership and accountability.",
			items: [
				"Event Planning",
				"Leadership Development",
				"Team Collaboration",
				"Decision Making",
			],
		},
	],

	highlights: [
		{
			number: "01",
			title: "Expert Coaches",
			desc: "Specialized mentors guide students with age-appropriate, goal-oriented training programs.",
		},
		{
			number: "02",
			title: "Wide Choices",
			desc: "A balanced mix of sports and cultural activities caters to every student's interest.",
		},
		{
			number: "03",
			title: "Leadership Exposure",
			desc: "Student councils build confidence, responsibility, and strong interpersonal skills.",
		},
	],
	sports: {
		title: "Sports Events",

		cards: [
			{
				title: "Cricket",
				image: cricket,
			},
			{
				title: "BasketBall",
				image: basketball,
			},
			{
				title: "FootBall",
				image: football,
			},
		],
	},
	cultural: {
		title: "Cultural Events",

		cards: [
			{
				title: "Dance",
				image: dance,
			},
			{
				title: "Theatre",
				image: theater,
			},
			{
				title: "Music",
				image: music,
			},
		],
	},
	moreEvents: "More About Events",
	studentCouncil: {
		title: "Student Council",
		description:
			"Students from Std. 9 onwards form a council to come together as a team to plan, manage, and execute events.",
		image: studentcouncil,
	},
};
