import { InfoCardProps } from "@/types/types";
import React from "react";

const InforCard = ({icons,label,text}:InfoCardProps) => {
	return (
		<div
			className={`w-full h-auto flex justify-start items-start gap-2 mt-3 overflow-hidden`}
		>
			<span className={`relative p-2 z-10 rounded bg-base-200 text-base-content border-gradient flex justify-center items-center`}>
				{icons as any}
			</span>
			<div className={`w-full flex justify-start items-start flex-col`}>
				<span className={`text-xs font-bold text-base-content font-mandali`}>
					{label}
				</span>
				<span
					className={`text-xs font-bold text-base-content text-ellipsis overflow-hidden font-mandali`}
				>
					{text}
				</span>
			</div>
		</div>
	);
};

export default InforCard;
