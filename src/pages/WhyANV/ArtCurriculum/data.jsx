import artBanner from "../../../assets/images/art-banner.jpg";
import codingImg from "../../../assets/images/coding.png";
import printing3DImg from "../../../assets/images/3d-printing.png";
import physicalComputingImg from "../../../assets/images/physical-computing.png";

export const artCurriculumData = {
	title: "Art Curriculum",
	image: artBanner,
	subTitle:
		"Art Department: Nurturing Creativity for Students from Grades 1 to 8",
	artDepartmentData: {
		sectionTitle: "Art Department",
		sectionSubtitle: "Vision & Mission",

		vision: {
			title: "Our Vision",
			description:
				"To create a future where every student confidently explores creativity, artistic expression, and innovation—making art an essential part of holistic learning, personal growth, and cultural awareness.",
		},

		mission: {
			title: "Our Mission",
			description:
				"To inspire students and empower art educators through a thoughtfully designed curriculum. By blending creative mentorship, quality resources, and engaging experiences, we ensure art education remains meaningful, impactful, and consistent across our schools.",
		},

		highlights: [
			"Encourages creativity and self-expression",
			"Builds confidence through artistic exploration",
			"Supports holistic and cultural development",
			"Ensures structured and engaging art education",
		],
	},
	curriculumHeader: "Our Approach to Curriculum Design",
	cards: [
		{
			image: codingImg,
			title: "Research-Driven Design",
			description: `Our Head Office Subject Matter Experts (SMEs) actively study evolving art trends, history, styles, and mediums, connecting artistic learning to real-life applications and future career pathways.`,
		},
		{
			image: printing3DImg,
			title: "Hands-On, Age-Appropriate Curriculum",
			description: `Informed by research, our curriculum offers engaging, hands-on projects thoughtfully tailored to suit learners from Grades 1 to 8.`,
		},
		{
			image: physicalComputingImg,
			title: "Regional Support for Consistency",
			description: `Through ongoing school visits, regional art mentors support teachers, share best practices, and strengthen curriculum delivery.`,
		},
	],
	artCurriculumHighlights: {
		title: "Highlights of Our Art Learning Journey",
		subTitle:
			"A carefully designed programme that nurtures creativity, skill, and expression at every stage.",

		highlights: [
			{
				icon: "🎨",
				title: "Strong Creative Foundations",
				description:
					"Students develop core artistic skills by exploring visual elements such as lines, forms, colours, textures, space, and balance through guided, hands-on experiences.",
			},
			{
				icon: "🧩",
				title: "Design & Making Studios",
				description:
					"Through themed studio modules spread across the year, students experiment with materials, techniques, and cultural influences while creating imaginative 3D and mixed-media projects.",
			},
			{
				icon: "🏛️",
				title: "Showcasing Young Artists",
				description:
					"Annual art showcases give students a platform to present their work, celebrate creative growth, and engage with a wider school community.",
			},
			{
				icon: "🖌️",
				title: "Quality Tools & Resources",
				description:
					"Each student is supported with thoughtfully selected art supplies, organised kits, and consistent learning resources to ensure a rich and uniform experience across classrooms.",
			},
		],
	},
	artSupportData: {
		title: "Supporting Our Educators & Learners",
		subTitle:
			"A strong support system ensures quality teaching, consistent learning, and meaningful student progress.",

		supportItems: [
			{
				icon: "👩‍🏫",
				title: "Ongoing Teacher Development",
				description:
					"Regular guided sessions help educators strengthen teaching strategies, understand curriculum goals, and confidently deliver engaging art lessons.",
			},
			{
				icon: "📚",
				title: "Centralised Learning Resources",
				description:
					"Digital lesson materials, demonstrations, and guidance videos are easily accessible through a shared online platform for seamless classroom support.",
			},
			{
				icon: "🎯",
				title: "Student Progress Evaluation",
				description:
					"Periodic assessments focus on creative thinking, skill application, and artistic growth, helping students reflect and improve.",
			},
		],
	},
};
