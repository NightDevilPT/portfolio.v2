"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface IProps {
	children: ReactNode;
	title: string;
	height: string;
	icons: any;
	showCollapse: boolean;
}

const ServiceCard = ({
	children,
	title,
	height,
	icons,
	showCollapse,
}: IProps) => {
	const [show, setShow] = useState<boolean>(false);
	// const showRef = useRef<HTMLDivElement | null>(null);
	// const isComponentMounted = useRef(true);

	// useOutsideClick(showRef, () => {
	// 	if (show) {
	// 		setShow(false);
	// 	}
	// });
	return (
		<div
			className={`w-full ${
				show ? height : `${showCollapse ? "h-12" : height}`
			} flex justify-start items-start flex-col transition-all duration-300 overflow-hidden bg-base-200 rounded-md cursor-pointer`}
		>
			<button
				className="w-full h-12 min-h-12 flex justify-start items-center gap-3 px-3 relative hover:text-primary"
				onClick={() => {
					showCollapse && setShow(!show);
				}}
			>
				{icons}
				<h1 className="font-bold text-base">{title}</h1>
				{showCollapse && (
					<IoIosArrowDown
						className={`w-5 h-5 absolute right-3 ${
							show ? "rotate-180" : "rotate-0"
						} transition-all duration-300`}
					/>
				)}
			</button>
			{children}
		</div>
	);
};

export default ServiceCard;
