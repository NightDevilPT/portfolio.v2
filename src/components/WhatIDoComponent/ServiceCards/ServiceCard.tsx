interface IProps {
	title: string;
	icons: any;
	description: string;
}
export const ServiceCard = ({ icons, title, description }: IProps) => {
	return (
		<div
			className={`w-full p-3 h-auto rounded bg-base-200 flex justify-start items-start flex-col gap-2`}
		>
			{icons}
			<div
				className={`flex-1 h-auto flex justify-start items-start flex-col gap-3`}
			>
				<h1 className={`max-sm:text-base text-xl font-mandali font-bold relative after:absolute after:content-[''] after:-bottom-1 after:left-0 after:w-20 after:h-1 after:rounded after:bg-primary`}>
					{title}
				</h1>
				<span className={`text-sm max-sm:text-xs font-mandali`}>
					{description}
				</span>
			</div>
		</div>
	);
};