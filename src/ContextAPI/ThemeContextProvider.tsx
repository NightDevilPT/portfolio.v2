// themes.ts

import { Children, Theme } from "@/types/types";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
	theme: Theme;
	toggleTheme: (themeName: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
	theme: Theme.Dracula,
	toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: Children) => {
	const [theme, setTheme] = useState<Theme>(Theme.Dark);

	const toggleTheme = (themeName: Theme) => {
		console.log(themeName,"@@@@")
		setTheme(themeName ? themeName : Theme.Dracula);
		window.localStorage.setItem(
			"theme",
			themeName ? themeName : Theme.Dracula
		);
		document.documentElement.setAttribute(
			"data-theme",
			themeName ? themeName : Theme.Dracula
		);
	};

	useEffect(()=>{toggleTheme(Theme.Dark)},[])

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
