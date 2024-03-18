import React from "react";
import ServiceCard from "./ServiceCards/ServiceCard";
import { FaFileCode, FaLaptopCode } from "react-icons/fa";

const WhatIDoComponent = () => {
	return (
		<div
			className={`w-full h-auto flex justify-start items-start flex-col gap-2 mt-3`}
		>
			<h1
				className={`text-xl font-bold relative after:absolute after:content-[''] after:-bottom-2 after:left-0 after:w-28 after:h-1 after:rounded after:bg-primary`}
			>
				What I'm Doing
			</h1>

			<div
				className={`w-full h-auto mt-3 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-5`}
			>
				<ServiceCard
					title="Frontend Development"
					height="h-[200px]"
					icons={<FaLaptopCode className={`w-6 h-6 rounded`} />}
					showCollapse={false}
				>
					<div className={`w-full h-auto flex justify-start items-start gap-1 px-3`}>
						<span className="w-full h-auto text-xs">As a frontend developer i am using this technologies.</span>
					</div>
				</ServiceCard>

				<ServiceCard
					title="Backend Development"
					height="h-[200px]"
					icons={<FaFileCode className={`w-6 h-6 rounded`} />}
					showCollapse={false}
				>
					<div></div>
				</ServiceCard>
			</div>
		</div>
	);
};

export default WhatIDoComponent;
