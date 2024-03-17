import HeaderComponent from "@/components/HeaderComponent";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Resume",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div
			className={`w-full h-full min-h-75 bg-base-100 rounded-md shadow-lg shadow-black/30 p-5`}
		>
			<HeaderComponent title="Resume" />
			{children}
		</div>
	);
}
