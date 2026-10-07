export const platforms = [
  {
    id: "pc",
    name: "PC",
    manufacturer: "Разные производители",
    year: 1981,
    tint: "#5e5ce6",
    description:
      "Персональный компьютер — самая открытая игровая платформа. Игры продаются в Steam, Epic Games Store и GOG, а железо можно собрать и улучшать под себя.",
    games: [
      {
        id: "baldurs-gate-3",
        title: "Baldur's Gate 3",
        year: 2023,
        developer: "Larian Studios",
        genre: "RPG",
        rating: 96,
        image: "/games/baldurs-gate-3.jpg",
        description:
          "Ролевая игра по правилам Dungeons & Dragons. Вы собираете отряд, путешествуете по Забытым королевствам и принимаете решения, которые меняют историю. Пошаговые бои, огромная свобода и кооператив до четырёх игроков.",
      },
      {
        id: "the-witcher-3",
        title: "The Witcher 3: Wild Hunt",
        year: 2015,
        developer: "CD Projekt Red",
        genre: "RPG",
        rating: 93,
        image: "/games/the-witcher-3.jpg",
        description:
          "Ведьмак Геральт из Ривии ищет свою приёмную дочь Цири, за которой охотится Дикая Охота. Огромный открытый мир, сотни заданий и одна из лучших историй в играх.",
      },
      {
        id: "stardew-valley",
        title: "Stardew Valley",
        year: 2016,
        developer: "ConcernedApe",
        genre: "Симулятор фермы",
        rating: 89,
        image: "/games/stardew-valley.jpg",
        description:
          "Вы получаете в наследство старую ферму и переезжаете в маленький городок. Выращивайте урожай, разводите животных, рыбачьте, исследуйте шахты и заводите друзей среди жителей.",
      },
      {
        id: "hollow-knight",
        title: "Hollow Knight",
        year: 2017,
        developer: "Team Cherry",
        genre: "Метроидвания",
        rating: 87,
        image: "/games/hollow-knight.jpg",
        description:
          "Маленький рыцарь исследует заброшенное подземное королевство насекомых Халлоунест. Сложные бои, рисованная графика и большой связанный мир, полный секретов.",
      },
    ],
  },
  {
    id: "playstation-5",
    name: "PlayStation 5",
    manufacturer: "Sony",
    year: 2020,
    tint: "#0070d1",
    description:
      "Консоль Sony девятого поколения. Быстрый SSD почти убирает загрузки, а геймпад DualSense с адаптивными курками и тактильной отдачей делает игры ощутимее.",
    games: [
      {
        id: "elden-ring",
        title: "Elden Ring",
        year: 2022,
        developer: "FromSoftware",
        genre: "Экшен-RPG",
        rating: 96,
        image: "/games/elden-ring.jpg",
        description:
          "Открытый мир Междуземья, созданный FromSoftware вместе с Джорджем Мартином. Сложные сражения с боссами, свобода исследования и множество способов построить своего персонажа.",
      },
      {
        id: "god-of-war-ragnarok",
        title: "God of War Ragnarök",
        year: 2022,
        developer: "Santa Monica Studio",
        genre: "Экшен",
        rating: 94,
        image: "/games/god-of-war-ragnarok.jpg",
        description:
          "Кратос и его сын Атрей путешествуют по девяти мирам скандинавской мифологии, пока приближается Рагнарёк. Зрелищные бои и сильная история об отцах и детях.",
      },
      {
        id: "astro-bot",
        title: "Astro Bot",
        year: 2024,
        developer: "Team Asobi",
        genre: "Платформер",
        rating: 94,
        image: "/games/astro-bot.jpg",
        description:
          "Весёлый платформер про маленького робота, который собирает свою команду по всей галактике. Игра раскрывает все возможности геймпада DualSense.",
      },
      {
        id: "spider-man-2",
        title: "Marvel's Spider-Man 2",
        year: 2023,
        developer: "Insomniac Games",
        genre: "Экшен",
        rating: 90,
        image: "/games/spider-man-2.jpg",
        description:
          "Питер Паркер и Майлз Моралес защищают Нью-Йорк от Крейвена-охотника и симбиота Венома. Полёты на паутине по огромному городу стали ещё быстрее.",
      },
    ],
  },
  {
    id: "nintendo-switch",
    name: "Nintendo Switch",
    manufacturer: "Nintendo",
    year: 2017,
    tint: "#e60012",
    description:
      "Гибридная консоль: её можно подключить к телевизору или взять с собой как портативную. Съёмные контроллеры Joy-Con позволяют играть вдвоём где угодно.",
    games: [
      {
        id: "zelda-breath-of-the-wild",
        title: "The Legend of Zelda: Breath of the Wild",
        year: 2017,
        developer: "Nintendo EPD",
        genre: "Приключения",
        rating: 97,
        image: "/games/zelda-breath-of-the-wild.jpg",
        description:
          "Линк просыпается после столетнего сна и отправляется спасать Хайрул. Можно идти куда угодно с самого начала: залезать на горы, планировать с обрывов и решать задачи как хочется.",
      },
      {
        id: "super-mario-odyssey",
        title: "Super Mario Odyssey",
        year: 2017,
        developer: "Nintendo EPD",
        genre: "Платформер",
        rating: 97,
        image: "/games/super-mario-odyssey.jpg",
        description:
          "Марио путешествует по разным королевствам вместе с волшебной кепкой Кэппи, которая умеет вселяться во врагов и предметы. Сотни лун для сбора и много секретов.",
      },
      {
        id: "super-smash-bros-ultimate",
        title: "Super Smash Bros. Ultimate",
        year: 2018,
        developer: "Bandai Namco Studios, Sora Ltd.",
        genre: "Файтинг",
        rating: 93,
        image: "/games/super-smash-bros-ultimate.jpg",
        description:
          "Самый большой кроссовер в истории игр: Марио, Линк, Пикачу, Соник, Солид Снейк и ещё более 80 героев сражаются на одной арене. Задача — не снять здоровье, а вытолкнуть соперника за пределы экрана. Отлично подходит для игры с друзьями.",
      },
      {
        id: "animal-crossing",
        title: "Animal Crossing: New Horizons",
        year: 2020,
        developer: "Nintendo EPD",
        genre: "Симулятор жизни",
        rating: 90,
        image: "/games/animal-crossing.jpg",
        description:
          "Вы переезжаете на необитаемый остров и обустраиваете его по своему вкусу. Ловите рыбу и насекомых, украшайте дом и дружите с жителями-животными.",
      },
    ],
  },
  {
    id: "xbox-series",
    name: "Xbox Series X|S",
    manufacturer: "Microsoft",
    year: 2020,
    tint: "#107c10",
    description:
      "Консоли Microsoft девятого поколения. Подписка Game Pass даёт доступ к сотням игр, а функция Quick Resume позволяет мгновенно переключаться между ними.",
    games: [
      {
        id: "forza-horizon-5",
        title: "Forza Horizon 5",
        year: 2021,
        developer: "Playground Games",
        genre: "Гонки",
        rating: 92,
        image: "/games/forza-horizon-5.jpg",
        description:
          "Гоночный фестиваль в открытом мире Мексики: джунгли, пустыни, вулкан и города. Сотни реальных автомобилей и постоянная смена сезонов.",
      },
      {
        id: "hi-fi-rush",
        title: "Hi-Fi Rush",
        year: 2023,
        developer: "Tango Gameworks",
        genre: "Ритм-экшен",
        rating: 87,
        image: "/games/hi-fi-rush.jpg",
        description:
          "Яркий экшен, в котором все удары, прыжки и даже окружение двигаются в такт музыке. Начинающий рокер Чай бросает вызов злой корпорации.",
      },
      {
        id: "halo-infinite",
        title: "Halo Infinite",
        year: 2021,
        developer: "343 Industries",
        genre: "Шутер",
        rating: 87,
        image: "/games/halo-infinite.jpg",
        description:
          "Мастер Чиф возвращается, чтобы сразиться с изгнанниками на кольце Зета Halo. Первая полуоткрытая кампания в серии и бесплатный сетевой режим.",
      },
    ],
  },
];

export function getAllGames() {
  return platforms.flatMap((platform) =>
    platform.games.map((game) => ({
      ...game,
      platformId: platform.id,
      platformName: platform.name,
    }))
  );
}

export function getPlatform(platformId) {
  return platforms.find((platform) => platform.id === platformId);
}

export function getGame(platformId, gameId) {
  return getPlatform(platformId)?.games.find((game) => game.id === gameId);
}

export function getAverageRating(games) {
  const sum = games.reduce((total, game) => total + game.rating, 0);
  return Math.round(sum / games.length);
}

// Способы сортировки для главной страницы.
export const sorts = {
  rating: { label: "По оценке", compare: (a, b) => b.rating - a.rating },
  year: { label: "Сначала новые", compare: (a, b) => b.year - a.year },
  title: {
    label: "По названию",
    compare: (a, b) => a.title.localeCompare(b.title),
  },
};
