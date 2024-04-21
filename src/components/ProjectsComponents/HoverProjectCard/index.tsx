import { projectCardProps } from "@/types/types";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";
import { RiCloseCircleFill } from "react-icons/ri";
import { HiClock } from "react-icons/hi2";
import { BiSolidBadgeCheck } from "react-icons/bi";

const HoverProjectCard = ({
	title,
	description,
	github,
	link,
	img,
	setShow,
	isProgress,
}: projectCardProps) => {
	return (
		<div
			className={`w-full h-full fixed left-0 top-0 z-[999] backdrop-blur flex justify-center items-center max-sm:p-3`}
		>
			<div
				className={`relative w-96 max-sm:w-full h-auto p-5 mt-2 flex justify-start items-center flex-col gap-4 bg-base-200 transition-all duration-300 text-base-content rounded`}
			>
				<button
					className={`w-5 h-5 absolute -right-2 -top-2 rounded-full bg-white p-0`}
					onClick={() => {
						setShow && setShow(false);
					}}
				>
					<RiCloseCircleFill
						className={`w-full h-full text-red-600`}
					/>
				</button>
				<div
					className={`w-full aspect-video max-sm:aspect-auto h-auto rounded overflow-hidden`}
				>
					<Image
						src={img}
						alt="project-image"
						className={`w-full h-full object-cover hover:scale-105 transition-all duration-300`}
						placeholder="blur"
					/>
				</div>
				<span
					className={`w-full h-auto text-xl font-mandali font-bold relative after:absolute after:content-[''] after:-bottom-2 after:w-[calc(100%-100px)] max-sm:text-sm after:left-0 after:h-1 after:rounded after:bg-primary`}
				>
					{title}
				</span>
				<span className={`w-full h-auto text-sm font-mandali`}>
					{description}
				</span>
				<div
					className={`w-full h-auto flex justify-end gap-5 items-center font-mandali relative`}
				>
					{github !== "" && (
						<a
							className={`p-1 px-3 rounded bg-base-content text-base-300 text-sm font-bold flex justify-center items-center gap-2`}
							href={github}
						>
							<FaGithub className={`w-4 h-4`} />
							Github
						</a>
					)}
					{link !== "" && (
						<a
							className={`p-1 px-3 rounded bg-base-content text-base-300 text-sm font-bold flex justify-center items-center gap-2`}
							href={link}
						>
							<MdOutlinePreview className={`w-4 h-4`} />
							Live
						</a>
					)}

					<div
						className={`absolute left-0 bottom-0 w-5 h-5 rounded`}
					>
						{isProgress?<HiClock className={`w-full h-full text-yellow-400`} />:<BiSolidBadgeCheck className={`w-full h-full text-blue-500`} />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HoverProjectCard;
