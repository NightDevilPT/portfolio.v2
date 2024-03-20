import HeaderComponent from "@/components/HeaderComponent";
import ResumeComponent from "@/components/ResumeComponent";
import { educationProps } from "@/types/types";
import React from "react";

const educatonData = [
	{
		title:"education",
		start: "2019",
		end: "2022",
		name: "B.Voc( Software Developer )",
		grade: 9.16,
		percentage: 0,
		description:
			"I've earned my Bachelor's degree in B.Vocational (Software Developer) from IP University.",
	},
	{
		title:"education",
		start: "2018",
		end: "2019",
		name: "ITI ( COPA )",
		grade: 0,
		percentage: 87,
		description:
			"I've successfully completed my ITI (Computer Operating Programming Assistant) from Pusa.",
	},
	{
		title:"education",
		start: "2017",
		end: "2018",
		name: "12th ( NIOS )",
		grade: 0,
		percentage: 65,
		description:
			"I've successfully completed my 12th grade from NIOS (National Institute of Open Schooling).",
	},
	{
		title:"education",
		start: "2012",
		end: "2014",
		name: "10th ( CBSE )",
		grade: 9,
		percentage: 0,
		description:
			"I've successfully completed my 10th grade from CBSE (Central Board of Secondary Education).",
	},
];

const experienceData = [
	{
		title:"experience",
		name: "Misemind Technologies",
		start: "2023",
		end: "Present",
		description:
			"I'm currently a valued member of the Misemind Technology team, where I contribute my skills and expertise as Fullstack Developer",
	},
];

const page = () => {
	return (
		<div className={`w-full h-auto bg-base-100 rounded-md shadow-lg shadow-black/30 p-5 flex justify-start items-start flex-col gap-3 max-lg:mb-24`}>
			<HeaderComponent title="Resume" />
			<ResumeComponent title="Education" data={educatonData} />
			<ResumeComponent title="Experience" data={experienceData} />
		</div>
	);
};

export default page;
