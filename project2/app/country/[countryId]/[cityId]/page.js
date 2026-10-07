import Link from 'next/link';
import { notFound } from 'next/navigation';
import countries, { getCountry, getCity } from '@/data/countries';

export function generateStaticParams() {
	return countries.flatMap(country =>
		country.cities.map(city => ({ countryId: country.id, cityId: city.id }))
	);
}

function formatYear(year) {
	return year < 0 ? `${-year} г. до н. э.` : `${year} г.`;
}

export default async function CityPage({ params }) {
	const { countryId, cityId } = await params;
	const country = getCountry(countryId);
	const city = getCity(countryId, cityId);

	if (!city) notFound();

	return (
		<>
			<h1>{city.name}</h1>
			<ul>
				<li>Площадь: {city.area.toLocaleString('ru-RU')} км²</li>
				<li>Население: {city.population.toLocaleString('ru-RU')} чел.</li>
				<li>Год основания: {formatYear(city.founded)}</li>
			</ul>
			<p>
				Страна: <Link href={`/country/${country.id}`}>{country.name}</Link>
			</p>
		</>
	);
}
