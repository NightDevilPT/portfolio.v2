import { educationProps } from "@/types/types";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const TimelineCard = ({
	title,
	name,
	start,
	end,
	percentage,
	grade,
	description,
	isLast,
}: educationProps) => {
	return title && title === "education" ? (
		<li
			className={`w-full h-auto relative flex justify-start items-start gap-3`}
		>
			<div className="w-auto h-auto flex justify-center items-center">
				{!isLast && (
					<hr className="w-1 h-[calc(100%+10px)] absolute top-3 bg-primary" />
				)}
				<BsCheckCircleFill
					className={`w-4 h-4 text-primary rounded-full bg-base-100 relative z-[1] top-2`}
				/>
			</div>
			<div className="flex-1 h-auto grid grid-cols-1 p-2 px-4 bg-base-200 rounded-md">
				<h1
					className={`font-mandali text-base font-bold text-base-content mb-3 relative after:absolute after:content-[''] after:-bottom-1 after:left-0 after:w-16 after:h-[4px] after:rounded after:bg-base-content`}
				>
					{name}{" "}
				</h1>
				<span className={`text-sm italic text-primary font-mandali`}>
					( {start} - {end} )
					{percentage && percentage > 0
						? `, Percentage - ${percentage}%`
						: ""}
					{grade && grade > 0 ? `, CGPA - ${grade}` : ""}
				</span>
				<span
					className={`text-sm text-base-content italic font-mandali`}
				>
					{description}
				</span>
			</div>
		</li>
	) : (
		<li
			className={`w-full h-auto relative flex justify-start items-start gap-3`}
		>
			<div className="w-auto h-auto flex justify-center items-center">
				{!isLast && (
					<hr className="w-1 h-[calc(100%+10px)] absolute top-3 bg-primary" />
				)}
				<BsCheckCircleFill
					className={`w-4 h-4 text-primary rounded-full bg-base-100 relative z-[1] top-2`}
				/>
			</div>
			<div className="flex-1 h-auto grid grid-cols-1 p-2 px-4 bg-base-200 rounded-md">
				<h1
					className={`font-mandali text-base font-bold italic text-base-content mb-3 relative after:absolute after:content-[''] after:-bottom-1 after:left-0 after:w-16 after:h-[4px] after:rounded after:bg-base-content`}
				>
					{name}{" "}
				</h1>
				<span className={`text-sm italic text-primary font-mandali`}>
					( {start} - {end} )
				</span>
				{!Array.isArray(description) ? (
					<span
						className={`text-sm text-base-content italic font-mandali`}
					>
						{description}
					</span>
				) : (
					<ul>
						{description.map((items: string, index: number) => (
							<li
								className={`text-sm italic text-base-content font-mandali mt-2`}
								key={items + "-" + index}
							>
								{items}
							</li>
						))}
					</ul>
				)}
			</div>
		</li>
	);
};

export default TimelineCard;
