'use client';

import {
	AtSymbolIcon,
	KeyIcon,
	ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';

export default function LoginForm() {
	const [errorMessage, formAction, isPending] = useActionState(
		authenticate,
		undefined
	);

	return (
		<form
			action={formAction}
			className='space-y-3 w-full max-w-screen-sm m-auto'>
			<div className='w-full max-w-screen-sm'>
				<div>
					<label
						className='text-sm sm:text-lg lg:text-xl label-text'
						htmlFor='email'>
						Email
					</label>
					<div className='relative'>
						<input
							className='peer block w-full border-2 border-beige-light py-[9px] pl-10 text-sm placeholder:text-gray-500 input focus:border-beige focus:outline-beige sm:text-base'
							id='email'
							type='email'
							name='email'
							placeholder='Enter your email address'
						/>
						<AtSymbolIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
					</div>
				</div>
				<div className='mt-4'>
					<label className='text-sm sm:text-lg lg:text-xl label-text' htmlFor='password'>
						Password
					</label>
					<div className='relative'>
						<input
							className='peer block w-full border-2 border-beige-light py-[9px] pl-10 text-sm placeholder:text-gray-500 input focus:border-beige focus:outline-beige sm:text-base'
							id='password'
							type='password'
							name='password'
							placeholder='Enter your password'
							minLength={6}
						/>
						<KeyIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
					</div>
				</div>
			</div>
			<div className='pt-2'>
				<button
					className='button w-full flex items-center py-0'
					aria-disabled={isPending}>
					<span className='w-full text-center peer py-2'>Log in</span>
					<ArrowRightIcon className='ml-auto h-5 w-5 text-white peer-hover:text-brown hover:text-brown' />
				</button>
			</div>
			<div
				className='flex h-8 items-end space-x-1'
				aria-live='polite'
				aria-atomic='true'>
				{errorMessage && (
					<>
						<ExclamationCircleIcon className='h-5 w-5 text-red' />
						<p className='text-sm text-red'>{errorMessage}</p>
					</>
				)}
			</div>
		</form>
	);
}
