// Данные организаций для карты.
// Базовые скидки проверены по источникам проекта 3 октября 2026 года.
// Дополненные места взяты из подборки «Афиша Daily» от 5 сентября 2026 года; перед визитом рекомендуется проверить условия у организации.
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
  checked: "2026-10-06",                // когда последний раз проверяли источники (показывается в карточке)
  note: "Скидки и адреса сетей обновлены 6 октября 2026 по официальным сайтам и текущим карточкам филиалов. Перед визитом учитывайте срок действия акции." // текст под списком; "" — скрыть
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
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
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
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
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
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
    address: "Климентовский пер., 10, стр. 1",
    lat: 55.74101, lng: 37.62778,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },

  // ---------- Дополнено из подборки «Афиша Daily» ----------
  {
    name: "Молодёжь",
    category: "food",
    discount: "−40%",
    details: "Студенческая скидка 40% на бургеры с мраморной говядиной. Дополнительные предложения могут меняться вместе с афишей заведения.",
    address: "Сущёвская ул., 21, стр. 8",
    lat: 55.781914, lng: 37.599696,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Сыто-пьяно",
    category: "food",
    discount: "−25%",
    details: "Студентам предоставляется скидка 25% на меню. Перед визитом рекомендуется уточнить актуальные условия.",
    address: "Комсомольский просп., 28, МДМ",
    lat: 55.726882, lng: 37.579654,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Met Tea",
    category: "food",
    discount: "−10%",
    details: "Скидка 10% студентам при предъявлении студенческого на кассе.",
    address: "ул. Никольская, 10/2, стр. 2Б",
    lat: 55.7592, lng: 37.6255,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Ёрш",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% студентам по будням на меню, кроме ланчей и специальных предложений.",
    address: "ул. Перерва, 58",
    lat: 55.66317, lng: 37.76126,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Тануки",
    category: "food",
    discount: "−20%",
    details: "По будням с открытия до 18:00 — скидка 20% при заказе от 990 ₽. Действует не во всех ресторанах сети; условия лучше уточнить заранее.",
    address: "Каширское ш., 46, корп. 1",
    lat: 55.647929, lng: 37.664833,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Farsh",
    category: "food",
    discount: "−20%",
    details: "Постоянная скидка 20% для студентов. Условия участия в программе необходимо уточнить у сети.",
    address: "Никольская, 12",
    lat: 55.7589, lng: 37.6253,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Практика кофе",
    category: "food",
    discount: "−10%",
    details: "Круглый год действует скидка 10% студентам.",
    address: "Ломоносовский просп., 29, корп. 1, стр. 2",
    lat: 55.7034, lng: 37.51583,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Ra’men",
    category: "food",
    discount: "−30%",
    details: "Скидка 30% студентам по будням с 16:00 до 18:00.",
    address: "Бауманская, 56/17, стр. 1",
    lat: 55.76886, lng: 37.67912,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },

  // ---------- Магазины ----------
  {
    name: "Читай-город",
    category: "fun",
    discount: "−15%",
    details: "Постоянная скидка 15% студентам на большую часть книг, кроме новинок, и на канцелярию. Перед покупкой уточните условия в конкретном магазине.",
    address: "Комсомольский просп., 28, МДМ",
    lat: 55.726882, lng: 37.579654,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Леонардо",
    category: "fun",
    discount: "−10%",
    details: "По понедельникам с 10:00 до 13:00 студенты могут получить скидку 10% на весь чек. Карта постоянного покупателя может давать отдельную скидку.",
    address: "Ходынский б-р, 4, ТРЦ «Авиапарк»",
    lat: 55.790231, lng: 37.531289,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Улыбка радуги",
    category: "fun",
    discount: "−10%",
    details: "Скидка 10% студентам на средства гигиены, уходовую и декоративную косметику в розничных магазинах по будням после 15:00. Скидка может суммироваться с другими акциями.",
    address: "Таганская, 31/22",
    lat: 55.739748, lng: 37.670681,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "U Forma",
    category: "fun",
    discount: "−10%",
    details: "Скидка 10% учащимся на все товары магазина медицинской формы.",
    address: "ул. Вавилова, 6",
    lat: 55.708, lng: 37.5879,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },

  // ---------- Спорт ----------
  {
    name: "Фитнес-клуб «Мореон»",
    category: "sport",
    discount: "−30%",
    details: "Студентам предоставляется скидка 30% на клубные карты. Итоговую стоимость нужно уточнять при оформлении.",
    address: "Голубинская, 16",
    lat: 55.597246, lng: 37.527184,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "СпортЛэнд",
    category: "sport",
    discount: "−50%",
    details: "Студенты получают скидку 50% на вступительный взнос. Условия абонемента и актуальную цену необходимо уточнить перед оформлением.",
    address: "Кленовый б-р, 23",
    lat: 55.6759, lng: 37.6815,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Студия йоги «Чакра»",
    category: "sport",
    discount: "−30%",
    details: "Разовое посещение для студентов дешевле на 30%, абонемент — на 15%.",
    address: "Мясницкая, 24/7, стр. 3",
    lat: 55.7625, lng: 37.6355,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Студия танцев «ЛисоБорье»",
    category: "sport",
    discount: "−20%",
    details: "Скидка 20% студентам на групповые абонементы.",
    address: "Бауманская, 53, стр. 2",
    lat: 55.7677, lng: 37.6799,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },

  // ---------- Развлечения ----------
  {
    name: "Ква-ква-парк",
    category: "fun",
    discount: "2190 ₽",
    details: "Студенческий тариф — 2190 ₽ за 4 часа вместо 3290 ₽. Льгота действует круглый год; нужен студенческий билет.",
    address: "Мытищи, Коммунистическая, 1, ТРЦ XL",
    lat: 55.891797, lng: 37.748833,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "YouPlay",
    category: "fun",
    discount: "499 ₽",
    details: "Ночной студенческий тариф с 22:00 до 06:00: 7 часов на ПК, час на приставке и 30 минут VR за 499 ₽. Нужен студенческий.",
    address: "Щелковское ш., 79, корп. 1",
    lat: 55.81113, lng: 37.80769,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Квесты «Нелогика»",
    category: "fun",
    discount: "−20%",
    details: "Скидка 20% студентам по будням при предварительном онлайн-бронировании. Студенческий предъявляется на месте.",
    address: "Подсосенский пер., 3, корп. 1",
    lat: 55.7589, lng: 37.6444,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Боулинг «The Би/Ба/Бо»",
    category: "fun",
    discount: "−50%",
    details: "Скидка 50% студентам на боулинг по понедельникам–пятницам до 18:00; по воскресеньям — 25%. Бронирование обязательно.",
    address: "Карманицкий пер., 9",
    lat: 55.7483, lng: 37.5833,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Картинг Race Place",
    category: "fun",
    discount: "−20%",
    details: "Скидка 20% студентам с 19:00 до 20:00 на стандартные 10-минутные заезды, мини-гонки и марафоны. День скидки зависит от площадки.",
    address: "Алтуфьевское ш., 1 км, влад. 3, стр. 1, ТРЦ «Весна»",
    lat: 55.905, lng: 37.588,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Бильярд на «Фабрике»",
    category: "fun",
    discount: "−40%",
    details: "Скидка 40% студентам по будням до 18:00, по пятницам — до 16:00. Стол рекомендуется бронировать заранее.",
    address: "Ткацкая, 5, стр. 7",
    lat: 55.7833, lng: 37.7416,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Парк аттракционов «Остров мечты»",
    category: "fun",
    discount: "2000 ₽",
    details: "По средам и четвергам студенческий билет стоит 2000 ₽ вместо 2800 ₽.",
    address: "просп. Андропова, 1",
    lat: 55.695063, lng: 37.678959,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },

  // ---------- Кино ----------
  {
    name: "Киномакс — Мозаика",
    category: "cinema",
    discount: "−30%",
    details: "Студенческая скидка 30% по будням с понедельника по четверг и до 16:00 в пятницу. Не действует на премьеры, VIP-залы и специальные показы. Оформляется в кассе.",
    address: "7-я Кожуховская, 9, ТРЦ «Мозаика», 3 этаж",
    lat: 55.710693, lng: 37.675109,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Синема Парк — Метрополис",
    category: "cinema",
    discount: "−20%",
    details: "Студентам предоставляется скидка 20% при покупке билета в кассе. Не действует на мультфильмы и VIP-залы.",
    address: "Ленинградское ш., 16А, стр. 4, ТЦ «Метрополис»",
    lat: 55.823217, lng: 37.497468,
    who: ["vuz", "college"],
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },

  // ---------- Расширение сетевых организаций ----------
  {
    name: "Tanuki — Пятницкая",
    category: "food",
    discount: "−20%",
    details: "Скидка по условиям сети; перед посещением проверьте актуальные условия для студентов.",
    address: "ул. Пятницкая, 53",
    lat: 55.74150, lng: 37.62690,
    who: ["vuz", "college"],
    url: "https://tanukifamily.ru/",
    source: "https://tanukifamily.ru/"
  },
  {
    name: "Tanuki — Большая Якиманка",
    category: "food",
    discount: "−20%",
    details: "Скидка по условиям сети; перед посещением проверьте актуальные условия для студентов.",
    address: "ул. Большая Якиманка, 58/2",
    lat: 55.73330, lng: 37.59650,
    who: ["vuz", "college"],
    url: "https://tanukifamily.ru/",
    source: "https://tanukifamily.ru/"
  },
  {
    name: "FARШ — Комсомольский",
    category: "food",
    discount: "−20%",
    details: "Постоянная студенческая скидка 20%. Для участия нужно отправить фото первой страницы студенческого билета и свой номер телефона на student_farsh@farshburger.ru. Скидка действует в ресторанах сети; детали программы могут меняться.",
    address: "Комсомольский просп., 24, стр. 1",
    lat: 55.72740, lng: 37.58150,
    who: ["vuz", "college"],
    url: "https://farshburger.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "FARШ — Никольская",
    category: "food",
    discount: "−20%",
    details: "Постоянная студенческая скидка 20%. Для участия нужно отправить фото первой страницы студенческого билета и свой номер телефона на student_farsh@farshburger.ru. Скидка действует в ресторанах сети; детали программы могут меняться.",
    address: "Никольская ул., 12",
    lat: 55.75950, lng: 37.62530,
    who: ["vuz", "college"],
    url: "https://farshburger.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Читай-город — Охотный Ряд",
    category: "fun",
    discount: "−15%",
    details: "Студенческая скидка; условия могут отличаться для отдельных товаров.",
    address: "Манежная пл., 1, стр. 2, ТЦ «Охотный Ряд»",
    lat: 55.75520, lng: 37.61330,
    who: ["vuz", "college"],
    url: "https://www.chitai-gorod.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Читай-город — Европейский",
    category: "fun",
    discount: "−15%",
    details: "Студенческая скидка; условия могут отличаться для отдельных товаров.",
    address: "пл. Киевского Вокзала, 2, ТРЦ «Европейский»",
    lat: 55.74450, lng: 37.56630,
    who: ["vuz", "college"],
    url: "https://www.chitai-gorod.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Леонардо — Европейский",
    category: "fun",
    discount: "−10%",
    details: "Студенческая скидка по условиям акции сети.",
    address: "пл. Киевского Вокзала, 2, ТРЦ «Европейский»",
    lat: 55.74450, lng: 37.56630,
    who: ["vuz", "college"],
    url: "https://leonardo.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Леонардо — Авиапарк",
    category: "fun",
    discount: "−10%",
    details: "Студенческая скидка по условиям акции сети.",
    address: "Ходынский б-р, 4, ТЦ «Авиапарк»",
    lat: 55.78990, lng: 37.53100,
    who: ["vuz", "college"],
    url: "https://leonardo.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Улыбка радуги — проспект Мира",
    category: "fun",
    discount: "−10%",
    details: "Студенческая скидка по условиям акции сети.",
    address: "пр-т Мира, 78А",
    lat: 55.78200, lng: 37.62580,
    who: ["vuz", "college"],
    url: "https://www.r-ulybka.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Улыбка радуги — Дубнинская",
    category: "fun",
    discount: "−10%",
    details: "Студенческая скидка по условиям акции сети.",
    address: "Дубнинская ул., 10, корп. 1",
    lat: 55.87500, lng: 37.57450,
    who: ["vuz", "college"],
    url: "https://www.r-ulybka.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Киномакс — Кожуховская",
    category: "cinema",
    discount: "−30%",
    details: "Студенческая скидка по условиям сети/подборки; перед покупкой уточните ограничения на конкретный сеанс.",
    address: "7-я Кожуховская ул., 9, ТРЦ «Мозаика»",
    lat: 55.71070, lng: 37.67510,
    who: ["vuz", "college"],
    url: "https://kinomax.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Киномакс — Пражская",
    category: "cinema",
    discount: "−30%",
    details: "Студенческая скидка по условиям сети/подборки; перед покупкой уточните ограничения на конкретный сеанс.",
    address: "Кировоградская ул., 13А",
    lat: 55.61270, lng: 37.60500,
    who: ["vuz", "college"],
    url: "https://kinomax.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Синема Парк — Филион",
    category: "cinema",
    discount: "−20%",
    details: "Студенческая скидка по условиям сети; актуальные ограничения уточняйте перед покупкой.",
    address: "Багратионовский пр., 5, ТРЦ «Филион»",
    lat: 55.74080, lng: 37.50340,
    who: ["vuz", "college"],
    url: "https://kinoteatr.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Синема Парк — МЕГА Тёплый Стан",
    category: "cinema",
    discount: "−20%",
    details: "Студенческая скидка по условиям сети; актуальные ограничения уточняйте перед покупкой.",
    address: "Калужское ш., 21, МЕГА Тёплый Стан",
    lat: 55.61920, lng: 37.49200,
    who: ["vuz", "college"],
    url: "https://kinoteatr.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "Ёрш — Космонавтов",
    category: "food",
    discount: "−20%",
    details: "Студенческая скидка по условиям подборки «Афиша Daily»; перед визитом уточните, действует ли акция в конкретном ресторане.",
    address: "ул. Космонавтов, 15",
    lat: 55.81780, lng: 37.63980,
    who: ["vuz", "college"],
    url: "https://yersh.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },


  // ---------- Сетевые точки: Spirit Fitness (Москва) ----------
  // Адреса взяты с официального списка клубов Spirit Fitness.
  // Координаты ниже — привязка к зданиям/участкам улиц; при необходимости сайт
  // дополнительно может уточнить адрес через геокодирование.

  {
    name: "Spirit Fitness — Савёловская",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Двинцев, вл. 3, БЦ Stone Савеловская",
    lat: 55.81290, lng: 37.58840,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Юго-Восточная",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Ферганская ул., 17, ТЦ «Ассортида»",
    lat: 55.70890, lng: 37.81900,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Нижегородская",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Рязанский просп., 2, к. 2",
    lat: 55.73270, lng: 37.74250,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Автозаводская",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Ленинская Слобода, 26, стр. 2, ТРЦ «Глобал Молл»",
    lat: 55.72880, lng: 37.66090,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Аминьевская",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Очаковское ш., 3А/8, ТЦ ОМА",
    lat: 55.70080, lng: 37.47390,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Технопарк",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "просп. Андропова, 8, ТРЦ «Мегаполис»",
    lat: 55.69590, lng: 37.66480,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Алтуфьево",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Алтуфьевское ш., 24, к. 1, ТЦ «Улей»",
    lat: 55.86250, lng: 37.58780,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Прокшино",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "ул. Николо-Хованская, 7с1, ТЦ «Сиеста»",
    lat: 55.58980, lng: 37.44650,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Гагаринский",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "ул. Вавилова, 3, ТРЦ «Гагаринский»",
    lat: 55.70670, lng: 37.58720,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Рассказовка",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "ул. Корнея Чуковского, 2, ТЦ «Сказка»",
    lat: 55.63350, lng: 37.34350,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Севастопольский",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Севастопольский пр-т, 28, корп. 2",
    lat: 55.66470, lng: 37.57830,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Федерация",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Пресненская наб., 12, Москва-Сити, башня «Федерация»",
    lat: 55.74980, lng: 37.53970,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Войковская",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Старопетровский пр., 1, стр. 2, ТЦ Baby Store",
    lat: 55.82650, lng: 37.50040,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Марьина Роща",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Шереметьевская ул., 6, корп. 1",
    lat: 55.79680, lng: 37.61620,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Беляево",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "ул. Миклухо-Маклая, 18, к. 2, ТЦ «Беляево»",
    lat: 55.64490, lng: 37.51940,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Юго-Западная",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "просп. Вернадского, 86А, ТЦ Avenue Southwest",
    lat: 55.66390, lng: 37.48300,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Каширское шоссе",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Каширское ш., 80, ТЦ «Борисовский»",
    lat: 55.63280, lng: 37.72910,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Ясенево",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Ясногорская ул., 7А, ТЦ «Этажи»",
    lat: 55.60090, lng: 37.53380,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Рогожский вал",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Рогожский вал, 10",
    lat: 55.74640, lng: 37.67850,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Щукинская",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "ул. Авиационная, 66",
    lat: 55.82470, lng: 37.46650,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Крылатское",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Осенний б-р, 12, ТЦ «Крылатский»",
    lat: 55.75680, lng: 37.41180,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Рязанский проспект",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Рязанский просп., 30, к. 2",
    lat: 55.72590, lng: 37.77740,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Дежнёва",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "пр-д Дежнёва, 23, ТЦ «Вавилон-92»",
    lat: 55.87900, lng: 37.63570,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Крымская",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Большая Черёмушкинская ул., 1, ТРЦ «РИО»",
    lat: 55.70070, lng: 37.58480,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Марьино",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Люблинская ул., 169, к. 2, ТРЦ «Мариэль»",
    lat: 55.65250, lng: 37.74870,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Некрасовка",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Рождественская ул., 20, ТРЦ «Краски»",
    lat: 55.70330, lng: 37.93300,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Селигерская",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Дмитровское ш., 85",
    lat: 55.86280, lng: 37.54770,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Раменки",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Мичуринский просп., 27, ТЦ «Тиара»",
    lat: 55.69450, lng: 37.50090,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Семёновская",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Семёновская пл., 1, ТЦ «Семёновский»",
    lat: 55.78250, lng: 37.71800,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Чертановская",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "пр-т Балаклавский, 16А",
    lat: 55.64170, lng: 37.60380,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  {
    name: "Spirit Fitness — Строгино",
    category: "sport",
    discount: "Льготный",
    details: "Для молодёжи 14–24 лет действует ежемесячная подписка «Молодёжный»: сейчас 2 500 ₽/мес. Включены доступ в клуб без ограничений, групповые тренировки, тренажёрный зал, спа-зона с сауной/хаммамом (если есть в конкретном клубе), 2 гостевых визита в месяц, бесплатная вводная тренировка и анализ состава тела InBody; также действует скидка до 50% на стартовый блок тренировок и до 15% по программе лояльности. Условия и цена могут меняться.",
    address: "Строгинский б-р, 1, ТЦ «Дарья»",
    lat: 55.80460, lng: 37.40170,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/",
    source: "https://spiritfit.ru/clubs/trenirovki-dlya-studentov-v-spirit-fitness/"
  },
  // ---------- Дополнительно проверенные филиалы сетей ----------
  {
    name: "МУ-МУ на Фрунзенской",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
    address: "Комсомольский просп., 26",
    lat: 55.726882, lng: 37.579654,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "МУ-МУ на Добрынинской",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
    address: "ул. Коровий Вал, 1",
    lat: 55.72966, lng: 37.62314,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "МУ-МУ на Семёновской",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
    address: "Семёновская пл., 1, ТЦ «Семёновский»",
    lat: 55.78302, lng: 37.71908,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "МУ-МУ в Сокольниках",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
    address: "Сокольническая пл., 9",
    lat: 55.79, lng: 37.6808,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "МУ-МУ на Марксистской",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
    address: "Таганская ул., 3, ТЦ «Таганский пассаж»",
    lat: 55.7412, lng: 37.6587,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "МУ-МУ на Арбатской",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
    address: "ул. Арбат, 4, стр. 1",
    lat: 55.75205, lng: 37.59855,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "МУ-МУ на Охотном Ряду",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
    address: "Манежная пл., 1, стр. 2, ТЦ «Охотный Ряд»",
    lat: 55.7558, lng: 37.6171,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "МУ-МУ у Речного вокзала",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
    address: "Фестивальная ул., 2Б, ТЦ «Речной»",
    lat: 55.855083, lng: 37.478091,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "МУ-МУ на Щёлковской",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
    address: "9-я Парковая ул., 61А, стр. 1",
    lat: 55.8102, lng: 37.799,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "МУ-МУ на Тёплом Стане",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
    address: "Профсоюзная ул., 129А, ТЦ «Принц Плаза»",
    lat: 55.61813, lng: 37.507484,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "МУ-МУ на Юго-Западной",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
    address: "ул. Покрышкина, 4, ТЦ «Звёздочка»",
    lat: 55.665081, lng: 37.481496,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "МУ-МУ в Марьино",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
    address: "Люблинская ул., 169, корп. 2",
    lat: 55.649063, lng: 37.744944,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "МУ-МУ на Мясницкой",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
    address: "Мясницкая ул., 14/2",
    lat: 55.7646, lng: 37.6336,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "МУ-МУ на Большой Дмитровке",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
    address: "Большая Дмитровка ул., 9, стр. 1",
    lat: 55.7612, lng: 37.6135,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "МУ-МУ на площади Европы",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
    address: "пл. Европы, 1А, у Киевского вокзала",
    lat: 55.7444, lng: 37.5662,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "МУ-МУ на Ленинградском проспекте",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
    address: "Ленинградский просп., 62А, ТЦ «Аэропорт»",
    lat: 55.8022, lng: 37.5345,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "МУ-МУ на Яблочкова",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
    address: "ул. Яблочкова, 19Г",
    lat: 55.8197, lng: 37.5853,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "МУ-МУ на проспекте Мира",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% на основной ассортимент блюд и напитков при предъявлении действующего студенческого билета или зачётной книжки либо при оплате картой москвича. Не действует на алкоголь, акционные блюда, комплексные обеды, завтраки и специальные предложения. Действует с 25.01.2026 по 31.12.2026. На доставку в приложении МУ-МУ используется промокод STUDENT20.",
    address: "просп. Мира, 114",
    lat: 55.7962, lng: 37.637,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru",
    source: "https://www.cafemumu.ru/actions/skidka-studentam-20/"
  },
  {
    name: "#FARШ — Большая Серпуховская",
    category: "food",
    discount: "−20%",
    details: "Постоянная студенческая скидка 20%. Для участия нужно отправить фото первой страницы студенческого билета и свой номер телефона на student_farsh@farshburger.ru. Скидка действует в ресторанах сети; детали программы могут меняться.",
    address: "Большая Серпуховская ул., 17с1",
    lat: 55.7232, lng: 37.6242,
    who: ["vuz", "college"],
    url: "https://farshburger.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "#FARШ — Грузинский Вал",
    category: "food",
    discount: "−20%",
    details: "Постоянная студенческая скидка 20%. Для участия нужно отправить фото первой страницы студенческого билета и свой номер телефона на student_farsh@farshburger.ru. Скидка действует в ресторанах сети; детали программы могут меняться.",
    address: "Грузинский Вал ул., 26с1",
    lat: 55.771, lng: 37.5837,
    who: ["vuz", "college"],
    url: "https://farshburger.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "#FARШ — Атриум",
    category: "food",
    discount: "−20%",
    details: "Постоянная студенческая скидка 20%. Для участия нужно отправить фото первой страницы студенческого билета и свой номер телефона на student_farsh@farshburger.ru. Скидка действует в ресторанах сети; детали программы могут меняться.",
    address: "Земляной Вал ул., 33, ТЦ «Атриум»",
    lat: 55.7587, lng: 37.6595,
    who: ["vuz", "college"],
    url: "https://farshburger.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "#FARШ — Кунцево Плаза",
    category: "food",
    discount: "−20%",
    details: "Постоянная студенческая скидка 20%. Для участия нужно отправить фото первой страницы студенческого билета и свой номер телефона на student_farsh@farshburger.ru. Скидка действует в ресторанах сети; детали программы могут меняться.",
    address: "Ярцевская ул., 19, ТРЦ «Кунцево Плаза»",
    lat: 55.7388, lng: 37.4135,
    who: ["vuz", "college"],
    url: "https://farshburger.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "#FARШ — Охотный Ряд",
    category: "food",
    discount: "−20%",
    details: "Постоянная студенческая скидка 20%. Для участия нужно отправить фото первой страницы студенческого билета и свой номер телефона на student_farsh@farshburger.ru. Скидка действует в ресторанах сети; детали программы могут меняться.",
    address: "Манежная пл., 1с2, ТЦ «Охотный Ряд»",
    lat: 55.7559, lng: 37.617,
    who: ["vuz", "college"],
    url: "https://farshburger.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "#FARШ — бульвар Энтузиастов",
    category: "food",
    discount: "−20%",
    details: "Постоянная студенческая скидка 20%. Для участия нужно отправить фото первой страницы студенческого билета и свой номер телефона на student_farsh@farshburger.ru. Скидка действует в ресторанах сети; детали программы могут меняться.",
    address: "бульвар Энтузиастов, 2, БЦ Golden Gate",
    lat: 55.7476, lng: 37.6768,
    who: ["vuz", "college"],
    url: "https://farshburger.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "#FARШ — Райкин Плаза",
    category: "food",
    discount: "−20%",
    details: "Постоянная студенческая скидка 20%. Для участия нужно отправить фото первой страницы студенческого билета и свой номер телефона на student_farsh@farshburger.ru. Скидка действует в ресторанах сети; детали программы могут меняться.",
    address: "Шереметьевская ул., 6к1, ТРЦ «Райкин Плаза»",
    lat: 55.795, lng: 37.6182,
    who: ["vuz", "college"],
    url: "https://farshburger.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },
  {
    name: "#FARШ — Комсомольский",
    category: "food",
    discount: "−20%",
    details: "Постоянная студенческая скидка 20%. Для участия нужно отправить фото первой страницы студенческого билета и свой номер телефона на student_farsh@farshburger.ru. Скидка действует в ресторанах сети; детали программы могут меняться.",
    address: "Комсомольский просп., 24с1",
    lat: 55.7274, lng: 37.5815,
    who: ["vuz", "college"],
    url: "https://farshburger.ru/",
    source: "https://daily.afisha.ru/cities/35668-delu-vremya-a-potehe-he-he-gde-poest-razvlechsya-i-sekonomit-po-studencheskoy-skidke/"
  },

];
