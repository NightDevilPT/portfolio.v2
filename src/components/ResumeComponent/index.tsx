import { educationProps, experienceProps, resumeProps } from "@/types/types";
import React from "react";
import TimelineCard from "./TimelineCard";

const ResumeComponent = ({ title, data }: resumeProps) => {
	return (
		<div
			className={`w-full h-auto flex justify-start items-start flex-col gap-2 mt-3`}
		>
			<h1
				className={`text-xl font-bold relative after:absolute after:content-[''] after:-bottom-2 after:left-0 after:w-16 after:h-1 after:rounded after:bg-primary`}
			>
				{title}
			</h1>
			<div
				className={`w-full h-auto flex justify-start items-start mt-3`}
			>
				<ul className={`w-full h-auto px-3 grid grid-cols-1 gap-3`}>
					{data?.map(
						(
							{
								title,
								name,
								start,
								end,
								percentage,
								grade,
								description,
							}: educationProps,
							index: number
						) => (
							<TimelineCard
								name={name}
								start={start}
								end={end}
								percentage={percentage}
								grade={grade}
								description={description}
								key={name+'-'+index}
								title={title}
								isLast={index===data.length-1}
							/>
						)
					)}
				</ul>
			</div>
		</div>
	);
};

export default ResumeComponent;
