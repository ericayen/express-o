'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const logo = require('@/public/logo.png');

const links = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Coffee', href: '/coffee' },
	{ name: 'Beans', href: '/beans' },
	{ name: 'Quiz', href: '/quiz' },
];

export default function NavLinks() {
	const pathname = usePathname();
	return (
		<>
			{links.map((link) => {
				const isActive =
					link.href === '/'
						? pathname === link.href
						: pathname.includes(link.href);
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'leading-loose rounded-full p-2 sm:p-4 font-medium text-xs md:text-sm lg:text-base hover:bg-beige-light',
							isActive
								? 'underline underline-offset-8 text-brown-dark'
								: 'text-brown'
						)}>
						<Image
							src={logo}
							alt='coffee cup logo'
							className={
								isActive
									? 'inline w-4 animate-bounce mx-0.5 sm:w-6 lg:w-8'
									: 'hidden'
							}
						/>
						{link.name}
					</Link>
				);
			})}
		</>
	);
}
