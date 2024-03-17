import { IconType } from "react-icons";

export interface Children {
	children: React.ReactNode;
}

export enum Theme {
	Light = "light",
	Dark = "dark",
	Dracula = "dracula",
	Night = "night",
	Sunset = "sunset",
}

export interface InfoCardProps {
	icons:any;
	label:string;
	text:string;
}