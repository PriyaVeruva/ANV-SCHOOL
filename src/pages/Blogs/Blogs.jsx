import "./Blogs.css";
import { blogsData } from "./data";
import { useState } from "react";

const Blogs = () => {
	const [activeCategory, setActiveCategory] = useState("All");
	const [openId, setOpenId] = useState(null);

	const filtered =
		activeCategory === "All"
			? blogsData.posts
			: blogsData.posts.filter((p) => p.category === activeCategory);

	// TOGGLE FUNCTION
	const togglePost = (id) => {
		setOpenId(openId === id ? null : id);
	};

	return (
		<div className="blogs">
			{/* HEADER */}
			<div className="blogs-header">
				<h1>ANV Blogs</h1>
				<p>Insights, Stories & Learning from ANV School</p>
			</div>

			{/* FILTERS */}
			<div className="filters">
				{blogsData.categories.map((cat, i) => (
					<button
						key={i}
						className={activeCategory === cat ? "active" : ""}
						onClick={() => setActiveCategory(cat)}
					>
						{cat}
					</button>
				))}
			</div>

			{/* BLOG GRID */}
			<div className="blogs-grid">
				{filtered.length === 0 ? (
					<div className="empty-state">
						<img
							src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg"
							alt="No blogs"
						/>
						<h3>No Blogs Available</h3>
						<p>
							We’re working on adding new content. Please
							check back soon!
						</p>
					</div>
				) : (
					filtered.map((post) => (
						<div className="blog-card" key={post.id}>
							<img src={post.image} alt="" />

							<div className="blog-content">
								<span>{post.date}</span>
								<h3>{post.title}</h3>

								<button
									onClick={() => togglePost(post.id)}
								>
									{openId === post.id
										? "Hide ▲"
										: "Read More ▼"}
								</button>

								{openId === post.id && (
									<p className="blog-extra">
										Lorem ipsum dolor sit amet,
										consectetur adipisicing elit.
										Students learn better through
										interactive and engaging
										activities.
									</p>
								)}
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default Blogs;
