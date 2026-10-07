import Link from 'next/link';
import countries from '@/data/countries';

export default function Home() {
	return (
		<>
			<h1>Страны</h1>
			<ul>
				{countries.map(country => (
					<li key={country.id}>
						<Link href={`/country/${country.id}`}>{country.name}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
