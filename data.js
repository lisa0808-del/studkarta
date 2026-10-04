// Данные организаций для карты.
// Все скидки проверены по официальным сайтам организаций 3 октября 2026 года
// (ссылка на страницу-источник — в поле source у каждого места).
// Условия меняются: перепроверяйте источники хотя бы раз в семестр.
//
// Поля:
//   name      — название организации
//   category  — один из ключей CATEGORIES ниже
//   discount  — размер скидки, коротко (то, что видно на метке): "−50%", "Бесплатно", "Льготный"
//   details   — условия: когда действует, что показать
//   address   — адрес
//   lat, lng  — координаты (можно взять в Яндекс.Картах: правый клик → «Что здесь?»)
//   who       — кому положена скидка: ["vuz"], ["college"] или ["vuz", "college"]
//   from, to  — период действия скидки в формате ГГГГ-ММ-ДД.
//               Если скидка постоянная — не пишите to (и from, если дата начала неизвестна)
//   url       — сайт организации (необязательно)
//   source    — страница, где опубликованы условия скидки (необязательно, но очень желательно)

// Общие настройки сайта
window.SETTINGS = {
  city: "Москва",                       // город: на штампе «МОСКВА» и в подписи у логотипа
  center: [55.7558, 37.6173],           // центр карты [широта, долгота]
  zoom: 12,                             // начальный масштаб (10 — весь город, 15 — улицы)
  endingSoonDays: 14,                   // за сколько дней до конца помечать «Осталось N дней»
  routeMode: "mt",                      // маршрут в Яндекс.Картах: "mt" транспорт, "pd" пешком, "auto" машина
  checked: "2026-10-03",                // когда последний раз проверяли источники (показывается в карточке)
  note: "Скидки проверены по сайтам организаций 3 октября 2026. Перед походом уточняйте условия по ссылке в карточке." // текст под списком; "" — скрыть
};

window.CATEGORIES = {
  museum:  { label: "Музеи",  color: "#0078BE" },
  theatre: { label: "Театры", color: "#943E90" },
  cinema:  { label: "Кино",   color: "#DA2128" },
  food:    { label: "Еда",    color: "#F07E24" },
  sport:   { label: "Спорт",  color: "#2DBE2C" },
  fun:     { label: "Досуг",  color: "#00A0E3" }
};

