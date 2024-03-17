import React from "react";
import { FaHome, FaAddressCard } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { FaDiagramProject } from "react-icons/fa6";
import NavbarCard from "./NavComp";

const navBars = [
	{
		text: "Home",
		icons: <FaHome className={`w-5 h-5`} />,
		isActive: "",
	},
	{
		text: "Resume",
		icons: <FaAddressCard className={`w-5 h-5`} />,
		isActive: "resume",
	},
	{
		text: "Projects",
		icons: <FaDiagramProject className={`w-5 h-5`} />,
		isActive: "projects",
	},
	{
		text: "Contact",
		icons: <BiSolidContact className={`w-5 h-5`} />,
		isActive: "contact",
	},
];

const NavBarComponent = () => {
	return (
		<div
			className={`col-span-1 max-xl:col-span-2 h-auto max-lg:fixed max-lg:bottom-5 max-lg:z-50`}
		>
			<nav
				className={`w-full h-auto flex justify-center items-center flex-col max-lg:flex-row gap-2 p-2 bg-base-100 max-lg:bg-transparent max-lg:backdrop-blur rounded shadow-lg shadow-black/30`}
			>
				{navBars?.map((items: any, index: number) => {
					return (
						<NavbarCard
							icons={items.icons}
							text={items.text}
							isActive={items.isActive}
						/>
					);
				})}
			</nav>
		</div>
	);
};

export default NavBarComponent;
