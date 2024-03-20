import React from "react";
import { ServiceCard } from "./ServiceCards/ServiceCard";
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
				className={`w-full h-auto mt-3 grid grid-cols-[repeat(auto-fit,_minmax(320px,1fr))] max-sm:grid-cols-[repeat(auto-fit,_minmax(280px,1fr))] gap-3`}
			>
				<ServiceCard
					title="Frontend Development"
					description="As a frontend developer, I utilize these technologies to enhance website usability and create a more user-friendly experience."
					icons={
						<FaLaptopCode className={`w-9 h-auto text-primary max-sm:w-7`} />
					}
				/>
				<ServiceCard
					title="Backend Development"
					description="I specialize in backend development, crafting robust solutions for web applications. Let's elevate your digital projects together!"
					icons={<FaFileCode className={`w-9 h-auto text-primary max-sm:w-7`} />}
				/>
			</div>
		</div>
	);
};

export default WhatIDoComponent;