window.PLACES = [
  // ---------- Музеи ----------
  {
    name: "Третьяковская галерея",
    category: "museum",
    discount: "Бесплатно",
    details: "Бесплатный вход в первое воскресенье каждого месяца. Студентам вузов — при любой форме обучения, студентам колледжей — с 18 лет. Нужен студенческий, продлённый на текущий учебный год.",
    address: "Лаврушинский пер., 10",
    lat: 55.74136, lng: 37.62022,
    who: ["vuz", "college"],
    url: "https://www.tretyakovgallery.ru",
    source: "https://www.tretyakovgallery.ru/for-visitors/free/"
  },
  {
    name: "Новая Третьяковка",
    category: "museum",
    discount: "Бесплатно",
    details: "Бесплатный вход на постоянную экспозицию в первое воскресенье каждого месяца. Студентам вузов — при любой форме обучения, студентам колледжей — с 18 лет.",
    address: "ул. Крымский Вал, 10",
    lat: 55.73506, lng: 37.60662,
    who: ["vuz", "college"],
    url: "https://www.tretyakovgallery.ru",
    source: "https://www.tretyakovgallery.ru/for-visitors/free/"
  },
  {
    name: "ГМИИ им. А. С. Пушкина, Главное здание",
    category: "museum",
    discount: "Бесплатно",
    details: "Каждый четверг — бесплатный вход на постоянную экспозицию для студентов вузов и колледжей РФ. Не действует, если четверг праздничный, и на комплексные билеты.",
    address: "ул. Волхонка, 12",
    lat: 55.74728, lng: 37.60542,
    who: ["vuz", "college"],
    url: "https://pushkinmuseum.art",
    source: "https://pushkinmuseum.art/visitors/tickets/index.php?lang=ru"
  },
  {
    name: "ГМИИ им. А. С. Пушкина, Галерея искусства Европы и Америки",
    category: "museum",
    discount: "Бесплатно",
    details: "Каждый четверг — бесплатный вход на постоянную экспозицию для студентов вузов и колледжей РФ. Бесплатный билет можно оформить на сайте музея.",
    address: "ул. Волхонка, 14",
    lat: 55.74642, lng: 37.60421,
    who: ["vuz", "college"],
    url: "https://pushkinmuseum.art",
    source: "https://pushkinmuseum.art/visitors/tickets/index.php?lang=ru"
  },
  {
    name: "Музей «Гараж»",
    category: "museum",
    discount: "Бесплатно",
    details: "Бесплатный вход в открытое хранение (обычный билет — 600 ₽) при предъявлении студенческого.",
    address: "ул. Крымский Вал, 9, стр. 32",
    lat: 55.72793, lng: 37.60177,
    who: ["vuz", "college"],
    url: "https://garagemca.org",
    source: "https://garagemca.org/visit"
  },
  {
    name: "Музей Москвы",
    category: "museum",
    discount: "Льготный",
    details: "Льготный билет для студентов очной формы обучения. В дни Московской музейной недели (13 октября, 10 ноября, 15 декабря 2026) вход бесплатный для всех по билету с mos.ru.",
    address: "Зубовский б-р, 2",
    lat: 55.73648, lng: 37.59302,
    who: ["vuz", "college"],
    url: "https://mosmuseum.ru",
    source: "https://mosmuseum.ru/visitors/tikets/"
  },
  {
    name: "Музей космонавтики",
    category: "museum",
    discount: "−30%",
    details: "Студенческий билет на экспозицию с выставками — 350 ₽ вместо 500 ₽. Для студентов очной формы и владельцев карты ISIC.",
    address: "пр. Мира, 111",
    lat: 55.82279, lng: 37.63975,
    who: ["vuz", "college"],
    from: "2026-08-28",
    url: "https://kosmo-museum.ru",
    source: "https://kosmo-museum.ru/static_pages/stoimost-biletov"
  },

  // ---------- Досуг ----------
  {
    name: "Московский зоопарк",
    category: "fun",
    discount: "Бесплатно",
    details: "Студенты очной формы с постоянной регистрацией в Москве — бесплатно в любой день. Без московской регистрации — бесплатно каждую третью среду месяца. Льготные билеты выдают только в кассах.",
    address: "ул. Большая Грузинская, 1",
    lat: 55.7612, lng: 37.57854,
    who: ["vuz", "college"],
    url: "https://moscowzoo.ru",
    source: "https://moscowzoo.ru/visitors/tickets"
  },
  {
    name: "Московский планетарий",
    category: "fun",
    discount: "−10%",
    details: "Скидка до 10% для студентов дневного отделения. Не действует на VIP-места, полнокупольные музыкальные шоу и концерты.",
    address: "ул. Садовая-Кудринская, 5, стр. 1",
    lat: 55.7613, lng: 37.58381,
    who: ["vuz", "college"],
    url: "https://planetarium-moscow.ru",
    source: "https://planetarium-moscow.ru/visitors/prices/"
  },

  // ---------- Кино ----------
  {
    name: "КАРО 11 Октябрь",
    category: "cinema",
    discount: "−40%",
    details: "Скидка 40% от стандартного билета студентам очного отделения — на сайте, в приложении и в кассе. Подходит электронный студенческий на Госуслугах. Не действует в залах «Премиум», на премьеры и «КАРОакции».",
    address: "ул. Новый Арбат, 24",
    lat: 55.75311, lng: 37.58765,
    who: ["vuz", "college"],
    url: "https://karofilm.ru",
    source: "https://karofilm.ru/news/276"
  },
  {
    name: "КАРО 7 Атриум",
    category: "cinema",
    discount: "−40%",
    details: "Скидка 40% от стандартного билета студентам очного отделения. Не действует на премьерные показы, трансляции и фильмы по «КАРОакции».",
    address: "ул. Земляной Вал, 33, ТРК «Атриум»",
    lat: 55.7572, lng: 37.65933,
    who: ["vuz", "college"],
    url: "https://karofilm.ru",
    source: "https://karofilm.ru/news/276"
  },
  {
    name: "КАРО Sky 17 Авиапарк",
    category: "cinema",
    discount: "−40%",
    details: "Скидка 40% от стандартного билета студентам очного отделения. Не действует в залах «Премиум», на премьеры и «КАРОакции».",
    address: "Ходынский б-р, 4, ТЦ «Авиапарк»",
    lat: 55.78997, lng: 37.53102,
    who: ["vuz", "college"],
    url: "https://karofilm.ru",
    source: "https://karofilm.ru/news/276"
  },
  {
    name: "Москино Космос",
    category: "cinema",
    discount: "Льготный",
    details: "Льготные билеты для студентов дневных отделений. Цену уточняйте в кассе.",
    address: "пр. Мира, 109",
    lat: 55.81869, lng: 37.63675,
    who: ["vuz", "college"],
    url: "https://mos-kino.ru",
    source: "https://mos-kino.ru/cinema/moskino_kosmos/"
  },
  {
    name: "Москино Сатурн",
    category: "cinema",
    discount: "Льготный",
    details: "Льготные билеты для студентов дневных отделений. Цену уточняйте в кассе.",
    address: "Снежная ул., 18",
    lat: 55.85195, lng: 37.64754,
    who: ["vuz", "college"],
    url: "https://mos-kino.ru",
    source: "https://mos-kino.ru/cinema/moskino_saturn/"
  },
  {
    name: "Москино Искра",
    category: "cinema",
    discount: "Льготный",
    details: "Льготные билеты для студентов дневных отделений. Цену уточняйте в кассе.",
    address: "ул. Костякова, 10",
    lat: 55.81453, lng: 37.57114,
    who: ["vuz", "college"],
    url: "https://mos-kino.ru",
    source: "https://mos-kino.ru/cinema/moskino_iskra/"
  },

  // ---------- Театры ----------
  {
    name: "Театр им. Вл. Маяковского",
    category: "theatre",
    discount: "Льготный",
    details: "Билеты по льготной цене для студентов вузов и колледжей — в кассе театра за час до начала спектакля, если остались свободные места.",
    address: "ул. Большая Никитская, 19/13",
    lat: 55.75682, lng: 37.60182,
    who: ["vuz", "college"],
    url: "https://www.mayakovsky.ru",
    source: "https://www.mayakovsky.ru/about/spec/"
  },
  {
    name: "Театр МОСТ",
    category: "theatre",
    discount: "−20%",
    details: "Скидка 20% круглый год для студентов вузов очной формы по студенческому билету. На один спектакль продаётся ограниченное число льготных билетов.",
    address: "ул. Большая Садовая, 6",
    lat: 55.76619, lng: 37.59199,
    who: ["vuz"],
    url: "https://teatrmost.ru",
    source: "https://teatrmost.ru/discounts/"
  },

  // ---------- Спорт ----------
  {
    name: "Бассейны «Лужники»",
    category: "sport",
    discount: "−50%",
    details: "Льготный тариф 600 ₽ вместо 1 190 ₽: 120 минут в плавательных бассейнах и термах. Продаётся в кассах с 10:00 до 15:59 по студенческому очной формы.",
    address: "ул. Лужники, 24, стр. 4",
    lat: 55.71308, lng: 37.55844,
    who: ["vuz", "college"],
    url: "https://aqua.luzhniki.ru",
    source: "https://aqua.luzhniki.ru/tarify/"
  },

  // ---------- Еда ----------
  {
    name: "Кафе «Му-Му» на Смоленской",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% по студенческому билету, зачётке или при оплате картой москвича. Не действует на алкоголь, завтраки, комплексные обеды и акционные блюда.",
    address: "Карманицкий пер., 9, 2-й этаж",
    lat: 55.74829, lng: 37.58358,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "Кафе «Му-Му» на Бауманской",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% по студенческому билету, зачётке или при оплате картой москвича. Не действует на алкоголь, завтраки, комплексные обеды и акционные блюда.",
    address: "Бауманская ул., 35/1",
    lat: 55.77169, lng: 37.67905,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "Кафе «Му-Му» на Третьяковской",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% по студенческому билету, зачётке или при оплате картой москвича. Не действует на алкоголь, завтраки, комплексные обеды и акционные блюда.",
    address: "Климентовский пер., 10, стр. 1",
    lat: 55.74101, lng: 37.62778,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  }
];
