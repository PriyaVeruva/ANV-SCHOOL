import AboutUs from "../../pages/AboutPodar/AboutUs/AboutUs";
import AnvInitiatives from "../../pages/AboutPodar/AnvInitiatives/AnvInitiatives";
import ChairmansMessage from "../../pages/AboutPodar/ChairmansMessage/ChairmansMessage";
import PrinicipalsMessage from "../../pages/AboutPodar/PrincipalsMessage/PrinicipalsMessage";
import SocialOutReach from "../../pages/AboutPodar/SocialOutReach/SocialOutReach";
import HomePage from "../../pages/HomePage/HomePage";
import ArtCurriculum from "../../pages/WhyANV/ArtCurriculum/ArtCurriculum";
import ArtInnovationLab from "../../pages/WhyANV/ArtInnovationLab/ArtInnovationLab";
import DigitalLearning from "../../pages/WhyANV/DigitalLearning/DigitalLearning";
import RightApproch from "../../pages/WhyANV/RightApproch/RightApproch";
import RightFaculty from "../../pages/WhyANV/RightFaculty/RightFaculty";
import RightSkills from "../../pages/WhyANV/RightSkills/RightSkills";
import SchoolInfraStructure from "../../pages/WhyANV/SchoolInfraStructure/SchoolInfraStructure";

export const routerData = [
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/aboutus",
		element: <AboutUs />,
	},
	{
		path: "/chairman'smsg",
		element: <ChairmansMessage />,
	},
	{
		path: "/anv-initiatives",
		element: <AnvInitiatives />,
	},
	{
		path: "/principalsmsg",
		element: <PrinicipalsMessage />,
	},
	{
		path: "/social-outreach",
		element: <SocialOutReach />,
	},
	{
		path: "/digital-learning",
		element: <DigitalLearning />,
	},
	{
		path: "/art-innovation-lab",
		element: <ArtInnovationLab />,
	},
	{
		path: "/art-curriculum",
		element: <ArtCurriculum />,
	},
	{
		path: "/right-faculty",
		element: <RightFaculty />,
	},
	{
		path: "/right-approch",
		element: <RightApproch />,
	},
	{
		path: "/right-skills",
		element: <RightSkills />,
	},
	{
		path: "/school-infrastructure",
		element: <SchoolInfraStructure />,
	},
];
