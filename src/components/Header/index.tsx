import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.css';

const Header = () => {
	const menus = [
		{ text: 'Início', href: '/' },
		{ text: 'Creators', href: '/creators' },
		{ text: 'Discord', href: '/discord' },
	];

	const links = menus.map(menu => (
		<Link href={menu.href} key={menu.text}>
			<a className={styles.itemList}>{menu.text}</a>
		</Link>
	));

	return (
		<header className="flex justify-between items-center w-full px-12 py-6 bg-h-black fixed">
			<Image src="/img/logo.png" alt="HUB" width={132} height={51} />
			<nav className="flex space-x-8 text-xl text-white">{links}</nav>
			<div />
		</header>
	);
};

export default Header;
