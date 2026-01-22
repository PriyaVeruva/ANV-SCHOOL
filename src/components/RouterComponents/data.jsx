import AboutUs from "../../pages/AboutPodar/AboutUs/AboutUs";
import AnvInitiatives from "../../pages/AboutPodar/AnvInitiatives/AnvInitiatives";
import ChairmansMessage from "../../pages/AboutPodar/ChairmansMessage/ChairmansMessage";
import PrinicipalsMessage from "../../pages/AboutPodar/PrincipalsMessage/PrinicipalsMessage";
import SocialOutReach from "../../pages/AboutPodar/SocialOutReach/SocialOutReach";
import HomePage from "../../pages/HomePage/HomePage";

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
];
