import LoginForm from '@/app/ui/login-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sign In',
};

export default function LoginPage() {
	return (
		<main>
			<h1>
				<span className='text-brown'>Sign </span>
				<span className='font-semibold'>In</span>
			</h1>
			<LoginForm />
		</main>
	);
}
