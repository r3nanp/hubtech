import Link from 'next/link';

interface IProps {
	href: string;
	text: string;
}

export default function HeaderLink(props: IProps) {
	return (
		<Link href={props.href}>
			<a
				className="
					transition-colors
					duration-300
					cursor-pointer
					px-2
					py-1
					outline-none
					rounded-sm

					hover:bg-h-pink
					hover:text-white
					focus:bg-h-pink
					focus:text-white
				"
			>
				{props.text}
			</a>
		</Link>
	);
}
