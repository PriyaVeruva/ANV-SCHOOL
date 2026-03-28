import AboutUs from "../../pages/AboutPodar/AboutUs/AboutUs";
import AnvInitiatives from "../../pages/AboutPodar/AnvInitiatives/AnvInitiatives";
import ChairmansMessage from "../../pages/AboutPodar/ChairmansMessage/ChairmansMessage";
import PrinicipalsMessage from "../../pages/AboutPodar/PrincipalsMessage/PrinicipalsMessage";
import SchoolBrocher from "../../pages/AboutPodar/SchoolBrocher/SchoolBrocher";
import SocialOutReach from "../../pages/AboutPodar/SocialOutReach/SocialOutReach";
import AdmissionProcess from "../../pages/AdmissionProcess/AdmissionProcess";
import Alumini from "../../pages/Alumini/Alumini";
import Blogs from "../../pages/Blogs/Blogs";
import Careers from "../../pages/Careers/Careers";
import ContactUs from "../../pages/ContactUs/ContactUs";
import FeeStructure from "../../pages/FeeStructure/FeeStructure";
import HolidaysAndVacations from "../../pages/HolidaysAndVacations/HolidaysAndVacations";
import HomePage from "../../pages/HomePage/HomePage";
import Circulars from "../../pages/LifeAtAnv/Circulars/Circulars";
import DeclarationLetter from "../../pages/LifeAtAnv/DeclarationLetter/DeclarationLetter";
import SchoolEvents from "../../pages/LifeAtAnv/SchoolEvents/SchoolEvents";
import TransportAndCommiteeMembers from "../../pages/LifeAtAnv/TransportAndCommiteeMembers/TransportAndCommiteeMembers";
import TransportRoutes from "../../pages/LifeAtAnv/TransportRoutes/TransportRoutes";
import Locations from "../../pages/Locations/Locations";
import ArtCurriculum from "../../pages/WhyANV/ArtCurriculum/ArtCurriculum";
import ArtInnovationLab from "../../pages/WhyANV/ArtInnovationLab/ArtInnovationLab";
import DigitalLearning from "../../pages/WhyANV/DigitalLearning/DigitalLearning";
import RightApproch from "../../pages/WhyANV/RightApproch/RightApproch";
import RightFaculty from "../../pages/WhyANV/RightFaculty/RightFaculty";
import RightSkills from "../../pages/WhyANV/RightSkills/RightSkills";
import SchoolInfraStructure from "../../pages/WhyANV/SchoolInfraStructure/SchoolInfraStructure";
import TransportPolicy from "../../pages/WhyANV/TransportPolicy/TransportPolicy";

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
	{
		path: "/contact-us",
		element: <ContactUs />,
	},
	{
		path: "/alumini",
		element: <Alumini />,
	},
	{
		path: "/admission-process",
		element: <AdmissionProcess />,
	},
	{
		path: "/fee-structure",
		element: <FeeStructure />,
	},
	{
		path: "/school-events",
		element: <SchoolEvents />,
	},
	{
		path: "/transport-routes",
		element: <TransportRoutes />,
	},
	{
		path: "/holidays",
		element: <HolidaysAndVacations />,
	},
	{
		path: "/transport",
		element: <TransportAndCommiteeMembers />,
	},
	{
		path: "/circulars",
		element: <Circulars />,
	},
	{
		path: "/declaration-letter",
		element: <DeclarationLetter />,
	},
	{
		path: "/transport-policy",
		element: <TransportPolicy />,
	},
	{
		path: "/school-brocher",
		element: <SchoolBrocher />,
	},
	{
		path: "/careers",
		element: <Careers />,
	},
	{
		path: "/blogs",
		element: <Blogs />,
	},
	{
		path: "/locations",
		element: <Locations />,
	},
];
