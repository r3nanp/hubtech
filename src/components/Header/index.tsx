import Image from 'next/image';
import HeaderLink from './HeaderLink';

const Header = () => {
	const menus = [
		{ text: 'Início', href: '/' },
		{ text: 'Creators', href: '/creators' },
		{ text: 'Discord', href: '/discord' },
		{
			text: 'Seja Creator',
			href: '/seja-creator',
		},
	];

	const links = menus.map(menu => <HeaderLink key={menu.text} {...menu} />);

	return (
		<header
			className="
				grid
				grid-cols-header-sm
				md:grid-cols-header
				place-items-center
				items-center
				h-20
				w-full
				px-4
				md:px-12
				py-6
				bg-h-black
				fixed
			"
		>
			<Image
				src="/img/logo.png"
				alt="HUB"
				layout="intrinsic"
				width={132}
				height={51}
			/>
			<nav className="flex ml-2 md:ml-0 space-x-2 md:space-x-6 text-base md:text-xl text-white">
				{links}
			</nav>
			<div />
		</header>
	);
};

export default Header;
