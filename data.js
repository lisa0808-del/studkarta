// Данные организаций для карты СтудКарта.

window.SETTINGS = {
  city: "Москва",
  center: [55.7558, 37.6173],
  zoom: 12,
  endingSoonDays: 14,
  routeMode: "mt",
  checked: "2026-10-25",
  snapToBuildings: true,
  suggestTg: "", // Укажи свой ник в ТГ без @ (например: "lisa0808")
  note: "Скидки проверены по сайтам организаций. Перед походом уточняйте условия по ссылке в карточке."
};

window.CATEGORIES = {
  museum:  { label: "Музеи",    color: "#0078BE" },
  theatre: { label: "Театры",   color: "#943E90" },
  cinema:  { label: "Кино",     color: "#DA2128" },
  food:    { label: "Еда",      color: "#F07E24" },
  sport:   { label: "Спорт",    color: "#2DBE2C" },
  shop:    { label: "Магазины", color: "#E83E8C" },
  fun:     { label: "Досуг",    color: "#00A0E3" }
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
    details: "Льготный билет для студентов очной формы обучения. В дни Московской музейной недели вход бесплатный для всех по билету с mos.ru.",
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
  {
    name: "ММОМА (Московский музей современного искусства)",
    category: "museum",
    discount: "Льготный",
    details: "Льготный билет (250 ₽) для студентов очной формы обучения РФ. В каждое третье воскресенье месяца — вход бесплатный по предварительной регистрации.",
    address: "ул. Петровка, 25",
    lat: 55.7656, lng: 37.6143,
    who: ["vuz", "college"],
    url: "https://mmoma.ru"
  },
  {
    name: "Музей русского импрессионизма",
    category: "museum",
    discount: "−50%",
    details: "Льготный билет для студентов вузов и колледжей очной формы обучения при предъявлении студенческого билета.",
    address: "Ленинградский просп., 15, стр. 11",
    lat: 55.7824, lng: 37.5782,
    who: ["vuz", "college"],
    url: "https://www.rusimp.su"
  },
  {
    name: "Дом-музей Марины Цветаевой",
    category: "museum",
    discount: "Льготный",
    details: "Льготные билеты на постоянную экспозицию и выставки для студентов. Бесплатный вход в дни Московской музейной недели.",
    address: "Борисоглебский пер., 6, стр. 1",
    lat: 55.7538, lng: 37.5878,
    who: ["vuz", "college"],
    url: "https://dommuseum.ru"
  },
  {
    name: "Государственный исторический музей (ГИМ)",
    category: "museum",
    discount: "Льготный",
    details: "Специальный льготный тариф для студентов вузов и колледжей РФ по студенческому билету.",
    address: "Красная пл., 1",
    lat: 55.7553, lng: 37.6176,
    who: ["vuz", "college"],
    url: "https://shm.ru"
  },
  {
    name: "Галерея Александра Шилова",
    category: "museum",
    discount: "Льготный",
    details: "Льготный вход для студентов очной формы обучения по студенческому билету.",
    address: "ул. Знаменка, 5",
    lat: 55.7495, lng: 37.6085,
    who: ["vuz", "college"],
    url: "https://amshilov.ru"
  },
  {
    name: "Дом культуры «ГЭС-2»",
    category: "museum",
    discount: "Бесплатно",
    details: "Вход в здание и на большинство выставок бесплатный для всех по предварительной регистрации на сайте.",
    address: "Болотная наб., 15",
    lat: 55.7423, lng: 37.6125,
    who: ["vuz", "college"],
    url: "https://v-a-c.org"
  },
  {
    name: "Центр «Космонавтика и авиация» на ВДНХ",
    category: "museum",
    discount: "Льготный",
    details: "Льготный билет (250 ₽ вместо 500 ₽) для студентов дневных отделений вузов и колледжей при предъявлении студенческого билета.",
    address: "просп. Мира, 119, стр. 34 (ВДНХ)",
    lat: 55.8351, lng: 37.6225,
    who: ["vuz", "college"],
    url: "https://cosmos.vdnh.ru"
  },

  // ---------- Досуг и Развлечения ----------
  {
    name: "Московский зоопарк",
    category: "fun",
    discount: "Бесплатно",
    details: "Студенты очной формы с постоянной регистрацией в Москве — бесплатно в любой день. Без московской регистрации — бесплатно каждую третью среду месяца.",
    address: "ул. Большая Грузинская, 1",
    lat: 55.7612, lng: 37.57854,
    who: ["vuz", "college"],
    url: "https://moscowzoo.ru"
  },
  {
    name: "Московский планетарий",
    category: "fun",
    discount: "−10%",
    details: "Скидка до 10% для студентов дневного отделения.",
    address: "ул. Садовая-Кудринская, 5, стр. 1",
    lat: 55.7613, lng: 37.58381,
    who: ["vuz", "college"],
    url: "https://planetarium-moscow.ru"
  },
  {
    name: "Москвариум",
    category: "fun",
    discount: "Льготный",
    details: "Специальные студенческие тарифы на экспозицию Аквариума по студенческому билету.",
    address: "просп. Мира, 119, стр. 23 (ВДНХ)",
    lat: 55.8330, lng: 37.6186,
    who: ["vuz", "college"],
    url: "https://www.moskvarium.ru"
  },
  {
    name: "Устрой Дестрой",
    category: "fun",
    discount: "−15%",
    details: "Студенческая скидка на аттракцион крушения предметов при предъявлении студенческого билета.",
    address: "Лубянский пр., 5, стр. 1",
    lat: 55.7576, lng: 37.6305,
    who: ["vuz", "college"]
  },
  {
    name: "Парк «Зарядье»",
    category: "fun",
    discount: "−20%",
    details: "Льготные билеты студентам очной формы на медиакомплексы («Полёт») и выставки.",
    address: "ул. Варварка, 6, стр. 1",
    lat: 55.7515, lng: 37.6288,
    who: ["vuz", "college"],
    url: "https://www.zaryadyepark.ru"
  },
  {
    name: "Клуб мафии Mafia VIP",
    category: "fun",
    discount: "−20%",
    details: "Скидка для студентов на игровые вечера в мафию при предъявлении студенческого билета.",
    address: "ул. Малая Ордынка, 25",
    lat: 55.7368, lng: 37.6251,
    who: ["vuz", "college"]
  },
  {
    name: "Альпака Парк",
    category: "fun",
    discount: "Льготный",
    details: "Льготный входной билет для студентов очной формы обучения.",
    address: "ул. Крылатская, 18",
    lat: 55.7645, lng: 37.4265,
    who: ["vuz", "college"],
    url: "https://alpacapark.ru"
  },
  {
    name: "Парк аттракционов «Остров мечты»",
    category: "fun",
    discount: "2000 ₽",
    details: "По средам и четвергам студенческий билет стоит 2000 ₽ вместо 2800 ₽.",
    address: "просп. Андропова, 1",
    lat: 55.695063, lng: 37.678959,
    who: ["vuz", "college"]
  },
  {
    name: "Ква-ква-парк",
    category: "fun",
    discount: "2190 ₽",
    details: "Студенческий тариф — 2190 ₽ за 4 часа вместо 3290 ₽. Льгота действует круглый год.",
    address: "Мытищи, Коммунистическая, 1, ТРЦ XL",
    lat: 55.891797, lng: 37.748833,
    who: ["vuz", "college"]
  },
  {
    name: "YouPlay",
    category: "fun",
    discount: "499 ₽",
    details: "Ночной студенческий тариф с 22:00 до 06:00 за 499 ₽.",
    address: "Щелковское ш., 79, корп. 1",
    lat: 55.81113, lng: 37.80769,
    who: ["vuz", "college"]
  },
  {
    name: "Квесты «Нелогика»",
    category: "fun",
    discount: "−20%",
    details: "Скидка 20% студентам по будням при предварительном онлайн-бронировании.",
    address: "Подсосенский пер., 3, корп. 1",
    lat: 55.7589, lng: 37.6444,
    who: ["vuz", "college"]
  },
  {
    name: "Боулинг «The Би/Ба/Бо»",
    category: "fun",
    discount: "−50%",
    details: "Скидка 50% студентам на боулинг по пн–пт до 18:00; по воскресеньям — 25%.",
    address: "Карманицкий пер., 9",
    lat: 55.7483, lng: 37.5833,
    who: ["vuz", "college"]
  },

  // ---------- Кино ----------
  {
    name: "КАРО 11 Октябрь",
    category: "cinema",
    discount: "−40%",
    details: "Скидка 40% от стандартного билета студентам очного отделения. Подходит электронный студенческий.",
    address: "ул. Новый Арбат, 24",
    lat: 55.75311, lng: 37.58765,
    who: ["vuz", "college"],
    url: "https://karofilm.ru"
  },
  {
    name: "КАРО 7 Атриум",
    category: "cinema",
    discount: "−40%",
    details: "Скидка 40% от стандартного билета студентам очного отделения.",
    address: "ул. Земляной Вал, 33, ТРК «Атриум»",
    lat: 55.7572, lng: 37.65933,
    who: ["vuz", "college"],
    url: "https://karofilm.ru"
  },
  {
    name: "Кинотеатр «Художественный»",
    category: "cinema",
    discount: "−20%",
    details: "Скидка 20% студентам очной формы на утренние и дневные сеансы в будние дни при покупке в кассе.",
    address: "Арбатская пл., 14, стр. 1",
    lat: 55.7523, lng: 37.6012,
    who: ["vuz", "college"],
    url: "https://cinema1909.ru"
  },
  {
    name: "Синема Стар — Ереван Плаза",
    category: "cinema",
    discount: "Льготный",
    details: "Студенческий тариф по будням (с понедельника по среду) по студенческому билету.",
    address: "ул. Большая Тульская, 13, ТРЦ «Ереван Плаза»",
    lat: 55.7099, lng: 37.6225,
    who: ["vuz", "college"],
    url: "https://cinemastar.ru"
  },
  {
    name: "Люксор — Весна",
    category: "cinema",
    discount: "Льготный",
    details: "Специальные цены на билеты в кино для студентов очной формы в будни.",
    address: "Алтуфьевское ш., 1-й км, вл3с1",
    lat: 55.9048, lng: 37.5875,
    who: ["vuz", "college"],
    url: "https://luxorfilm.ru"
  },
  {
    name: "Мираж Синема — Европолис",
    category: "cinema",
    discount: "Льготный",
    details: "Льготный студенческий тариф по будням при предъявлении оригинала студенческого билета.",
    address: "просп. Мира, 211, корп. 2",
    lat: 55.8455, lng: 37.6625,
    who: ["vuz", "college"],
    url: "https://mirage.ru"
  },

  // ---------- Театры ----------
  {
    name: "Театр им. Вл. Маяковского",
    category: "theatre",
    discount: "Льготный",
    details: "Билеты по льготной цене для студентов — в кассе театра за час до начала спектакля при наличии мест.",
    address: "ул. Большая Никитская, 19/13",
    lat: 55.75682, lng: 37.60182,
    who: ["vuz", "college"],
    url: "https://www.mayakovsky.ru"
  },
  {
    name: "Театр МОСТ",
    category: "theatre",
    discount: "−20%",
    details: "Скидка 20% круглый год для студентов вузов очной формы по студенческому билету.",
    address: "ул. Большая Садовая, 6",
    lat: 55.76619, lng: 37.59199,
    who: ["vuz"],
    url: "https://teatrmost.ru"
  },
  {
    name: "Большой театр",
    category: "theatre",
    discount: "Льготный",
    details: "Программа «Большой — студентам»: специальные льготные билеты для студентов дневных отделений вузов РФ.",
    address: "Театральная пл., 1",
    lat: 55.7601, lng: 37.6186,
    who: ["vuz"],
    url: "https://bolshoi.ru"
  },

  // ---------- Спорт ----------
  {
    name: "Бассейны «Лужники»",
    category: "sport",
    discount: "−50%",
    details: "Льготный тариф 600 ₽ вместо 1 190 ₽ в бассейны и термы. С 10:00 до 15:59 по студенческому очной формы.",
    address: "ул. Лужники, 24, стр. 4",
    lat: 55.71308, lng: 37.55844,
    who: ["vuz", "college"],
    url: "https://aqua.luzhniki.ru"
  },
  {
    name: "SMSTRETCHING — Пятницкая",
    category: "sport",
    discount: "−20%",
    details: "Студенческая скидка 20% на абонементы при предъявлении студенческого билета.",
    address: "ул. Пятницкая, 71/5, стр. 2",
    lat: 55.7318, lng: 37.6285,
    who: ["vuz", "college"],
    url: "https://smstretching.ru"
  },
  {
    name: "DDX Fitness — Атриум",
    category: "sport",
    discount: "Льготный",
    details: "Специальные молодёжные акции на вступительный взнос и фитнес-тарифы.",
    address: "ул. Земляной Вал, 33",
    lat: 55.7575, lng: 37.6590,
    who: ["vuz", "college"],
    url: "https://ddxfitness.ru"
  },
  {
    name: "DDX Fitness — Савёловская",
    category: "sport",
    discount: "Льготный",
    details: "Специальные молодёжные условия при предъявлении студенческого билета.",
    address: "Сущёвский Вал, 5, стр. 1",
    lat: 55.7938, lng: 37.5924,
    who: ["vuz", "college"],
    url: "https://ddxfitness.ru"
  },
  {
    name: "DDX Fitness — Щука",
    category: "sport",
    discount: "Льготный",
    details: "Скидки на абонементы и регистрацию в фитнес-клуб.",
    address: "ул. Щукинская, 42, ТРК «Щука»",
    lat: 55.8095, lng: 37.4645,
    who: ["vuz", "college"],
    url: "https://ddxfitness.ru"
  },
  {
    name: "ФК «Динамо-Москва» (ВТБ Арена)",
    category: "sport",
    discount: "−30%",
    details: "Скидки студентам на домашние матчи клуба по студенческому билету.",
    address: "Ленинградский просп., 36",
    lat: 55.7915, lng: 37.5605,
    who: ["vuz", "college"],
    url: "https://fcdm.ru"
  },
  {
    name: "Spirit Fitness — Савёловская",
    category: "sport",
    discount: "Льготный",
    details: "Студенческие условия Spirit Fitness. Уточняйте в клубе.",
    address: "Двинцев, вл. 3, БЦ Stone Савеловская",
    lat: 55.81290, lng: 37.58840,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/"
  },
  {
    name: "Spirit Fitness — Федерация",
    category: "sport",
    discount: "Льготный",
    details: "Студенческий тариф в башне Федерация.",
    address: "Пресненская наб., 12",
    lat: 55.74980, lng: 37.53970,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/"
  },
  {
    name: "Spirit Fitness — Юго-Западная",
    category: "sport",
    discount: "Льготный",
    details: "Студенческий тариф в ТЦ Avenue Southwest.",
    address: "просп. Вернадского, 86А",
    lat: 55.66390, lng: 37.48300,
    who: ["vuz", "college"],
    url: "https://spiritfit.ru/clubs/"
  },

  // ---------- Сетевые Магазины (shop) ----------
  {
    name: "SPAR — Земляной Вал",
    category: "shop",
    discount: "−10%",
    details: "Скидка по социальной карте студента и специальные студенческие комбо на готовую кулинарию и кофе.",
    address: "ул. Земляной Вал, 27, стр. 1",
    lat: 55.7592, lng: 37.6578,
    who: ["vuz", "college"],
    url: "https://myspar.ru"
  },
  {
    name: "SPAR — Тверская",
    category: "shop",
    discount: "−10%",
    details: "Скидка по социальной карте москвича (студента) и комбо-обеды для учащихся.",
    address: "ул. Тверская, 15",
    lat: 55.7629, lng: 37.6068,
    who: ["vuz", "college"],
    url: "https://myspar.ru"
  },
  {
    name: "SPAR — Проспект Мира",
    category: "shop",
    discount: "−10%",
    details: "Скидка по карте москвича, выгодные перекусы и кофе со скидкой.",
    address: "просп. Мира, 40",
    lat: 55.7801, lng: 37.6338,
    who: ["vuz", "college"],
    url: "https://myspar.ru"
  },
  {
    name: "SPAR — Бауманская",
    category: "shop",
    discount: "−10%",
    details: "Скидка по студенческой карте москвича на продукцию кафе и кулинарии.",
    address: "ул. Бауманская, 32, стр. 2",
    lat: 55.7725, lng: 37.6782,
    who: ["vuz", "college"],
    url: "https://myspar.ru"
  },
  {
    name: "SPAR — Ленинский проспект",
    category: "shop",
    discount: "−10%",
    details: "Скидка по студенческой социальной карте в утренние и дневные часы.",
    address: "Ленинский просп., 34/1",
    lat: 55.7121, lng: 37.5852,
    who: ["vuz", "college"],
    url: "https://myspar.ru"
  },
  {
    name: "Магнолия — Пятницкая",
    category: "shop",
    discount: "−10%",
    details: "Скидка по социальной карте студента в дневные часы (с 09:00 до 17:00).",
    address: "ул. Пятницкая, 22",
    lat: 55.7418, lng: 37.6285,
    who: ["vuz", "college"],
    url: "https://mgnl.ru"
  },
  {
    name: "Магнолия — Новослободская",
    category: "shop",
    discount: "−10%",
    details: "Скидка по студенческой социальной карте москвича.",
    address: "ул. Новослободская, 36/1",
    lat: 55.7842, lng: 37.5985,
    who: ["vuz", "college"],
    url: "https://mgnl.ru"
  },
  {
    name: "Магнолия — Арбат",
    category: "shop",
    discount: "−10%",
    details: "Скидка по карте студента на кассе в дневное время.",
    address: "ул. Арбат, 25/36",
    lat: 55.7498, lng: 37.5925,
    who: ["vuz", "college"],
    url: "https://mgnl.ru"
  },
  {
    name: "Дикси — Большая Полянка",
    category: "shop",
    discount: "−5%",
    details: "Социальная скидка студентам по карте москвича с 08:00 до 13:00.",
    address: "ул. Большая Полянка, 30",
    lat: 55.7355, lng: 37.6195,
    who: ["vuz", "college"],
    url: "https://dixy.ru"
  },
  {
    name: "Дикси — Мясницкая",
    category: "shop",
    discount: "−5%",
    details: "Скидка 5% студентам по будням в первой половине дня при предъявлении карты москвича.",
    address: "ул. Мясницкая, 22, стр. 1",
    lat: 55.7628, lng: 37.6358,
    who: ["vuz", "college"],
    url: "https://dixy.ru"
  },
  {
    name: "Мясницкий ряд — Маросейка",
    category: "shop",
    discount: "−7%",
    details: "Скидка по карте москвича (социальной карте студента).",
    address: "ул. Маросейка, 6-8, стр. 1",
    lat: 55.7572, lng: 37.6368,
    who: ["vuz", "college"],
    url: "https://kolbasa.ru"
  },
  {
    name: "Мясницкий ряд — Таганская",
    category: "shop",
    discount: "−7%",
    details: "Скидка 7% студентам по карте москвича.",
    address: "ул. Таганская, 1, стр. 1",
    lat: 55.7411, lng: 37.6542,
    who: ["vuz", "college"],
    url: "https://kolbasa.ru"
  },
  {
    name: "Копи.ру (Копирка) — Покровка",
    category: "shop",
    discount: "−10%",
    details: "Скидка 10% студентам на печать чертежей, курсовых, дипломов и копирование по студенческому.",
    address: "ул. Покровка, 1/13/6, стр. 2",
    lat: 55.7575, lng: 37.6395,
    who: ["vuz", "college"],
    url: "https://kopirka.ru"
  },
  {
    name: "Копи.ру (Копирка) — Бауманская",
    category: "shop",
    discount: "−10%",
    details: "Скидка студентам 10% на распечатку и переплёт.",
    address: "ул. Бауманская, 33/2, стр. 1",
    lat: 55.7721, lng: 37.6788,
    who: ["vuz", "college"],
    url: "https://kopirka.ru"
  },
  {
    name: "Московский Дом Книги на Арбате",
    category: "shop",
    discount: "−10%",
    details: "Скидка до 10% студентам на учебники, канцтовары и художественную литературу по студенческому.",
    address: "ул. Новый Арбат, 8",
    lat: 55.7525, lng: 37.5962,
    who: ["vuz", "college"],
    url: "https://mdk-arbat.ru"
  },
  {
    name: "Леонардо — Авиапарк",
    category: "shop",
    discount: "−10%",
    details: "По понедельникам с 10:00 до 13:00 скидка 10% по студенческому билету.",
    address: "Ходынский б-р, 4, ТРЦ «Авиапарк»",
    lat: 55.790231, lng: 37.531289,
    who: ["vuz", "college"],
    url: "https://leonardo.ru/"
  },
  {
    name: "Леонардо — Европейский",
    category: "shop",
    discount: "−10%",
    details: "По понедельникам с 10:00 до 13:00 скидка 10% по студенческому билету.",
    address: "пл. Киевского Вокзала, 2",
    lat: 55.74450, lng: 37.56630,
    who: ["vuz", "college"],
    url: "https://leonardo.ru/"
  },
  {
    name: "Читай-город — Охотный Ряд",
    category: "shop",
    discount: "−15%",
    details: "Постоянная студенческая скидка 15% на книги и канцелярию.",
    address: "Манежная пл., 1, стр. 2",
    lat: 55.75520, lng: 37.61330,
    who: ["vuz", "college"],
    url: "https://www.chitai-gorod.ru/"
  },
  {
    name: "Улыбка радуги — Таганская",
    category: "shop",
    discount: "−10%",
    details: "Скидка 10% студентам в розничных магазинах по будням после 15:00.",
    address: "Таганская, 31/22",
    lat: 55.739748, lng: 37.670681,
    who: ["vuz", "college"],
    url: "https://www.r-ulybka.ru/"
  },

  // ---------- Кофе и Еда ----------
  {
    name: "Кофейня ROCKETS",
    category: "food",
    discount: "−15%",
    details: "Скидка 15% для студентов на спешелти кофе и десерты по студенческому билету.",
    address: "ул. Валовая, 35",
    lat: 55.7299, lng: 37.6295,
    who: ["vuz", "college"],
    url: "https://rockets.coffee"
  },
  {
    name: "COSMIC LATTE",
    category: "food",
    discount: "−15%",
    details: "Скидка 15% на всё меню по студенческому билету.",
    address: "ул. Яузская, 1/15, стр. 3",
    lat: 55.7501, lng: 37.6416,
    who: ["vuz", "college"]
  },
  {
    name: "Кофейня «Вспышка»",
    category: "food",
    discount: "−15%",
    details: "Скидка студентам на кофе и выпечку при предъявлении студенческого билета.",
    address: "ул. Большая Дмитровка, 32, стр. 1",
    lat: 55.7645, lng: 37.6115,
    who: ["vuz", "college"]
  },
  {
    name: "Пиццерия Maestrello — Покровка",
    category: "food",
    discount: "−15%",
    details: "Скидка 15% на всю римскую пиццу по студенческому билету.",
    address: "Покровский б-р, 6/20, стр. 1",
    lat: 55.7556, lng: 37.6458,
    who: ["vuz", "college"],
    url: "https://maestrello.pizza"
  },
  {
    name: "Бургерная KETCH UP",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% студентам на всё меню кухни в будние дни.",
    address: "ул. Кузнецкий Мост, 6/3, стр. 3",
    lat: 55.7615, lng: 37.6175,
    who: ["vuz", "college"],
    url: "https://ketchupburgers.ru"
  },
  {
    name: "Бар ZIONIST",
    category: "food",
    discount: "−20%",
    details: "Студенческая скидка 20% по студенческому билету.",
    address: "ул. Покровка, 2/1, стр. 1",
    lat: 55.7571, lng: 37.6382,
    who: ["vuz", "college"]
  },
  {
    name: "Кофейня «Здрасте»",
    category: "food",
    discount: "−15%",
    details: "Скидка 15% студентам на кофе и бранчи.",
    address: "ул. Бауманская, 11, стр. 8",
    lat: 55.7745, lng: 37.6765,
    who: ["vuz", "college"],
    url: "https://zdraste.coffee"
  },
  {
    name: "IPPO",
    category: "food",
    discount: "−15%",
    details: "Скидка 15% на рамены и японское меню по будням.",
    address: "ул. Маросейка, 9/2, стр. 1",
    lat: 55.7574, lng: 37.6375,
    who: ["vuz", "college"]
  },
  {
    name: "Ra’men — Бауманская",
    category: "food",
    discount: "−30%",
    details: "Скидка 30% студентам по будням с 16:00 до 18:00.",
    address: "Бауманская, 56/17, стр. 1",
    lat: 55.76886, lng: 37.67912,
    who: ["vuz", "college"]
  },
  {
    name: "Кафе «Му-Му» на Смоленской",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% по студенческому билету, зачётке или при оплате картой москвича.",
    address: "Карманицкий пер., 9",
    lat: 55.74829, lng: 37.58358,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru"
  },
  {
    name: "Кафе «Му-Му» на Бауманской",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% по студенческому билету.",
    address: "Бауманская ул., 35/1",
    lat: 55.77169, lng: 37.67905,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru"
  },
  {
    name: "Кафе «Му-Му» на Третьяковской",
    category: "food",
    discount: "−20%",
    details: "Скидка 20% по студенческому билету.",
    address: "Климентовский пер., 10, стр. 1",
    lat: 55.74101, lng: 37.62778,
    who: ["vuz", "college"],
    from: "2026-01-25", to: "2026-12-31",
    url: "https://www.cafemumu.ru"
  },
  {
    name: "#FARШ — Никольская",
    category: "food",
    discount: "−20%",
    details: "Постоянная студенческая скидка 20% по студаку.",
    address: "Никольская ул., 12",
    lat: 55.75950, lng: 37.62530,
    who: ["vuz", "college"],
    url: "https://farshburger.ru/"
  },
  {
    name: "#FARШ — Большая Серпуховская",
    category: "food",
    discount: "−20%",
    details: "Постоянная студенческая скидка 20% по студаку.",
    address: "Большая Серпуховская ул., 17с1",
    lat: 55.7232, lng: 37.6242,
    who: ["vuz", "college"],
    url: "https://farshburger.ru/"
  },
  {
    name: "#FARШ — Атриум",
    category: "food",
    discount: "−20%",
    details: "Постоянная студенческая скидка 20% по студаку.",
    address: "Земляной Вал ул., 33, ТЦ «Атриум»",
    lat: 55.7587, lng: 37.6595,
    who: ["vuz", "college"],
    url: "https://farshburger.ru/"
  }
];