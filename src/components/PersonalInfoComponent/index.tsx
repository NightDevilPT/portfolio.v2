import Image from "next/image";
import React from "react";

import avtar from "../../assets/avtar.jpg";

import { MdEmail } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";
import { FaCalendarAlt, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaMapLocationDot,FaSquareFacebook,FaYoutube } from "react-icons/fa6";
import InforCard from "./InfoCard";

const personalInformation = {
	name: "Pawan Kumar",
	profession: "Full Stack Developer",
	description:"Experienced full-stack developer specializing in scalable solutions.",
	information: [
		{
			icons: <MdEmail className={`w-6 h-6 min-w-6`} />,
			label: "Email *",
			text: "pawankumar080399@gmail.com",
		},
		{
			icons: <BsPhoneFill className={`w-6 h-6 min-w-6`} />,
			label: "Phone No *",
			text: "8586027728, 9540079162",
		},
		{
			icons: <FaCalendarAlt className={`w-6 h-6 min-w-6`} />,
			label: "Date Of Birth *",
			text: "March 08, 1999",
		},
		{
			icons: <FaMapLocationDot className={`w-6 h-6 min-w-6`} />,
			label: "Address *",
			text: "Sonia Vihar, Delhi - 110094",
		},
	],
};

const PersonalInformationComponent = () => {
	return (
		<section
			className={`relative left-0 max-lg:relative max-lg:top-0 col-span-3 h-auto max-lg:w-full max-lg:col-span-full`}
		>
			<div
				className={`sticky top-0 w-full h-auto flex justify-center items-center flex-col gap-4 p-3 bg-base-100 rounded shadow-lg shadow-black/30`}
			>
				{/* -------[ Avtar Intro Frame ]------ */}
				<div className={`w-full flex justify-center items-center flex-col gap-3 max-lg:flex-row max-lg:items-start max-lg:justify-start max-[500px]:flex-col max-[500px]:justify-center max-[500px]:items-center`}>
					<div
						className={`w-28 max-sm:min-w-24 rounded-md overflow-hidden p-2 border-2 border-base-content`}
					>
						<Image
							src={avtar}
							className={`rounded`}
							alt="profile"
						/>
					</div>
					<div
						className={`w-full max-lg:w-auto h-auto text-center flex justify-center items-center max-lg:items-start max-lg:justify-start gap-1 flex-col max-[500px]:items-center`}
					>
						<span className="text-xl font-mandali font-bold text-base-content">
							{personalInformation.name}
						</span>
						<span
							className={`px-4 py-1 text-xs font-bold font-mandali bg-base-300 text-base-content rounded`}
						>
							{personalInformation.profession}
						</span>
						<span className="text-xs font-mandali font-bold text-base-content text-center max-lg:text-left max-[500px]:text-center">
							{personalInformation.description}
						</span>
					</div>
				</div>

				{/* -------[ Divider ]------ */}
				<div className={`w-full h-[2px] rounded bg-base-300`}/>

				{/* -------[ Contact Frame ]------ */}
				<div
					className={`w-full h-auto grid grid-cols-[repeat(auto-fit,_minmax(200px,1fr))] max-lg:grid-cols-[repeat(auto-fit,_minmax(320px,1fr))] gap-3 line-clamp-1 overflow-hidden`}
				>
					{personalInformation?.information?.map(
						(items: any, index: number) => (
							<InforCard
								icons={items.icons}
								label={items.label}
								text={items.text}
								key={index + "-" + items.text}
							/>
						)
					)}
				</div>
				
				{/* -------[ Divider ]------ */}
				<div className={`w-full h-[2px] rounded bg-base-300`}/>

				{/* -------[ Social Frame ]------ */}
				<div className={`w-full h-auto flex justify-center items-center gap-3`}>
					<a href="https://www.facebook.com/nightdevil8" className={`text-base-content hover:text-primary transition-all duration-300`}>
						<FaSquareFacebook className={`w-5 h-5`} />
					</a>
					<a href="https://www.instagram.com/nightdevil_pt?igshid=ZDdkNTZiNTM=" className={`text-base-content hover:text-primary transition-all duration-300`}>
						<RiInstagramFill className={`w-5 h-5`} />
					</a>
					<a href="https://www.linkedin.com/in/pawan-kumar-685a21243" className={`text-base-content hover:text-primary transition-all duration-300`}>
						<FaLinkedin className={`w-5 h-5`} />
					</a>
					<a href="https://www.youtube.com/@nightdevilpt" className={`text-base-content hover:text-primary transition-all duration-300`}>
						<FaYoutube className={`w-5 h-5`} />
					</a>
					<a href="https://github.com/NightDevilPT" className={`text-base-content hover:text-primary transition-all duration-300`}>
						<FaGithubSquare className={`w-5 h-5`} />
					</a>
				</div>
			</div>
		</section>
	);
};

export default PersonalInformationComponent;
