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
			{links.map((link, index) => {
				const isActive =
					link.href === '/'
						? pathname === link.href
						: pathname.includes(link.href);
				return (
					<li
						className={clsx(
							'leading-loose rounded-box font-medium text-xs md:text-sm lg:text-base hover:bg-beige-light inline-flex lg:inline-block w-full lg:w-fit',
							isActive
								? 'underline underline-offset-8 text-brown-dark'
								: 'text-brown'
						)}
						key={index}>
						<Link
							href={link.href}
							className='leading-loose w-full p-4 hover:bg-beige-light rounded-box'>
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
					</li>
				);
			})}
		</>
	);
}
