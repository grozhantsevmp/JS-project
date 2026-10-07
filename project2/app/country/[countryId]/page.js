import Link from 'next/link';
import { notFound } from 'next/navigation';
import countries, { getCountry } from '@/data/countries';

export function generateStaticParams() {
	return countries.map(country => ({ countryId: country.id }));
}

export default async function CountryPage({ params }) {
	const { countryId } = await params;
	const country = getCountry(countryId);

	if (!country) notFound();

	return (
		<>
			<p><Link href="/">← Все страны</Link></p>
			<h1>{country.name}</h1>
			<ul>
				<li>Язык: {country.language}</li>
				<li>Площадь: {country.area.toLocaleString('ru-RU')} км²</li>
				<li>Население: {country.population.toLocaleString('ru-RU')} чел.</li>
			</ul>

			<h2>Города</h2>
			<ul>
				{country.cities.map(city => (
					<li key={city.id}>
						<Link href={`/country/${country.id}/${city.id}`}>{city.name}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
