import { useEffect, useRef, useState } from "react";
const Counter = ({ end, duration = 2000 }) => {
	const [count, setCount] = useState(0);
	const ref = useRef(null);
	const started = useRef(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !started.current) {
					started.current = true;
					animateCount();
				}
			},
			{ threshold: 0.5 }
		);

		if (ref.current) observer.observe(ref.current);

		return () => observer.disconnect();
	}, []);

	const animateCount = () => {
		let start = 0;
		const startTime = performance.now();

		const update = (currentTime) => {
			const progress = Math.min(
				(currentTime - startTime) / duration,
				1
			);
			const value = Math.floor(progress * end);
			setCount(value);

			if (progress < 1) {
				requestAnimationFrame(update);
			}
		};

		requestAnimationFrame(update);
	};

	return <h2 ref={ref}>{count.toLocaleString()}</h2>;
};

export default Counter;
