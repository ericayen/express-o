/* This code block uses useActionState

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
			className='space-y-3 w-full max-w-md m-auto'>
			<div className='w-full'>
				<div>
					<label
						className='text-sm sm:text-lg lg:text-xl label-text'
						htmlFor='email'>
						Email
					</label>
					<div className='relative'>
						<input
							className='peer input'
							id='email'
							type='email'
							name='email'
							placeholder='Enter your email address'
						/>
						<AtSymbolIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
					</div>
				</div>
				<div className='mt-4'>
					<label
						className='text-sm sm:text-lg lg:text-xl label-text'
						htmlFor='password'>
						Password
					</label>
					<div className='relative'>
						<input
							className='peer input'
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
					<ArrowRightIcon className='ml-auto h-5 w-5 text-white peer-hover:text-brown hover:text-brown transform' />
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
*/

// This code block uses Yup with React Hook Form, keeping both for now until server is implemented
'use client';

import {
	AtSymbolIcon,
	KeyIcon,
	ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define Yup validation schema
const schema = yup.object().shape({
	email: yup
		.string()
		.email('Invalid email address')
		.required('Email is required'),
	password: yup
		.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password is required'),
});

export default function LoginForm() {
	// Initialize React Hook Form with Yup validation schema
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(schema),
	});

	// Function to handle form submission
	const onSubmit = async (data: any) => {
		// Handle authentication logic here
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='space-y-3 w-full max-w-md m-auto'>
			<div className='w-full'>
				<div>
					<label
						className='text-sm sm:text-lg lg:text-xl label-text'
						htmlFor='email'>
						Email
					</label>
					<div className='relative'>
						<input
							{...register('email')}
							className='peer input'
							id='email'
							type='email'
							name='email'
							placeholder='Enter your email address'
						/>
						<AtSymbolIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
					</div>
					{errors.email && (
						<div
							className='flex h-8 items-end space-x-1 justify-center'
							aria-live='polite'
							aria-atomic='true'>
							<ExclamationCircleIcon className='h-5 w-5 text-red' />
							<p className='text-sm text-red'>{errors.email.message}</p>
						</div>
					)}
				</div>
				<div className='mt-4'>
					<label
						className='text-sm sm:text-lg lg:text-xl label-text'
						htmlFor='password'>
						Password
					</label>
					<div className='relative'>
						<input
							{...register('password')}
							className='peer input'
							id='password'
							type='password'
							name='password'
							placeholder='Enter your password'
							minLength={6}
						/>
						<KeyIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
					</div>
				</div>
				{errors.password && (
					<div
						className='flex h-8 items-end space-x-1 justify-center'
						aria-live='polite'
						aria-atomic='true'>
						<ExclamationCircleIcon className='h-5 w-5 text-red' />
						<p className='text-sm text-red'>{errors.password.message}</p>
					</div>
				)}
			</div>
			<div className='pt-2'>
				<button
					className='button w-full flex items-center py-0'
					type='submit'
					disabled={isSubmitting}>
					<span className='w-full text-center peer py-2'>Log in</span>
					<ArrowRightIcon className='ml-auto h-5 w-5 text-white peer-hover:text-brown hover:text-brown transform' />
				</button>
			</div>
			<div
				className='flex h-8 items-end space-x-1'
				aria-live='polite'
				aria-atomic='true'>
				{/* Add logic for displaying error message later if needed */}
			</div>
			<p className='text-xs'>
				<span className='font-medium'>Please note:</span> new user registration
				is currently unavailable
			</p>
		</form>
	);
}
