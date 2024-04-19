import React from "react";
import { IoIosMailOpen, IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";
import { contactCardProps } from "@/types/types";
import { ContactCards } from "./ContactCard";

const contactData = [
	{
		title: "Mail Me",
		text: "pawankumar080399@gmail.com",
		href: "mailto:pawankumar080399@gmail.com",
		icons: <IoIosMailOpen className="w-6 h-6" />,
	},
	{
		title: "Whatsapp",
		text: "8586027728",
		href: "https://m.me/nightdevil8https://api.whatsapp.com/send?phone=8586027728",
		icons: <IoLogoWhatsapp className="w-6 h-6" />,
	},
	{
		title: "Messenger",
		text: "nightdevil8",
		href: "https://m.me/nightdevil8",
		icons: <FaFacebookMessenger className="w-6 h-6" />,
	},
];

const ContactUsComponent = () => {
	return (
		<div className={`w-full h-auto px-2`}>
			<span className={`w-full h-auto text-sm font-mandali`}>
				Feel free to get in touch with me. I am always open to
				discussing new projects, creative ideas or opportunities to be
				part of your visions.
			</span>
			<div
				className={`w-full h-auto grid grid-cols-1 gap-5 mt-5
			`}
			>
				<div className={`w-full h-auto grid grid-cols-10 max-xl:grid-cols-1 gap-5`}>
					<div
						className={`w-full gap-3 h-auto col-span-4 max-xl:col-span-full grid grid-cols-[repeat(auto-fit,_minmax(280px,1fr))]`}
					>
						{contactData?.map(
							(
								{ icons, title, text, href }: contactCardProps,
								index: number
							) => (
								<ContactCards
									key={title + "-" + index}
									icons={icons}
									title={title}
									href={href}
									text={text}
								/>
							)
						)}
					</div>
					<div
						className={`w-full h-auto col-span-6 max-xl:col-span-full flex justify-start items-start gap-3 flex-col`}
					>
						<ContactForm />
					</div>
				</div>
				{/* <div className={`w-full h-auto mt-3`}>
					<div className="mapouter">
						<div className="gmap_canvas">
							<iframe
								className="gmap_iframe"
								width="100%"
								src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=sonia vihar&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
							></iframe>
							<a href="https://strandsgame.net/">Strands</a>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default ContactUsComponent;

export const ContactForm = () => {
	return (
		<React.Fragment>
			<label className="input input-bordered flex items-center gap-2 w-full">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					className="w-4 h-4 opacity-70"
				>
					<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
					<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
				</svg>
				<input type="text" className="grow" placeholder="Email" />
			</label>
			<label className="input input-bordered flex items-center gap-2 w-full">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					className="w-4 h-4 opacity-70"
				>
					<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
				</svg>
				<input type="text" className="grow" placeholder="Username" />
			</label>
			<label className={`w-full`}>
				<textarea
					className="textarea textarea-bordered w-full h-24"
					placeholder="Bio"
				></textarea>
			</label>
			<label className="w-full h-auto flex justify-end items-end">
				<button className={`w-full h-auto text-base font-bold p-3 px-3 rounded border-[2px] bg-base-content text-base-300 transition-all duration-300`}>Submit</button>
			</label>
		</React.Fragment>
	);
};
