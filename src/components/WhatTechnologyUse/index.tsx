import React from "react";

import { SiNestjs, SiNextdotjs, SiStrapi } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";

const technologies = [
	{ title: "HTML", icons: <FaHtml5 className={`w-6 h-6`} /> },
	{ title: "CSS", icons: <FaCss3Alt className={`w-6 h-6`} /> },
	{ title: "SCSS", icons: <FaSass className={`w-6 h-6`} /> },
	{ title: "Tailwind", icons: <SiTailwindcss className={`w-6 h-6`} /> },
	{ title: "JavaScript", icons: <IoLogoJavascript className={`w-6 h-6`} /> },
	{ title: "ReactJS", icons: <FaReact className={`w-6 h-6`} /> },
	{ title: "NextJS", icons: <SiNextdotjs className={`w-6 h-6`} /> },
	{ title: "AngularJS", icons: <FaAngular className={`w-6 h-6`} /> },
	{ title: "ExpressJS", icons: <SiExpress className={`w-6 h-6`} /> },
	{ title: "NestJS", icons: <SiNestjs className={`w-6 h-6`} /> },
	{ title: "Strapi", icons: <SiStrapi className={`w-6 h-6`} /> },
	{ title: "PostgreSQL", icons: <BiLogoPostgresql className={`w-6 h-6`} /> },
	{ title: "MongoDB", icons: <BiLogoMongodb className={`w-6 h-6`} /> },
];

const WhatTechnologyUses = () => {
	return (
		<div
			className={`w-full h-auto flex justify-start items-start flex-col gap-2 mt-3`}
		>
			<h1
				className={`text-xl font-bold relative after:absolute after:content-[''] after:-bottom-2 after:left-0 after:w-28 after:h-1 after:rounded after:bg-primary`}
			>
				What Technology We User
			</h1>
			<div
				className={`w-full h-auto mt-3 grid grid-cols-[repeat(auto-fit,_minmax(150px,1fr))] max-sm:grid-cols-[repeat(auto-fit,_minmax(60px,1fr))] gap-3`}
			>
				{technologies.map((technology, index) => (
					<TechnologyCard
						key={technology.title + "-" + index}
						title={technology.title}
						icons={technology.icons}
					/>
				))}
			</div>
		</div>
	);
};

export default WhatTechnologyUses;

interface IProps {
	title: string;
	icons: any;
}
export const TechnologyCard = ({ icons, title }: IProps) => {
	return (
		<div
			className={`w-full h-auto bg-base-200 text-base-content p-3 rounded flex justify-center items-center gap-2 transition-all duration-300 hover:bg-base-content hover:text-base-300 cursor-pointer`}
		>
			{icons}
			<span className={`text-sm font-mandali font-bold max-sm:hidden`}>{title}</span>
		</div>
	);
};
