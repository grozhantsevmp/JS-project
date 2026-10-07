export const catalog = [
  {
    id: "audio",
    title: "Аудио",
    products: [
      {
        id: "sony-wh-1000xm4",
        name: "Sony WH-1000XM4",
        price: 24990,
        image: "/products/sony-wh-1000xm4.jpg",
        description:
          "Одни из самых популярных полноразмерных наушников с активным шумоподавлением. Система Dual Noise Sensor подстраивает шумоподавление под окружение, а функция Speak-to-Chat сама ставит музыку на паузу, когда вы начинаете говорить. Поддерживают подключение к двум устройствам одновременно и кодек LDAC для звука высокого разрешения.",
        specs: [
          { name: "Тип", value: "Полноразмерные, закрытые" },
          { name: "Время работы", value: "до 30 часов с шумоподавлением" },
          { name: "Bluetooth", value: "5.0, LDAC" },
          { name: "Вес", value: "254 г" },
        ],
      },
      {
        id: "airpods-pro-2",
        name: "Apple AirPods Pro 2",
        price: 24990,
        image: "/products/airpods-pro-2.jpg",
        description:
          "Беспроводные наушники Apple с чипом H2, активным шумоподавлением и адаптивным режимом прозрачности. Пространственное аудио с отслеживанием движений головы создаёт эффект объёмного звука. Мгновенно подключаются к iPhone, iPad и Mac, а зарядный футляр поддерживает MagSafe.",
        specs: [
          { name: "Тип", value: "Внутриканальные, TWS" },
          { name: "Время работы", value: "до 6 часов, до 30 часов с футляром" },
          { name: "Защита", value: "IP54" },
          { name: "Чип", value: "Apple H2" },
        ],
      },
      {
        id: "sony-wf-1000xm4",
        name: "Sony WF-1000XM4",
        price: 19990,
        image: "/products/sony-wf-1000xm4.jpg",
        description:
          "Флагманские беспроводные наушники-вкладыши Sony с процессором шумоподавления V1. Поддерживают кодек LDAC и технологию DSEE Extreme, которая восстанавливает детали сжатой музыки. Компактный футляр с беспроводной зарядкой.",
        specs: [
          { name: "Тип", value: "Внутриканальные, TWS" },
          { name: "Время работы", value: "до 8 часов, до 24 часов с футляром" },
          { name: "Защита", value: "IPX4" },
          { name: "Вес наушника", value: "7,3 г" },
        ],
      },
      {
        id: "jbl-flip-5",
        name: "JBL Flip 5",
        price: 9990,
        image: "/products/jbl-flip-5.jpg",
        description:
          "Портативная колонка с мощным звуком JBL Original Pro Sound и защитой от воды IPX7, поэтому её можно брать на пляж и к бассейну. Функция PartyBoost позволяет объединить несколько колонок JBL. Заряжается через USB-C.",
        specs: [
          { name: "Мощность", value: "20 Вт" },
          { name: "Защита", value: "IPX7" },
          { name: "Время работы", value: "до 12 часов" },
          { name: "Вес", value: "540 г" },
        ],
      },
      {
        id: "jbl-pulse-3",
        name: "JBL Pulse 3",
        price: 14990,
        image: "/products/jbl-pulse-3.jpg",
        description:
          "Портативная колонка с круговой светодиодной подсветкой, которая двигается в такт музыке. Звук на 360 градусов, защита от воды IPX7 и возможность настроить световое шоу через приложение JBL Connect.",
        specs: [
          { name: "Мощность", value: "20 Вт" },
          { name: "Защита", value: "IPX7" },
          { name: "Время работы", value: "до 12 часов" },
          { name: "Вес", value: "960 г" },
        ],
      },
    ],
  },
  {
    id: "gadgets",
    title: "Гаджеты",
    products: [
      {
        id: "apple-watch",
        name: "Apple Watch Series 9",
        price: 39990,
        image: "/products/apple-watch.jpg",
        description:
          "Умные часы Apple с ярким дисплеем Always-On Retina и процессором S9. Следят за пульсом, кислородом в крови, сном и тренировками, умеют делать ЭКГ и распознают падения. Жест двойного касания позволяет управлять часами одной рукой.",
        specs: [
          { name: "Корпус", value: "45 мм, алюминий" },
          { name: "Время работы", value: "до 18 часов" },
          { name: "Водозащита", value: "до 50 м" },
          { name: "Процессор", value: "Apple S9" },
        ],
      },
    ],
  },
  {
    id: "photo",
    title: "Фототехника",
    products: [
      {
        id: "canon-eos-600d",
        name: "Canon EOS 600D Kit",
        price: 29990,
        image: "/products/canon-eos-600d.jpg",
        description:
          "Зеркальная камера, с которой многие начинали заниматься фотографией. Поворотный экран удобен для съёмки с необычных ракурсов, а творческие фильтры и подсказки на экране помогают быстро разобраться в настройках. Комплектуется объективом EF-S 18–55 мм.",
        specs: [
          { name: "Матрица", value: "18 Мп, APS-C" },
          { name: "Видео", value: "Full HD 1080p" },
          { name: "Экран", value: "3\" поворотный" },
          { name: "Вес", value: "570 г (без объектива)" },
        ],
      },
      {
        id: "fujifilm-x100v",
        name: "Fujifilm X100V",
        price: 149990,
        image: "/products/fujifilm-x100v.jpg",
        description:
          "Культовая компактная камера в ретро-стиле с несъёмным светосильным объективом. Гибридный видоискатель, механические диски управления и фирменные симуляции плёнки Fujifilm делают её любимой камерой уличных фотографов.",
        specs: [
          { name: "Матрица", value: "26,1 Мп, APS-C" },
          { name: "Объектив", value: "23 мм, f/2" },
          { name: "Видео", value: "4K 30p" },
          { name: "Вес", value: "478 г" },
        ],
      },
    ],
  },
];

export function getAllProducts() {
  return catalog.flatMap((category) =>
    category.products.map((product) => ({
      ...product,
      category: category.title,
    }))
  );
}

export function getProductById(id) {
  return getAllProducts().find((product) => product.id === id);
}

export function formatPrice(price) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(price);
}
