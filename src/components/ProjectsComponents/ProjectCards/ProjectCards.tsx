import { projectCardProps } from "@/types/types";
import Image from "next/image";

export const ProjectCards = ({ img }: projectCardProps) => {
	return (
		<div
			className={`w-full aspect-video max-sm:aspect-auto h-auto rounded overflow-hidden hover:shadow-lg hover:shadow-slate-950/30 transition-all duration-300 group`}
		>
			<Image
				src={img}
				alt="project-image"
				className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-300`}
				placeholder="blur"
			/>
		</div>
	);
};
