"use client";

import { useTheme } from "@/ContextAPI/ThemeContextProvider";
import { Theme } from "@/types/types";
import React from "react";

interface IProps {
	title: string;
}

const HeaderComponent = ({ title }: IProps) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={`w-full h-auto`}>
			<div className="w-full flex justify-between items-center gap-5 mb-3 px-2">
				<span className={`text-2xl font-bold font-mandali`}>
					{title}
				</span>
			</div>
			<div className={`w-full h-1 rounded bg-base-200`}></div>
		</div>
	);
};

export default HeaderComponent;
