import React from "react";
import moviehub from "../../assets/moviehub.png";
import weather from "../../assets/weatherApp.png";
import calculator from "../../assets/calculatorApp.png";
import dashboard from "../../assets/dashboard.png";
import portfolio from "../../assets/portfolio.png";

import { projectCardProps } from "@/types/types";
import { ProjectCards } from "./ProjectCards/ProjectCards";

const projectsData = [
	{
		img: portfolio,
		title: "Portfolio",
		description: `This portfolio showcases my work. It's built with Next.js, DaisyUI, and Tailwind CSS, ensuring a polished and professional presentation of my skills and projects.`,
		link: "https://pawan-portfolio-v2.vercel.app/",
		github: "https://github.com/NightDevilPT/portfolio.v2",
	},
	{
		img: moviehub,
		title: "MovieHUB Web Application",
		description: `The MovieHUB web application allows users to search for movies, TV shows, and people's data. Users can customize themes, font families, and utilize the TMDB API for enhanced functionality.`,
		link: "https://movie-hub-git-main-nightdevilpt.vercel.app/",
		github: "https://github.com/NightDevilPT/movie-hub",
	},
	{
		img: dashboard,
		title: "Job Desktop Dashboard",
		description: `The Job Desktop Dashboard is a front-end design developed using ReactJS. It features a custom Carousel Effect implementation without the need for Swiper.JS.`,
		link: "https://dashboard-pc-design-git-main-nightdevilpt.vercel.app/",
		github: "https://github.com/NightDevilPT/dashboard-pc-design",
	},
	{
		img: weather,
		title: "Weather Web Application",
		description: `The Weather web application provides users with real-time weather information for any country. It includes a theme changer feature for personalized user experience.`,
		link: "https://nightdevilpt.github.io/react-weatherapp/",
		github: "https://github.com/NightDevilPT/react-weatherapp",
	},
	{
		img: calculator,
		title: "Calculator Web Application",
		description: `The Calculator web application enables users to perform basic calculations. Users can customize the theme and button colors according to their preferences.`,
		link: "https://nightdevilpt.github.io/react-calculator/",
		github: "https://github.com/NightDevilPT/react-calculator",
	},
];

const ProjectComponents = () => {
	return (
		<div
			className={`w-full h-auto flex justify-start items-start gap-5 px-2 flex-col`}
		>
			<span className={`w-full h-auto font-mandali text-base`}>
				These projects represent the culmination of my work and
				expertise in web development.
			</span>
			<div
				className={`w-full h-auto grid grid-cols-[repeat(auto-fit,_minmax(320px,1fr))] max-sm:grid-cols-[repeat(auto-fit,_minmax(280px,1fr))] gap-3`}
			>
				{projectsData?.map(
					({
						title,
						img,
						description,
						link,
						github,
					}: projectCardProps) => (
						<ProjectCards
							title={title}
							img={img}
							description={description}
							link={link}
							github={github}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default ProjectComponents;
