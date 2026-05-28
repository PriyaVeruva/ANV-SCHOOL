import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    // Listens for route/URL changes
    const { pathname } = useLocation();

    useEffect(() => {
        // Instantly forces the browser window to scroll to the top left corner
        window.scrollTo(0, 0);
    }, [pathname]); // Runs every time the route path changes

    return null; // This component doesn't render any UI elements
};

export default ScrollToTop;