import rightFacultyImg from "../../../assets/images/coding.png";
import teacherTraining from "../../../assets/images/teacher-training.jpg";
export const rightFaculty = {
	title: "Right Faculty",
	image: rightFacultyImg,
	description:
		"At ANV, we take our teaching seriously and believe that the most important aspect of a school is the quality of their faculty.",
	recruitmentProcessData: {
		title: "How We Select Our Educators",
		subTitle:
			"A thoughtful and structured recruitment journey ensures that every educator aligns with our values, quality standards, and passion for teaching.",

		steps: [
			{
				step: "01",
				icon: "🔍",
				title: "Background Screening",
				description:
					"A thorough verification process is carried out to ensure professional credibility, experience, and suitability for the role.",
			},
			{
				step: "02",
				icon: "🎤",
				title: "Skill & Teaching Assessment",
				description:
					"Candidates demonstrate subject knowledge and teaching approach through interviews and live classroom-style sessions.",
			},
			{
				step: "03",
				icon: "🌱",
				title: "Training & Development",
				description:
					"Educators with strong potential and passion undergo structured training to align with our teaching philosophy and classroom standards.",
			},
		],
	},
	anvContent: {
		section3: {
			title: "Teacher Training Program",
			description:
				"At Podar Education Network, we believe in continuous growth for every team member — from school leaders to teaching and non-teaching staff. Teachnique Trainings, our specialized training wing under the Podar Innovation Center, provides innovative, practical, and comprehensive training solutions tailored to empower our educators and staff.",
			image: teacherTraining, // update this path
		},
	},
	trainingPrograms: [
		{
			id: 1,
			title: "Pedagogical Training",
			description:
				"Programs designed to enhance classroom practices and teaching strategies for all subjects.",
			icon: "🎓",
		},
		{
			id: 2,
			title: "Subject Specific Training",
			description:
				"Focused modules for English, Hindi, Science, and Mathematics teachers to improve subject expertise.",
			icon: "📚",
		},
		{
			id: 3,
			title: "School Support Programs",
			description:
				"Comprehensive training for new schools combining coaching and classroom support for staff and leaders.",
			icon: "🏫",
		},
		{
			id: 4,
			title: "Leadership Training",
			description:
				"Training sessions to develop leadership, decision-making, and management skills among school leaders.",
			icon: "👩‍💼 / 👨‍💼",
		},
		{
			id: 5,
			title: "Skill-Based Program",
			description:
				"Programs to improve practical skills like critical thinking, communication, and collaboration for teachers.",
			icon: "🛠️",
		},
		{
			id: 6,
			title: "Handbooks & School Guides",
			description:
				"Resources and guides that help teachers navigate curriculum, assessment, and school policies effectively.",
			icon: "📖",
		},
	],
};
