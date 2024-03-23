"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface navBarProps {
	icons: any;
	text: string;
	isActive: string;
}

const NavbarCard = ({ icons, text, isActive }: navBarProps) => {
	const pathParams = usePathname();
	return (
		<Link href={`/${isActive}`} className={`w-full`}>
			<button
				className={`flex justify-center items-center flex-col w-full p-1 py-2 max-lg:px-3 max-lg:py-2 rounded ${
					pathParams.split("/")[1] === isActive
						? "bg-primary text-primary-content"
						: "bg-base-100 max-lg:bg-transparent hover:bg-base-200 transition-all duration-300 text-base-content max-lg:hover:bg-base-content max-lg:hover:text-base-300"
				}`}
			>
				{icons}
				<span className={`text-xs font-bold max-sm:hidden font-mandali`}>
					{text}
				</span>
			</button>
		</Link>
	);
};

export default NavbarCard;
