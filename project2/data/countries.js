const countries = [
	{
		id: 'russia',
		name: 'Россия',
		language: 'русский',
		area: 17098246,
		population: 146150789,
		cities: [
			{ id: 'moscow', name: 'Москва', area: 2561, population: 13149803, founded: 1147 },
			{ id: 'saint-petersburg', name: 'Санкт-Петербург', area: 1439, population: 5600044, founded: 1703 },
			{ id: 'kazan', name: 'Казань', area: 425, population: 1318604, founded: 1005 },
		],
	},
	{
		id: 'france',
		name: 'Франция',
		language: 'французский',
		area: 643801,
		population: 68373433,
		cities: [
			{ id: 'paris', name: 'Париж', area: 105, population: 2102650, founded: -259 },
			{ id: 'marseille', name: 'Марсель', area: 241, population: 873076, founded: -600 },
			{ id: 'lyon', name: 'Лион', area: 48, population: 522250, founded: -43 },
		],
	},
	{
		id: 'germany',
		name: 'Германия',
		language: 'немецкий',
		area: 357592,
		population: 84482267,
		cities: [
			{ id: 'berlin', name: 'Берлин', area: 892, population: 3755251, founded: 1237 },
			{ id: 'hamburg', name: 'Гамбург', area: 755, population: 1910160, founded: 808 },
			{ id: 'munich', name: 'Мюнхен', area: 311, population: 1512491, founded: 1158 },
		],
	},
	{
		id: 'japan',
		name: 'Япония',
		language: 'японский',
		area: 377975,
		population: 124516650,
		cities: [
			{ id: 'tokyo', name: 'Токио', area: 2194, population: 14094034, founded: 1457 },
			{ id: 'osaka', name: 'Осака', area: 225, population: 2752412, founded: 645 },
			{ id: 'kyoto', name: 'Киото', area: 828, population: 1464890, founded: 794 },
		],
	},
];

export default countries;

export function getCountry(countryId) {
	return countries.find(country => country.id === countryId);
}

export function getCity(countryId, cityId) {
	return getCountry(countryId)?.cities.find(city => city.id === cityId);
}
