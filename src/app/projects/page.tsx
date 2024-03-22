import HeaderComponent from "@/components/HeaderComponent";
import ProjectComponents from "@/components/ProjectsComponents";
import React from "react";

const page = () => {
	return (
		<div className={`w-full h-auto bg-base-100 rounded-md shadow-lg shadow-black/30 p-5 flex justify-start items-start flex-col gap-3 mb-10 max-lg:mb-24`}>
			<HeaderComponent title="Projects" />
			<ProjectComponents />
		</div>
	);
};

export default page;
