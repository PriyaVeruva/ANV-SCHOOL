import { Route, Routes } from "react-router-dom";
import { routerData } from "./data";

const RouterComponents = () => {
	return (
		<Routes>
			{routerData.map((ele, i) => (
				<Route key={i} path={ele.path} element={ele.element} />
			))}
		</Routes>
	);
};

export default RouterComponents;
