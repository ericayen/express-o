'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './nav-links';
import clsx from 'clsx';

const logo = require('@/public/logo.png');

export default function Header() {
	const pathname = usePathname();
	return (
		<header className='drawer'>
			<input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content flex flex-col'>
				<nav className='navbar bg-white w-full lg:justify-end'>
					<div className='flex-none lg:hidden'>
						<label
							htmlFor='my-drawer-3'
							aria-label='open sidebar'
							className='btn btn-square btn-ghost hover:bg-beige-light'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								className='inline-block h-6 w-6 stroke-current'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h16'></path>
							</svg>
						</label>
					</div>
					<div className='mx-2 flex-1 px-2'>
						<Link href='/'>
							<Image
								src={logo}
								alt='coffee cup'
								className='inline animate-bounce lg:animate-none w-6 mr-1 my-0 sm:w-8 lg:w-10'
							/>
							<span className='font-semibold text-brown-dark text-sm lg:text-base align-middle'>
								Express-o
							</span>
						</Link>
					</div>

					{/* Desktop Nav*/}
					<div className='hidden flex-none lg:block'>
						<ul className='menu-horizontal'>
							<NavLinks />
						</ul>
					</div>
				</nav>
			</div>

			{/* Sidebar */}
			<nav className='drawer-side z-50'>
				<label
					htmlFor='my-drawer-3'
					aria-label='close sidebar'
					className='drawer-overlay'></label>
				<ul className='bg-white min-h-full w-48 p-4 relative'>
					<NavLinks />
				</ul>
			</nav>
		</header>
	);
}
