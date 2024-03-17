"use client";

import { ThemeProvider } from "@/ContextAPI/ThemeContextProvider";
import { Children } from "@/types/types";
import React from "react";


const ProvidersLayout = ({ children }: Children) => {
	return (
		<React.Fragment>
			<ThemeProvider>{children}</ThemeProvider>
		</React.Fragment>
	);
};

export default ProvidersLayout;
