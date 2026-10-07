import './globals.css';

export const metadata = {
	title: 'Страны и города',
	description: 'Справочник стран и их городов',
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
}
