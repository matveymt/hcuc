const translations = {
  ru: {
    logo: "Открой Россию",
    heroTitle: 'Путешествуй по <span>России</span>',
    heroSubtitle: 'Открой для себя величайшую страну мира: древние города, горные вершины, сибирскую тайгу и золотые купола.',
    heroBtn1: '🏙 Все города',
    heroBtn2: '✨ Узнать больше',
    citiesTitle: 'Города России',
    citiesSubtitle: 'Каждый город — это отдельная вселенная. Нажмите на карточку, чтобы увидеть 360° панораму и достопримечательности.',
    featuresTitle: 'Почему стоит поехать',
    featuresSubtitle: 'Россия — это страна контрастов и открытий в любое время года. Нажмите на карточку, чтобы узнать больше.',
    footerText: 'Исследуй Россию — 11 часовых поясов, 85 регионов, тысячи чудес.',
    h1: 'Достопримечательности',
    h2: 'Лучшее время для посещения',
    readMore: 'Подробнее →',
    panoramaTitle: '360° Панорама',
    panoramaHint: '🖱 Перетаскивайте карту мышью, приближайте колёсиком — исследуйте город в деталях',
    highlightsHint: '👆 Нажмите на достопримечательность, чтобы открыть её в Google Maps',
    examplesHint: '👆 Нажмите на пример, чтобы открыть его в Google Maps',
    examplesTitle: 'Примеры и места',
    panoBadge: '360° PANORAMA',
    features: [
      {
        icon: '🏛️', title: 'Богатая история',
        text: 'Более 1000 лет истории, кремли, монастыри и дворцы.',
        long: 'Россия — страна с тысячелетней историей, которая начинается от древних славянских племён и Киевской Руси. Здесь вы найдёте средневековые кремли, величественные соборы, императорские дворцы и памятники советской эпохи. Каждый регион хранит свою уникальную историю — от основания Москвы в 1147 году до освоения Сибири и космических побед XX века.',
        examples: ['Московский Кремль', 'Петропавловская крепость Санкт-Петербург', 'Троице-Сергиева лавра Сергиев Посад', 'Коломенское Москва', 'Царское Село Пушкин', 'Казанский кремль']
      },
      {
        icon: '🏔️', title: 'Природа',
        text: 'От Байкала до Эльбруса — уникальные природные ландшафты.',
        long: 'Природа России поражает своим разнообразием: от арктических льдов до субтропиков Сочи, от сибирской тайги до кавказских вершин. Здесь находится самое глубокое озеро мира, самая длинная река Европы и высочайшая гора континента. Россия — одна из немногих стран, где можно увидеть белых медведей, амурских тигров и камчатских вулканов в их естественной среде.',
        examples: ['Озеро Байкал Иркутская область', 'Эльбрус Кабардино-Балкария', 'Камчатка вулканы', 'Горы Алтай', 'Карелия озёра', 'Ленские столбы Якутия', 'Валдайский национальный парк']
      },
      {
        icon: '🎭', title: 'Культура',
        text: 'Балет, театры, музеи мирового уровня и гостеприимство.',
        long: 'Российская культура подарила миру Толстого, Достоевского, Чайковского и Кандинского. Здесь находятся одни из лучших театров и музеев планеты: Большой театр, Мариинский, Эрмитаж и Третьяковская галерея. Россия — это страна классического балета, великой литературы, знаменитой русской иконописи и гостеприимных традиций.',
        examples: ['Большой театр Москва', 'Мариинский театр Санкт-Петербург', 'Эрмитаж Санкт-Петербург', 'Третьяковская галерея Москва', 'МХТ Чехова Москва', 'Русский музей Санкт-Петербург']
      },
      {
        icon: '🍽️', title: 'Кухня',
        text: 'От сибирских пельменей до кавказских блюд и морепродуктов.',
        long: 'Русская кухня — это сытные супы, ароматная выпечка и разнообразие региональных специалитетов. Здесь можно попробовать пельмени с таёжными травами, кавказский шашлык, камчатского краба, астраханскую икру и знаменитый борщ. Каждый регион России гордится своими кулинарными традициями — от сибирских солений до дагестанских хинкалов и татарского чак-чака.',
        examples: ['Ресторан русской кухни Москва', 'Кавказская кухня Сочи', 'Камчатский краб Владивосток', 'Астраханская икра', 'Татарская кухня Казань', 'Уральские пельмени Екатеринбург']
      }
    ],
    cities: [
      {
        name: 'Москва', region: 'Столица России', hours: 'UTC+3', pop: '13 млн',
        coords: [55.7522, 37.6156],
        img: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80',
        desc: 'Столица, деловой и культурный центр страны, где древность встречается с современностью.',
        long: 'Москва — крупнейший город Европы и столица России. Здесь находятся Красная площадь, Кремль, Третьяковская галерея и более 400 музеев. Город поражает контрастом между историческими соборами и небоскрёбами Москва-Сити.',
        highlights: ['Красная площадь Москва', 'Московский Кремль', 'Третьяковская галерея Москва', 'Москва-Сити', 'ВДНХ Москва', 'Московское метро'],
        season: 'Лучшее время — май-сентябрь и декабрь (новогодние ярмарки). Зимой красиво, но холодно (-10°C).'
      },
      {
        name: 'Санкт-Петербург', region: 'Северная столица', hours: 'UTC+3', pop: '5.6 млн',
        coords: [59.9343, 30.3351],
        img: 'https://images.unsplash.com/photo-1556610961-2fecc5927171?w=800&q=80',
        desc: 'Культурная столица России с Эрмитажем, разводными мостами и белыми ночами.',
        long: 'Санкт-Петербург — город на Неве, основанный Петром I в 1703 году. Известен Эрмитажем, Петропавловской крепостью, дворцами и каналами. Летом здесь белые ночи, а зимой — сказочная атмосфера.',
        highlights: ['Эрмитаж Санкт-Петербург', 'Петропавловская крепость', 'Петергоф', 'Разводные мосты Санкт-Петербург', 'Невский проспект', 'Дворцовая площадь'],
        season: 'Идеально в июне (белые ночи) и сентябре. Зимой холодно и сыро, но красиво.'
      },
      {
        name: 'Казань', region: 'Татарстан', hours: 'UTC+3', pop: '1.3 млн',
        coords: [55.7963, 49.1088],
        img: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&q=80',
        desc: 'Столица Татарстана — символ единства культур и религий Востока и Запада.',
        long: 'Казань — один из древнейших городов России, столица Татарстана. Здесь мирно соседствуют Казанский кремль, мечеть Кул-Шариф и православные храмы. Город известен как «третья столица» России.',
        highlights: ['Казанский кремль', 'Мечеть Кул-Шариф', 'Улица Баумана Казань', 'Раифский монастырь', 'Озеро Кабан'],
        season: 'Май-сентябрь — идеально. Летом тепло (+25°C), много фестивалей.'
      },
      {
        name: 'Сочи', region: 'Краснодарский край', hours: 'UTC+3', pop: '450 тыс.',
        coords: [43.5855, 39.7231],
        img: 'https://images.unsplash.com/photo-1578922746465-3a80a228f223?w=800&q=80',
        desc: 'Главный курорт России: море, горы, субтропики и Олимпийский парк.',
        long: 'Сочи — крупнейший курортный город России на берегу Чёрного моря. Здесь можно купаться летом и кататься на лыжах зимой. Рядом — Красная Поляна, Роза Хутор и Олимпийский парк.',
        highlights: ['Красная Поляна Сочи', 'Роза Хутор', 'Олимпийский парк Сочи', 'Сочинский дендрарий', 'Сочи Парк'],
        season: 'Круглый год: летом море (+28°C), зимой — горнолыжные курорты.'
      },
      {
        name: 'Екатеринбург', region: 'Урал', hours: 'UTC+5', pop: '1.5 млн',
        coords: [56.8389, 60.6057],
        img: 'https://images.unsplash.com/photo-1602088541880-88b41f3e03a6?w=800&q=80',
        desc: 'Столица Урала — город на границе Европы и Азии, центр промышленности и искусства.',
        long: 'Екатеринбург — четвёртый по величине город России, столица Урала. Известен Храмом на Крови, Ельцин-центром, конструктивистской архитектурой и границей Европа-Азия.',
        highlights: ['Храм на Крови Екатеринбург', 'Ельцин-центр', 'Граница Европа-Азия', 'Дом Севастьянова', 'Уральские горы'],
        season: 'Июнь-август — лучший период. Зима снежная и холодная.'
      },
      {
        name: 'Владивосток', region: 'Дальний Восток', hours: 'UTC+10', pop: '600 тыс.',
        coords: [43.1155, 131.8855],
        img: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=800&q=80',
        desc: 'Тихоокеанские ворота России, город мостов и морских пейзажей.',
        long: 'Владивосток — портовый город на побережье Японского моря. Известен Золотым мостом, Русским мостом на остров Русский, маяками и морскими деликатесами. Здесь чувствуется азиатское влияние.',
        highlights: ['Золотой мост Владивосток', 'Остров Русский', 'Маяк Токаревского', 'Приморский океанариум', 'Мыс Тобизина'],
        season: 'Лето (июль-сентябрь) — тёплое море. Осень — «бархатный сезон».'
      },
      {
        name: 'Новосибирск', region: 'Сибирь', hours: 'UTC+7', pop: '1.6 млн',
        coords: [55.0084, 82.9357],
        img: 'https://images.unsplash.com/photo-1598284194978-d3b3a22e3de3?w=800&q=80',
        desc: 'Крупнейший город Сибири, научный и культурный центр за Уралом.',
        long: 'Новосибирск — третий по численности город России, столица Сибири. Известен Академгородком, Оперным театром (крупнейшим в России), зоопарком и Бугринским мостом.',
        highlights: ['Академгородок Новосибирск', 'Новосибирский оперный театр', 'Новосибирский зоопарк', 'Бугринский мост', 'Часовня Николая Новосибирск'],
        season: 'Июнь-сентябрь. Зимой — суровые морозы до -30°C.'
      },
      {
        name: 'Калининград', region: 'Балтика', hours: 'UTC+2', pop: '500 тыс.',
        coords: [54.7104, 20.4522],
        img: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=800&q=80',
        desc: 'Балтийский эксклав с европейской архитектурой и янтарными пляжами.',
        long: 'Калининград — бывший Кёнигсберг, родина философа Канта. Известен Кафедральным собором, Куршской косой, янтарными пляжами и уникальной немецкой архитектурой.',
        highlights: ['Куршская коса Калининград', 'Кафедральный собор Калининград', 'Музей янтаря', 'Дом Советов Калининград', 'Балтийское море'],
        season: 'Июнь-август — тёплое Балтийское море и пляжи.'
      }
    ]
  },
  en: {
    logo: "Discover Russia",
    heroTitle: 'Travel across <span>Russia</span>',
    heroSubtitle: 'Discover the greatest country in the world: ancient cities, mountain peaks, Siberian taiga and golden domes.',
    heroBtn1: '🏙 All Cities',
    heroBtn2: '✨ Learn More',
    citiesTitle: 'Cities of Russia',
    citiesSubtitle: 'Every city is a separate universe. Click a card to see a 360° panorama and attractions.',
    featuresTitle: 'Why You Should Visit',
    featuresSubtitle: 'Russia is a country of contrasts and discoveries in any season. Click a card to learn more.',
    footerText: 'Explore Russia — 11 time zones, 85 regions, thousands of wonders.',
    h1: 'Attractions',
    h2: 'Best Time to Visit',
    readMore: 'Read more →',
    panoramaTitle: '360° Panorama',
    panoramaHint: '🖱 Drag the map with your mouse, zoom with the wheel — explore the city in detail',
    highlightsHint: '👆 Click on an attraction to open it in Google Maps',
    examplesHint: '👆 Click on an example to open it in Google Maps',
    examplesTitle: 'Examples & Places',
    panoBadge: '360° PANORAMA',
    features: [
      {
        icon: '🏛️', title: 'Rich History',
        text: 'Over 1000 years of history, kremlins, monasteries and palaces.',
        long: 'Russia is a country with a thousand-year history, starting from ancient Slavic tribes and Kievan Rus. Here you will find medieval kremlins, majestic cathedrals, imperial palaces and monuments of the Soviet era. Every region keeps its own unique history — from the founding of Moscow in 1147 to the exploration of Siberia and the space victories of the 20th century.',
        examples: ['Moscow Kremlin', 'Peter and Paul Fortress St Petersburg', 'Trinity Lavra Sergiyev Posad', 'Kolomenskoye Moscow', 'Tsarskoye Selo Pushkin', 'Kazan Kremlin']
      },
      {
        icon: '🏔️', title: 'Nature',
        text: 'From Baikal to Elbrus — unique natural landscapes.',
        long: "Russia's nature amazes with its diversity: from Arctic ice to the subtropics of Sochi, from Siberian taiga to the Caucasus peaks. Here is the deepest lake in the world, the longest river in Europe and the highest mountain of the continent. Russia is one of the few countries where you can see polar bears, Amur tigers and Kamchatka volcanoes in their natural environment.",
        examples: ['Lake Baikal', 'Mount Elbrus', 'Kamchatka volcanoes', 'Altai Mountains', 'Karelia lakes', 'Lena Pillars Yakutia', 'Valdai National Park']
      },
      {
        icon: '🎭', title: 'Culture',
        text: 'World-class ballet, theaters, museums and hospitality.',
        long: 'Russian culture gave the world Tolstoy, Dostoevsky, Tchaikovsky and Kandinsky. Here are some of the best theaters and museums on the planet: the Bolshoi Theatre, Mariinsky Theatre, the Hermitage and the Tretyakov Gallery. Russia is a country of classical ballet, great literature, famous Russian icon painting and hospitable traditions.',
        examples: ['Bolshoi Theatre Moscow', 'Mariinsky Theatre St Petersburg', 'Hermitage Museum St Petersburg', 'Tretyakov Gallery Moscow', 'Moscow Art Theatre', 'Russian Museum St Petersburg']
      },
      {
        icon: '🍽️', title: 'Cuisine',
        text: 'From Siberian pelmeni to Caucasian dishes and seafood.',
        long: 'Russian cuisine is hearty soups, aromatic pastries and a variety of regional specialties. Here you can try pelmeni with taiga herbs, Caucasian shashlik, Kamchatka crab, Astrakhan caviar and the famous borscht. Every region of Russia is proud of its culinary traditions — from Siberian pickles to Dagestani khinkal and Tatar chak-chak.',
        examples: ['Russian cuisine restaurant Moscow', 'Caucasian cuisine Sochi', 'Kamchatka crab Vladivostok', 'Astrakhan caviar', 'Tatar cuisine Kazan', 'Ural pelmeni Yekaterinburg']
      }
    ],
    cities: [
      {
        name: 'Moscow', region: 'Capital of Russia', hours: 'UTC+3', pop: '13M',
        coords: [55.7522, 37.6156],
        img: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80',
        desc: 'The capital, business and cultural center where antiquity meets modernity.',
        long: 'Moscow is the largest city in Europe and the capital of Russia. Red Square, the Kremlin, the Tretyakov Gallery and over 400 museums are located here. The city amazes with contrast between historic cathedrals and Moscow City skyscrapers.',
        highlights: ['Red Square Moscow', 'Moscow Kremlin', 'Tretyakov Gallery Moscow', 'Moscow City', 'VDNKh Moscow', 'Moscow Metro'],
        season: 'Best time — May to September and December (New Year fairs). Winter is beautiful but cold (-10°C).'
      },
      {
        name: 'St. Petersburg', region: 'Northern Capital', hours: 'UTC+3', pop: '5.6M',
        coords: [59.9343, 30.3351],
        img: 'https://images.unsplash.com/photo-1556610961-2fecc5927171?w=800&q=80',
        desc: 'The cultural capital of Russia with the Hermitage, drawbridges and white nights.',
        long: 'St. Petersburg is a city on the Neva, founded by Peter the Great in 1703. Known for the Hermitage, Peter and Paul Fortress, palaces and canals. In summer there are white nights, in winter — a fairytale atmosphere.',
        highlights: ['Hermitage Museum St Petersburg', 'Peter and Paul Fortress', 'Peterhof Palace', 'Drawbridges St Petersburg', 'Nevsky Prospekt', 'Palace Square'],
        season: 'Perfect in June (white nights) and September. Winter is cold and damp but beautiful.'
      },
      {
        name: 'Kazan', region: 'Tatarstan', hours: 'UTC+3', pop: '1.3M',
        coords: [55.7963, 49.1088],
        img: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&q=80',
        desc: 'Capital of Tatarstan — a symbol of unity between Eastern and Western cultures.',
        long: 'Kazan is one of the oldest cities of Russia, capital of Tatarstan. The Kazan Kremlin, Kul Sharif Mosque and Orthodox churches peacefully coexist here. The city is known as the "third capital" of Russia.',
        highlights: ['Kazan Kremlin', 'Kul Sharif Mosque', 'Bauman Street Kazan', 'Raifa Monastery', 'Kaban Lake'],
        season: 'May-September is ideal. Summer is warm (+25°C), many festivals.'
      },
      {
        name: 'Sochi', region: 'Krasnodar Krai', hours: 'UTC+3', pop: '450K',
        coords: [43.5855, 39.7231],
        img: 'https://images.unsplash.com/photo-1578922746465-3a80a228f223?w=800&q=80',
        desc: 'The main resort of Russia: sea, mountains, subtropics and Olympic Park.',
        long: 'Sochi is the largest resort city in Russia on the Black Sea coast. You can swim in summer and ski in winter. Nearby are Krasnaya Polyana, Rosa Khutor and the Olympic Park.',
        highlights: ['Krasnaya Polyana Sochi', 'Rosa Khutor', 'Olympic Park Sochi', 'Sochi Arboretum', 'Sochi Park'],
        season: 'Year-round: summer sea (+28°C), winter — ski resorts.'
      },
      {
        name: 'Yekaterinburg', region: 'Ural', hours: 'UTC+5', pop: '1.5M',
        coords: [56.8389, 60.6057],
        img: 'https://images.unsplash.com/photo-1602088541880-88b41f3e03a6?w=800&q=80',
        desc: 'Capital of the Urals — a city on the border of Europe and Asia.',
        long: 'Yekaterinburg is the fourth largest city in Russia, capital of the Urals. Known for the Church on the Blood, Yeltsin Center, constructivist architecture and the Europe-Asia border.',
        highlights: ['Church on the Blood Yekaterinburg', 'Yeltsin Center', 'Europe-Asia Border', 'Sevastyanov House', 'Ural Mountains'],
        season: 'June-August is best. Winter is snowy and cold.'
      },
      {
        name: 'Vladivostok', region: 'Far East', hours: 'UTC+10', pop: '600K',
        coords: [43.1155, 131.8855],
        img: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=800&q=80',
        desc: "Russia's Pacific gateway, a city of bridges and seascapes.",
        long: 'Vladivostok is a port city on the Sea of Japan. Known for the Golden Bridge, Russky Bridge to Russky Island, lighthouses and seafood. There is a noticeable Asian influence.',
        highlights: ['Golden Bridge Vladivostok', 'Russky Island', 'Tokarevsky Lighthouse', 'Primorsky Aquarium', 'Cape Tobizina'],
        season: 'Summer (July-September) — warm sea. Autumn — "velvet season".'
      },
      {
        name: 'Novosibirsk', region: 'Siberia', hours: 'UTC+7', pop: '1.6M',
        coords: [55.0084, 82.9357],
        img: 'https://images.unsplash.com/photo-1598284194978-d3b3a22e3de3?w=800&q=80',
        desc: 'The largest city in Siberia, scientific and cultural center beyond the Urals.',
        long: 'Novosibirsk is the third most populous city in Russia, capital of Siberia. Known for Akademgorodok, the Opera Theater (largest in Russia), the zoo and Bugrinsky Bridge.',
        highlights: ['Akademgorodok Novosibirsk', 'Novosibirsk Opera Theater', 'Novosibirsk Zoo', 'Bugrinsky Bridge', 'St. Nicholas Chapel Novosibirsk'],
        season: 'June-September. Winter — severe frosts down to -30°C.'
      },
      {
        name: 'Kaliningrad', region: 'Baltic', hours: 'UTC+2', pop: '500K',
        coords: [54.7104, 20.4522],
        img: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=800&q=80',
        desc: 'Baltic exclave with European architecture and amber beaches.',
        long: 'Kaliningrad is the former Königsberg, birthplace of philosopher Kant. Known for the Cathedral, Curonian Spit, amber beaches and unique German architecture.',
        highlights: ['Curonian Spit Kaliningrad', 'Königsberg Cathedral', 'Amber Museum Kaliningrad', 'House of Soviets Kaliningrad', 'Baltic Sea'],
        season: 'June-August — warm Baltic Sea and beaches.'
      }
    ]
  },
  zh: {
    logo: "发现俄罗斯",
    heroTitle: '畅游<span>俄罗斯</span>',
    heroSubtitle: '探索世界上最伟大的国家：古老的城市、巍峨的山峰、西伯利亚针叶林和金色穹顶。',
    heroBtn1: '🏙 所有城市',
    heroBtn2: '✨ 了解更多',
    citiesTitle: '俄罗斯城市',
    citiesSubtitle: '每座城市都是一个独立的宇宙。点击卡片查看360°全景和名胜古迹。',
    featuresTitle: '为什么要去',
    featuresSubtitle: '俄罗斯是一个四季都充满对比和发现的国家。点击卡片了解更多。',
    footerText: '探索俄罗斯——11个时区、85个地区、数千个奇迹。',
    h1: '名胜古迹',
    h2: '最佳旅游时间',
    readMore: '了解更多 →',
    panoramaTitle: '360°全景',
    panoramaHint: '🖱 用鼠标拖动地图，滚轮缩放——详细探索城市',
    highlightsHint: '👆 点击名胜古迹在 Google 地图中打开',
    examplesHint: '👆 点击示例在 Google 地图中打开',
    examplesTitle: '示例与地点',
    panoBadge: '360° 全景',
    features: [
      {
        icon: '🏛️', title: '悠久历史',
        text: '千年历史，克里姆林宫、修道院和宫殿。',
        long: '俄罗斯是一个拥有千年历史的国家，从古代斯拉夫部落和基辅罗斯开始。这里有中世纪的克里姆林宫、宏伟的大教堂、帝国宫殿和苏联时代的纪念碑。每个地区都保留着自己独特的历史——从1147年莫斯科的建立，到西伯利亚的开发和20世纪的太空胜利。',
        examples: ['莫斯科克里姆林宫', '圣彼得堡彼得保罗要塞', '谢尔盖耶夫镇圣三一修道院', '莫斯科科洛缅斯科耶', '普希金城皇村', '喀山克里姆林宫']
      },
      {
        icon: '🏔️', title: '自然风光',
        text: '从贝加尔湖到厄尔布鲁士山——独特的自然景观。',
        long: '俄罗斯的自然风光以其多样性而令人惊叹：从北极冰原到索契的亚热带，从西伯利亚针叶林到高加索山峰。这里有世界上最深的湖泊、欧洲最长的河流和大陆最高的山峰。俄罗斯是少数几个可以在自然环境中看到北极熊、东北虎和堪察加火山的地方之一。',
        examples: ['伊尔库茨克贝加尔湖', '卡巴尔达-巴尔卡尔厄尔布鲁士山', '堪察加火山', '阿尔泰山', '卡累利阿湖泊', '雅库特勒拿柱', '瓦尔代国家公园']
      },
      {
        icon: '🎭', title: '文化',
        text: '世界级芭蕾舞、剧院、博物馆和热情好客。',
        long: '俄罗斯文化为世界贡献了托尔斯泰、陀思妥耶夫斯基、柴可夫斯基和康定斯基。这里有世界上最好的剧院和博物馆：大剧院、马林斯基剧院、艾尔米塔什博物馆和特列季亚科夫画廊。俄罗斯是古典芭蕾、伟大文学、著名的俄罗斯圣像画和热情好客传统的国家。',
        examples: ['莫斯科大剧院', '圣彼得堡马林斯基剧院', '圣彼得堡艾尔米塔什博物馆', '莫斯科特列季亚科夫画廊', '莫斯科契诃夫艺术剧院', '圣彼得堡俄罗斯博物馆']
      },
      {
        icon: '🍽️', title: '美食',
        text: '从西伯利亚饺子到高加索菜肴和海鲜。',
        long: '俄罗斯美食包括丰盛的汤、香气四溢的糕点和各种地区特色菜。在这里可以品尝带有泰加林草药的饺子、高加索烤肉串、堪察加蟹、阿斯特拉罕鱼子酱和著名的红菜汤。俄罗斯每个地区都以其烹饪传统为傲——从西伯利亚泡菜到印古什的饺子汤和鞑靼的恰克恰克。',
        examples: ['莫斯科俄式餐厅', '索契高加索菜', '符拉迪沃斯托克堪察加蟹', '阿斯特拉罕鱼子酱', '喀山鞑靼菜', '叶卡捷琳堡乌拉尔饺子']
      }
    ],
    cities: [
      {
        name: '莫斯科', region: '俄罗斯首都', hours: 'UTC+3', pop: '1300万',
        coords: [55.7522, 37.6156],
        img: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80',
        desc: '首都，商业和文化中心，古老与现代在此交汇。',
        long: '莫斯科是欧洲最大的城市，也是俄罗斯的首都。这里有红场、克里姆林宫、特列季亚科夫画廊和400多家博物馆。这座城市以历史大教堂和莫斯科城摩天大楼之间的对比而令人惊叹。',
        highlights: ['莫斯科红场', '莫斯科克里姆林宫', '莫斯科特列季亚科夫画廊', '莫斯科城', '莫斯科全俄展览中心', '莫斯科地铁'],
        season: '最佳时间——5月至9月和12月（新年集市）。冬天美丽但寒冷（-10°C）。'
      },
      {
        name: '圣彼得堡', region: '北方首都', hours: 'UTC+3', pop: '560万',
        coords: [59.9343, 30.3351],
        img: 'https://images.unsplash.com/photo-1556610961-2fecc5927171?w=800&q=80',
        desc: '俄罗斯文化之都，拥有艾尔米塔什博物馆、开桥和白夜。',
        long: '圣彼得堡是涅瓦河畔的城市，由彼得大帝于1703年建立。以艾尔米塔什博物馆、彼得保罗要塞、宫殿和运河而闻名。夏天有白夜，冬天有童话般的氛围。',
        highlights: ['圣彼得堡艾尔米塔什博物馆', '圣彼得堡彼得保罗要塞', '彼得霍夫宫', '圣彼得堡开桥', '涅瓦大街', '冬宫广场'],
        season: '6月（白夜）和9月最理想。冬天寒冷潮湿但美丽。'
      },
      {
        name: '喀山', region: '鞑靼斯坦', hours: 'UTC+3', pop: '130万',
        coords: [55.7963, 49.1088],
        img: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&q=80',
        desc: '鞑靼斯坦首府——东西方文化融合的象征。',
        long: '喀山是俄罗斯最古老的城市之一，鞑靼斯坦的首府。喀山克里姆林宫、库尔谢里夫清真寺和东正教教堂在此和平共处。这座城市被称为俄罗斯的"第三首都"。',
        highlights: ['喀山克里姆林宫', '库尔谢里夫清真寺', '喀山鲍曼街', '拉伊法修道院', '卡班湖'],
        season: '5月至9月最理想。夏天温暖（+25°C），节日众多。'
      },
      {
        name: '索契', region: '克拉斯诺达尔边疆区', hours: 'UTC+3', pop: '45万',
        coords: [43.5855, 39.7231],
        img: 'https://images.unsplash.com/photo-1578922746465-3a80a228f223?w=800&q=80',
        desc: '俄罗斯主要度假胜地：大海、高山、亚热带和奥林匹克公园。',
        long: '索契是俄罗斯黑海沿岸最大的度假城市。夏天可以游泳，冬天可以滑雪。附近有红波利亚纳、罗萨胡托尔和奥林匹克公园。',
        highlights: ['索契红波利亚纳', '罗萨胡托尔', '索契奥林匹克公园', '索契植物园', '索契公园'],
        season: '全年皆宜：夏天海水（+28°C），冬天——滑雪胜地。'
      },
      {
        name: '叶卡捷琳堡', region: '乌拉尔', hours: 'UTC+5', pop: '150万',
        coords: [56.8389, 60.6057],
        img: 'https://images.unsplash.com/photo-1602088541880-88b41f3e03a6?w=800&q=80',
        desc: '乌拉尔首府——位于欧亚边界的城市。',
        long: '叶卡捷琳堡是俄罗斯第四大城市，乌拉尔的首府。以滴血教堂、叶利钦中心、构成主义建筑和欧亚边界而闻名。',
        highlights: ['叶卡捷琳堡滴血教堂', '叶利钦中心', '欧亚边界', '谢瓦斯季亚诺夫宅邸', '乌拉尔山脉'],
        season: '6月至8月最佳。冬天多雪且寒冷。'
      },
      {
        name: '符拉迪沃斯托克', region: '远东', hours: 'UTC+10', pop: '60万',
        coords: [43.1155, 131.8855],
        img: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=800&q=80',
        desc: '俄罗斯的太平洋门户，桥梁和海景之城。',
        long: '符拉迪沃斯托克是日本海沿岸的港口城市。以金角湾大桥、通往俄罗斯岛的俄罗斯大桥、灯塔和海鲜而闻名。这里能感受到亚洲的影响。',
        highlights: ['符拉迪沃斯托克金角湾大桥', '俄罗斯岛', '托卡列夫斯基灯塔', '滨海海洋馆', '托比津纳海角'],
        season: '夏季（7月至9月）——温暖的海水。秋季——"天鹅绒季节"。'
      },
      {
        name: '新西伯利亚', region: '西伯利亚', hours: 'UTC+7', pop: '160万',
        coords: [55.0084, 82.9357],
        img: 'https://images.unsplash.com/photo-1598284194978-d3b3a22e3de3?w=800&q=80',
        desc: '西伯利亚最大的城市，乌拉尔以东的科学文化中心。',
        long: '新西伯利亚是俄罗斯人口第三大城市，西伯利亚的首府。以科学城、歌剧舞剧院（俄罗斯最大）、动物园和布格林斯基桥而闻名。',
        highlights: ['新西伯利亚科学城', '新西伯利亚歌剧舞剧院', '新西伯利亚动物园', '布格林斯基桥', '圣尼古拉礼拜堂'],
        season: '6月至9月。冬天——严寒低至-30°C。'
      },
      {
        name: '加里宁格勒', region: '波罗的海', hours: 'UTC+2', pop: '50万',
        coords: [54.7104, 20.4522],
        img: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=800&q=80',
        desc: '拥有欧洲建筑和琥珀海滩的波罗的海飞地。',
        long: '加里宁格勒是前柯尼斯堡，哲学家康德的故乡。以主教座堂、库尔斯沙嘴、琥珀海滩和独特的德国建筑而闻名。',
        highlights: ['加里宁格勒库尔斯沙嘴', '柯尼斯堡主教座堂', '加里宁格勒琥珀博物馆', '加里宁格勒苏维埃之家', '波罗的海'],
        season: '6月至8月——温暖的波罗的海和海滩。'
      }
    ]
  },
  es: {
    logo: "Descubre Rusia",
    heroTitle: 'Viaja por <span>Rusia</span>',
    heroSubtitle: 'Descubre el país más grande del mundo: ciudades antiguas, picos montañosos, la taiga siberiana y cúpulas doradas.',
    heroBtn1: '🏙 Todas las Ciudades',
    heroBtn2: '✨ Saber Más',
    citiesTitle: 'Ciudades de Rusia',
    citiesSubtitle: 'Cada ciudad es un universo aparte. Haz clic en una tarjeta para ver el panorama 360° y las atracciones.',
    featuresTitle: 'Por Qué Visitarla',
    featuresSubtitle: 'Rusia es un país de contrastes y descubrimientos en cualquier estación. Haz clic en una tarjeta para saber más.',
    footerText: 'Explora Rusia — 11 husos horarios, 85 regiones, miles de maravillas.',
    h1: 'Atracciones',
    h2: 'Mejor Época para Visitar',
    readMore: 'Leer más →',
    panoramaTitle: 'Panorama 360°',
    panoramaHint: '🖱 Arrastra el mapa con el ratón, amplía con la rueda — explora la ciudad en detalle',
    highlightsHint: '👆 Haz clic en una atracción para abrirla en Google Maps',
    examplesHint: '👆 Haz clic en un ejemplo para abrirlo en Google Maps',
    examplesTitle: 'Ejemplos y Lugares',
    panoBadge: 'PANORAMA 360°',
    features: [
      {
        icon: '🏛️', title: 'Rica Historia',
        text: 'Más de 1000 años de historia, kremlins, monasterios y palacios.',
        long: 'Rusia es un país con mil años de historia, desde las antiguas tribus eslavas y la Rus de Kiev. Aquí encontrarás kremlins medievales, catedrales majestuosas, palacios imperiales y monumentos de la era soviética. Cada región guarda su propia historia única — desde la fundación de Moscú en 1147 hasta la exploración de Siberia y las victorias espaciales del siglo XX.',
        examples: ['Kremlin de Moscú', 'Fortaleza de Pedro y Pablo San Petersburgo', 'Laura de la Trinidad Sérguiev Posad', 'Kolomenskoye Moscú', 'Tsárskoye Seló Pushkin', 'Kremlin de Kazán']
      },
      {
        icon: '🏔️', title: 'Naturaleza',
        text: 'Desde el Baikal hasta el Elbrús — paisajes únicos.',
        long: 'La naturaleza de Rusia asombra por su diversidad: desde el hielo del Ártico hasta los subtrópicos de Sochi, desde la taiga siberiana hasta los picos del Cáucaso. Aquí se encuentra el lago más profundo del mundo, el río más largo de Europa y la montaña más alta del continente. Rusia es uno de los pocos países donde puedes ver osos polares, tigres del Amur y volcanes de Kamchatka en su entorno natural.',
        examples: ['Lago Baikal Irkutsk', 'Monte Elbrús Kabardino-Balkaria', 'Volcanes de Kamchatka', 'Montañas de Altái', 'Lagos de Carelia', 'Columnas del Lena Yakutia', 'Parque Nacional Valdái']
      },
      {
        icon: '🎭', title: 'Cultura',
        text: 'Ballet, teatros, museos de clase mundial y hospitalidad.',
        long: 'La cultura rusa dio al mundo a Tolstói, Dostoievski, Chaikovski y Kandinsky. Aquí están algunos de los mejores teatros y museos del planeta: el Teatro Bolshói, el Mariinski, el Hermitage y la Galería Tretiakov. Rusia es un país de ballet clásico, gran literatura, famosa pintura de iconos rusos y tradiciones hospitalarias.',
        examples: ['Teatro Bolshói Moscú', 'Teatro Mariinski San Petersburgo', 'Museo Hermitage San Petersburgo', 'Galería Tretiakov Moscú', 'Teatro de Arte de Moscú', 'Museo Ruso San Petersburgo']
      },
      {
        icon: '🍽️', title: 'Cocina',
        text: 'Desde pelmeni siberianos hasta platos del Cáucaso y mariscos.',
        long: 'La cocina rusa son sopas abundantes, repostería aromática y una variedad de especialidades regionales. Aquí puedes probar pelmeni con hierbas de la taiga, shashlik del Cáucaso, cangrejo de Kamchatka, caviar de Astracán y el famoso borscht. Cada región de Rusia se enorgullece de sus tradiciones culinarias — desde los encurtidos siberianos hasta el khinkal daguestaní y el chak-chak tártaro.',
        examples: ['Restaurante de cocina rusa Moscú', 'Cocina del Cáucaso Sochi', 'Cangrejo de Kamchatka Vladivostok', 'Caviar de Astracán', 'Cocina tártara Kazán', 'Pelmeni de los Urales Ekaterimburgo']
      }
    ],
    cities: [
      {
        name: 'Moscú', region: 'Capital de Rusia', hours: 'UTC+3', pop: '13M',
        coords: [55.7522, 37.6156],
        img: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80',
        desc: 'La capital, centro de negocios y cultura donde la antigüedad se encuentra con la modernidad.',
        long: 'Moscú es la ciudad más grande de Europa y capital de Rusia. Aquí se encuentran la Plaza Roja, el Kremlin, la Galería Tretiakov y más de 400 museos. La ciudad asombra por el contraste entre catedrales históricas y rascacielos de Moscow City.',
        highlights: ['Plaza Roja Moscú', 'Kremlin de Moscú', 'Galería Tretiakov Moscú', 'Moscow City', 'VDNKh Moscú', 'Metro de Moscú'],
        season: 'Mejor época: mayo a septiembre y diciembre (ferias de Año Nuevo). El invierno es hermoso pero frío (-10°C).'
      },
      {
        name: 'San Petersburgo', region: 'Capital del Norte', hours: 'UTC+3', pop: '5.6M',
        coords: [59.9343, 30.3351],
        img: 'https://images.unsplash.com/photo-1556610961-2fecc5927171?w=800&q=80',
        desc: 'La capital cultural de Rusia con el Hermitage, puentes levadizos y noches blancas.',
        long: 'San Petersburgo es una ciudad sobre el Neva, fundada por Pedro el Grande en 1703. Famosa por el Hermitage, la Fortaleza de Pedro y Pablo, palacios y canales. En verano hay noches blancas, en invierno — una atmósfera de cuento de hadas.',
        highlights: ['Museo Hermitage San Petersburgo', 'Fortaleza de Pedro y Pablo', 'Palacio de Peterhof', 'Puentes levadizos San Petersburgo', 'Nevsky Prospekt', 'Plaza del Palacio'],
        season: 'Perfecto en junio (noches blancas) y septiembre. El invierno es frío y húmedo pero hermoso.'
      },
      {
        name: 'Kazán', region: 'Tartaristán', hours: 'UTC+3', pop: '1.3M',
        coords: [55.7963, 49.1088],
        img: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&q=80',
        desc: 'Capital de Tartaristán — símbolo de la unidad entre culturas orientales y occidentales.',
        long: 'Kazán es una de las ciudades más antiguas de Rusia, capital de Tartaristán. El Kremlin de Kazán, la mezquita Kul Sharif y las iglesias ortodoxas coexisten pacíficamente aquí. La ciudad es conocida como la "tercera capital" de Rusia.',
        highlights: ['Kremlin de Kazán', 'Mezquita Kul Sharif', 'Calle Bauman Kazán', 'Monasterio Raifa', 'Lago Kaban'],
        season: 'Mayo-septiembre es ideal. El verano es cálido (+25°C), muchos festivales.'
      },
      {
        name: 'Sochi', region: 'Krasnodar', hours: 'UTC+3', pop: '450K',
        coords: [43.5855, 39.7231],
        img: 'https://images.unsplash.com/photo-1578922746465-3a80a228f223?w=800&q=80',
        desc: 'El principal balneario de Rusia: mar, montañas, subtrópicos y Parque Olímpico.',
        long: 'Sochi es la ciudad turística más grande de Rusia en la costa del Mar Negro. Puedes nadar en verano y esquiar en invierno. Cerca están Krasnaya Polyana, Rosa Khutor y el Parque Olímpico.',
        highlights: ['Krasnaya Polyana Sochi', 'Rosa Khutor', 'Parque Olímpico Sochi', 'Arboreto de Sochi', 'Sochi Park'],
        season: 'Todo el año: mar en verano (+28°C), invierno — estaciones de esquí.'
      },
      {
        name: 'Ekaterimburgo', region: 'Urales', hours: 'UTC+5', pop: '1.5M',
        coords: [56.8389, 60.6057],
        img: 'https://images.unsplash.com/photo-1602088541880-88b41f3e03a6?w=800&q=80',
        desc: 'Capital de los Urales — ciudad en la frontera entre Europa y Asia.',
        long: 'Ekaterimburgo es la cuarta ciudad más grande de Rusia, capital de los Urales. Famosa por la Iglesia sobre la Sangre, el Centro Yeltsin, la arquitectura constructivista y la frontera Europa-Asia.',
        highlights: ['Iglesia sobre la Sangre Ekaterimburgo', 'Centro Yeltsin', 'Frontera Europa-Asia', 'Casa Sevastyanov', 'Montes Urales'],
        season: 'Junio-agosto es lo mejor. El invierno es nevado y frío.'
      },
      {
        name: 'Vladivostok', region: 'Lejano Oriente', hours: 'UTC+10', pop: '600K',
        coords: [43.1155, 131.8855],
        img: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=800&q=80',
        desc: 'La puerta del Pacífico de Rusia, ciudad de puentes y paisajes marinos.',
        long: 'Vladivostok es una ciudad portuaria en el Mar de Japón. Famosa por el Puente Dorado, el Puente Russky a la isla Russky, faros y mariscos. Aquí se siente la influencia asiática.',
        highlights: ['Puente Dorado Vladivostok', 'Isla Russky', 'Faro Tokarevsky', 'Acuario Primorsky', 'Cabo Tobizina'],
        season: 'Verano (julio-septiembre) — mar cálido. Otoño — "temporada de terciopelo".'
      },
      {
        name: 'Novosibirsk', region: 'Siberia', hours: 'UTC+7', pop: '1.6M',
        coords: [55.0084, 82.9357],
        img: 'https://images.unsplash.com/photo-1598284194978-d3b3a22e3de3?w=800&q=80',
        desc: 'La ciudad más grande de Siberia, centro científico y cultural más allá de los Urales.',
        long: 'Novosibirsk es la tercera ciudad más poblada de Rusia, capital de Siberia. Famosa por Akademgorodok, el Teatro de Ópera (el más grande de Rusia), el zoológico y el Puente Bugrinsky.',
        highlights: ['Akademgorodok Novosibirsk', 'Teatro de Ópera Novosibirsk', 'Zoológico de Novosibirsk', 'Puente Bugrinsky', 'Capilla de San Nicolás Novosibirsk'],
        season: 'Junio-septiembre. En invierno — heladas severas hasta -30°C.'
      },
      {
        name: 'Kaliningrado', region: 'Báltico', hours: 'UTC+2', pop: '500K',
        coords: [54.7104, 20.4522],
        img: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=800&q=80',
        desc: 'Exclave báltico con arquitectura europea y playas de ámbar.',
        long: 'Kaliningrado es la antigua Königsberg, cuna del filósofo Kant. Famosa por la Catedral, la Curonian Spit, playas de ámbar y arquitectura alemana única.',
        highlights: ['Curonian Spit Kaliningrado', 'Catedral de Königsberg', 'Museo del Ámbar Kaliningrado', 'Casa de los Soviets Kaliningrado', 'Mar Báltico'],
        season: 'Junio-agosto — cálido Mar Báltico y playas.'
      }
    ]
  }
};