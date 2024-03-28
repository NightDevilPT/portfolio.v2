import { projectCardProps } from "@/types/types";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";

export const 
ProjectCards = ({
	title,
	img,
	description,
	link,
	github,
}: projectCardProps) => {
	return (
		<div
			className={`w-full p-3 bg-base-300 rounded group overflow-hidden relative`}
		>
			<div className={`w-full aspect-video h-full rounded overflow-hidden`}>
				<Image
					src={img}
					alt="project-image"
					className={`w-full h-full object-cover`}
					placeholder="blur"
				/>
			</div>
			<div
				className={`w-full absolute h-auto left-0 -bottom-full group-hover:bottom-0 p-5 mt-2 flex justify-start items-center flex-col gap-3 bg-base-200 backdrop-blur transition-all duration-300 text-base-content`}
			>
				<span
					className={`w-full h-auto text-base font-mandali font-bold relative after:absolute after:content-[''] after:-bottom-1 after:w-[calc(100%-100px)] after:left-0 after:h-1 after:rounded after:bg-primary`}
				>
					{title}
				</span>
				<span
					className={`w-full h-auto text-xs font-mandali line-clamp-3`}
				>
					{description}
				</span>
				<div
					className={`w-full h-auto flex justify-end gap-5 items-center font-mandali`}
				>
					<a
						className={`p-1 px-3 rounded bg-base-content text-base-300 text-sm font-bold flex justify-center items-center gap-2`}
						href={github}
					>
						<FaGithub className={`w-4 h-4`} />
						Github
					</a>
					<a
						className={`p-1 px-3 rounded bg-base-content text-base-300 text-sm font-bold flex justify-center items-center gap-2`}
						href={link}
					>
						<MdOutlinePreview className={`w-4 h-4`} />
						Live
					</a>
				</div>
			</div>
		</div>
	);
};