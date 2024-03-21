import { contactCardProps } from "@/types/types";

export const ContactCards = ({ icons, title, text, href }: contactCardProps) => {
	return (
		<div className="w-full h-auto flex justify-center items-center flex-col gap-1 font-mandali bg-base-300 text-base-content p-3 rounded">
			{icons}
			<h4 className="text-base font-bold">{title}</h4>
			<p className="text-xs">{text}</p>
			<a
				className={`w-auto h-auto text-sm mt-1 font-bold p-1 px-3 rounded bg-base-100 text-base-content transition-all duration-300`}
				href={href}
			>
				Send Message
			</a>
		</div>
	);
};
