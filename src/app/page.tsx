import HeaderComponent from "@/components/HeaderComponent";
import WhatIDoComponent from "@/components/WhatIDoComponent";
import WhatTechnologyUses from "@/components/WhatTechnologyUse";

const aboutInfo = {
	description: `I am Pawan Kumar, a passionate full stack developer, driven by the art of creating seamless digital experiences. With proficiency in both frontend and backend technologies, including React, Angular, Next.js, Nest.js, Strapi, and expertise in databases like PostgreSQL and MongoDB, I specialize in transforming concepts into efficient, user-centric solutions.<br/>
  My journey in web development has been marked by a relentless pursuit of excellence and innovation. Let's connect and embark on a collaborative journey to craft something truly extraordinary together`,
};

export default function Home() {
	return (
		<section
			className={`w-full h-auto bg-base-100 rounded-md shadow-lg shadow-black/30 p-5 flex justify-start items-start flex-col gap-3 max-lg:mb-24`}
		>
			<HeaderComponent title="About Us" />
			<p className={`w-full h-auto text-sm font-mandali`}>
				I am <span className={`text-primary font-bold`}>Pawan Kumar</span>, a
				passionate{" "}
				<span className="text-primary font-bold">Full stack developer</span>,
				driven by the art of creating seamless digital experiences. With
				proficiency in both Frontend and Backend technologies, including
				React, Angular, Next.js, Nest.js, Strapi, and expertise in
				databases like PostgreSQL and MongoDB, I specialize in
				transforming concepts into efficient, user-centric solutions.
				<br />
				My journey in web development has been marked by a relentless
				pursuit of excellence and innovation. Let's connect and embark
				on a collaborative journey to craft something truly
				extraordinary together
			</p>
			<WhatIDoComponent />
			<WhatTechnologyUses />
		</section>
	);
}
