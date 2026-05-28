import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RouterComponents from "./components/RouterComponents/RouterComponents";
import ScrollToTop from "./components/ScrollTopUp/ScrollTopUp";
const App = () => {
	return (
		<div>
			<ScrollToTop />
			<Header />
			<RouterComponents />
			<Footer />
		</div>
	);
};

export default App;
