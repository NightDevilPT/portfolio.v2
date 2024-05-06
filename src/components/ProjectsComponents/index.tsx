"use client";

import React, { useState } from "react";
import moviehub from "../../assets/moviehub.png";
import weather from "../../assets/weatherApp.png";
import calculator from "../../assets/calculatorApp.png";
import dashboard from "../../assets/dashboard.png";
import portfolio from "../../assets/portfolio.png";
import blogshpereBackend from "../../assets/blogsphere-bacckend.png";
import blogshpereFrontend from "../../assets/blogsphere-frontend.png";
import gamies from "../../assets/gamies.png";

import { projectCardProps } from "@/types/types";
import { ProjectCards } from "./ProjectCards/ProjectCards";
import HoverProjectCard from "./HoverProjectCard";

const projectsData = [
	{
		img: portfolio,
		title: "Portfolio",
		description: `This portfolio showcases my work. It's built with Next.js, DaisyUI, and Tailwind CSS, ensuring a polished and professional presentation of my skills and projects.`,
		link: "https://pawan-portfolio-v2.vercel.app/",
		github: "https://github.com/NightDevilPT/portfolio.v2",
		isProgress:false
	},
	{
		img: gamies,
		title: "Gamies Frontend - NextJS",
		description: `I've deployed my frontend project, Gamies Gamers World, on Vercel, leveraging Next.js for development. To enrich the user experience, I incorporated TailwindCSS for styling and NextUI for building dynamic components. Moreover, I utilized Redux for streamlined state management across the application. As for the API, I integrated RAWG.io to fetch the latest game data.`,
		link: "https://gamies-nextjs.vercel.app/",
		github: "https://github.com/NightDevilPT/gamies-nextjs",
		isProgress:true
	},
	{
		img: blogshpereFrontend,
		title: "Blogspher Frontend - NextJS",
		description: `I deployed my Blogsphere frontend project on Vercel, utilizing Next.js for development. To enhance the user interface, I integrated TailwindCSS for styling and ShadcnUI for creating dynamic components. Additionally, I employed Redux for efficient state management throughout the application.`,
		link: "https://blogsphere-nextjs-v2.vercel.app/",
		github: "https://github.com/NightDevilPT/blogsphere-nextjs.v2",
		isProgress:true
	},
	{
		img: blogshpereBackend,
		title: "Blogspher Backend - NestJS",
		description: `Developed a robust backend system using NestJS framework. Implemented the Command Query Responsibility Segregation (CQRS) pattern for improved code. Implemented cron jobs to automate scheduled tasks, ensuring timely publication of blogs at specified intervals.`,
		link: "",
		github: "https://github.com/NightDevilPT/blogsphere-nestjs.v2",
		isProgress:true
	},
	{
		img: moviehub,
		title: "MovieHUB Web Application",
		description: `The MovieHUB web application allows users to search for movies, TV shows, and people's data. Users can customize themes, font families, and utilize the TMDB API for enhanced functionality.`,
		link: "https://movie-hub-git-main-nightdevilpt.vercel.app/",
		github: "https://github.com/NightDevilPT/movie-hub",
		isProgress:false
	},
	{
		img: dashboard,
		title: "Job Desktop Dashboard",
		description: `The Job Desktop Dashboard is a front-end design developed using ReactJS. It features a custom Carousel Effect implementation without the need for Swiper.JS.`,
		link: "https://dashboard-pc-design-git-main-nightdevilpt.vercel.app/",
		github: "https://github.com/NightDevilPT/dashboard-pc-design",
		isProgress:false
	},
	{
		img: weather,
		title: "Weather Web Application",
		description: `The Weather web application provides users with real-time weather information for any country. It includes a theme changer feature for personalized user experience.`,
		link: "https://nextjs-weather-webapp.vercel.app/",
		github: "https://github.com/NightDevilPT/nextjs-weather-webapp",
		isProgress:false
	},
	{
		img: calculator,
		title: "Calculator Web Application",
		description: `The Calculator web application enables users to perform basic calculations. Users can customize the theme and button colors according to their preferences.`,
		link: "https://nightdevilpt.github.io/react-calculator/",
		github: "https://github.com/NightDevilPT/react-calculator",
		isProgress:false
	},
];

const ProjectComponents = () => {
	const [showData, setShowData] = useState<projectCardProps>({
		img: "",
		title: "",
		description: "",
		github: "",
		link: "",
	});
	const [show, setShow] = useState<boolean>(false);
	return (
		<div
			className={`w-full h-auto flex justify-start items-start gap-5 px-2 flex-col`}
		>
			<span className={`w-full h-auto font-mandali text-base`}>
				These projects represent the culmination of my work and
				expertise in web development.
			</span>
			<div
				className={`w-full h-auto grid grid-cols-2 max-xl:grid-cols-1 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5`}
			>
				{projectsData?.map(
					(
						{
							title,
							img,
							description,
							link,
							github,
							isProgress
						}: projectCardProps,
						index: number
					) => (
						<button
							key={title + "-" + index}
							onClick={() => {
								setShowData({
									title,
									img,
									description,
									link,
									github,
									isProgress
								});
								setShow(true);
							}}
						>
							<ProjectCards
								title={title}
								img={img}
								description={description}
								link={link}
								github={github}
							/>
						</button>
					)
				)}
			</div>
			{show && (
				<HoverProjectCard
					title={showData?.title}
					description={showData?.description}
					img={showData?.img}
					link={showData?.link}
					github={showData?.github}
					isProgress={showData.isProgress}
					setShow={setShow}
				/>
			)}
		</div>
	);
};

export default ProjectComponents;
