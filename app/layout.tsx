import type { Metadata } from 'next';
import Header from './ui/header';
import Footer from './ui/footer';
import './globals.css';

export const metadata: Metadata = {
	title: 'Express-o',
	description:
		'Coffee app for aspiring coffee lovers, to help you learn about the wonderful world of coffee',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='font-ms'>
				<Header /> 
				{children}
				<Footer />
			</body>
		</html>
	);
}
