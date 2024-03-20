import { IconType } from "react-icons";

export interface Children {
	children: React.ReactNode;
}

export enum Theme {
	Light = "light",
	Dark = "dark",
	Cupcake = "cupcake",
	Bumblebee = "bumblebee",
	Emerald = "emerald",
	Corporate = "corporate",
	Synthwave = "synthwave",
	Retro = "retro",
	Cyberpunk = "cyberpunk",
	Valentine = "valentine",
	Halloween = "halloween",
	Garden = "garden",
	Forest = "forest",
	Aqua = "aqua",
	Lofi = "lofi",
	Pastel = "pastel",
	Fantasy = "fantasy",
	Wireframe = "wireframe",
	Black = "black",
	Luxury = "luxury",
	Dracula = "dracula",
	CMYK = "cmyk",
	Autumn = "autumn",
	Business = "business",
	Acid = "acid",
	Lemonade = "lemonade",
	Night = "night",
	Coffee = "coffee",
	Winter = "winter",
	Dim = "dim",
	Nord = "nord",
	Sunset = "sunset"
  }
  

export interface InfoCardProps {
	icons:any;
	label:string;
	text:string;
}

export interface educationProps {
	title?:string;
	start?:string;
	end?:string;
	description?:string;
	grade?:number;
	name?:string;
	percentage?:number;
	isLast?:boolean;
}

export interface experienceProps {
	title?:string;
	start?:string;
	end?:string;
	description?:string;
	name?:string;
	isLast?:boolean;
}

export interface resumeProps {
	title:string;
	data:educationProps[] | experienceProps[]
}