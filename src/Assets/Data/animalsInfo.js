const animalsInfo = [
	[
		{
			id: 1,
			name: 'Свинья',
			species: 'Suidae',
			description: 'Для свиней характерно компактное телосложение и длинная морда, заканчивающаяся голым хрящевым подвижным «пятачком» — это приспособление для разрыхления земли в поисках корма. Клыки хорошо развитые, острые, изогнуты вверх.',
			image: 'https://live.staticflickr.com/136/337427290_7cac780b80.jpg',
			audio: 'https://zvukipro.com/uploads/files/2017-08/1504165344_zvuki_prirody_-_svinya.mp3'
		},
		{
			id: 2,
			name: 'Лошадь',
			species: 'Equus',
			description: 'Одомашненная лошадь выполняла большинство тяжёлой механической работы для человека до изобретения парового и электрического двигателей. Лошадь заняла доминирующее положение в транспорте, как вьючное животное, как тяга гужевого транспорта и как основное животное для верховой езды. ',
			image: 'https://live.staticflickr.com/774/20978316389_e4c3a1c776_b.jpg',
			audio: 'https://zvukipro.com/uploads/files/2017-08/1504173618_zvuk-loshadi.mp3'
		},
		{
			id: 3,
			name: 'Собака',
			species: 'Canis lupus familiaris',
			description: 'Собаки известны своими способностями к обучению, любовью к игре, социальным поведением. Выведены специальные породы собак, предназначенные для различных целей: охоты, охраны, тяги гужевого транспорта и другого, а также декоративные породы (например, болонка, пудель).',
			image: 'https://live.staticflickr.com/8292/29701666186_4afde6d565.jpg',
			audio: 'https://zvukipro.com/uploads/files/2017-08/1504162247_sobaka_-_lay_sobaki-2.mp3'
		},
		{
			id: 4,
			name: 'Кошка',
			species: 'Felis silvestris catus',
			description: 'Являясь одиночным охотником на грызунов и других мелких животных, кошка — социальное животное[6], использующее для общения широкий диапазон звуковых сигналов, а также феромоны и движения тела',
			image: 'https://live.staticflickr.com/5296/5540689257_9076fffe69_z.jpg',
			audio: 'https://zvukipro.com/uploads/files/2017-08/1504025531_myaukane_koshki_-_myaukane_koshki.mp3'
		},
		{
			id: 5,
			name: 'Овца',
			species: 'Ovis aries',
			description: 'Домашняя овца (лат. Ovis aries) — парнокопытное млекопитающее из рода баранов, семейства полорогих. Это животное уже в глубокой древности было одомашнено человеком, в основном благодаря густой шерсти и съедобному мясу.',
			image: 'https://live.staticflickr.com/3041/3079320437_7e57af97b7_z.jpg',
			audio: 'https://zvukipro.com/uploads/files/2020-03/1584098555_c031819e52088a2.mp3'
		},
		{
			id: 6,
			name: 'Курица',
			species: 'Gallus gallus',
			description: 'В настоящее время курица - самый многочисленный на Земле вид птиц. Является одомашненной формой банкивской джунглевой курицы. Летает плохо, недалеко.',
			image: 'https://live.staticflickr.com/500/32185116984_36086b43aa_b.jpg',
			audio: 'https://zvukipro.com/uploads/files/2017-09/1504777726_kachestvennyy-zvuk-kuricy-slushat-onlayn.mp3'
		}
	],
	[
		{
			id: 1,
			name: 'Лев',
			species: 'Panthera leo',
			description: 'Лев — рекордсмен по высоте в плечах среди всех кошачьих. По весу крупнейшие подвиды льва и тигра примерно сопоставимы. У львов мощные ноги, сильные челюсти, а клыки имеют длину 8 см, поэтому эти хищники способны убивать достаточно крупных животных',
			image: 'https://live.staticflickr.com/3851/15359553551_ae69be1d17.jpg',
			audio: 'https://zvukipro.com/uploads/files/2017-09/1504517217_ryk-lva.mp3'
		},
		{
			id: 2,
			name: 'Тигр',
			species: 'Panthera tigris',
			description: 'Тигр является крупнейшей и самой тяжёлой из диких кошек, но различные его подвиды сильно различаются по размерам и массе тела. Материковые подвиды тигра крупнее островных. Самыми крупными из них являются бенгальский и амурский подвиды.',
			image: 'https://live.staticflickr.com/972/42013117801_5531d145f8_z.jpg',
			audio: 'https://zvukipro.com/uploads/files/2018-11/1541407338_ryk-tigra.mp3'
		},
		{
			id: 3,
			name: 'Ягуар',
			species: 'Panthera onca',
			description: 'Основные данные относительно эволюции вида получены с помощью палеонтологических и молекулярно-филогенетических исследований. Ягуар — единственный представитель рода Panthera в Новом Свете.',
			image: 'https://live.staticflickr.com/802/40726503975_6da624da67_z.jpg',
			audio: 'https://zvukipro.com/uploads/files/2020-02/1580723510_7064bd76a556e3f.mp3'
		},
		{
			id: 4,
			name: 'Пантера',
			species: 'Panthera',
			description: 'Все представители рода — активные хищники, охотящиеся преимущественно на крупных млекопитающих, главным образом — копытных. Часто добыча превышает размеры охотника, порой в несколько раз. Охотятся скрадом и из засады (на тропах, у водопоев).',
			image: 'https://live.staticflickr.com/1863/30763793898_70ef2a9bd5_c.jpg',
			audio: 'https://zvukipro.com/uploads/files/2019-04/1555668878_panther_grunt_06.mp3'
		},
		{
			id: 5,
			name: 'Рысь',
			species: 'Lynx',
			description: 'Рысь — типичная кошка, хотя величиной с крупную собаку, которую отчасти напоминает своим укороченным телом и длинноногостью. Очень характерна голова рыси: сравнительно небольшая, округлая и очень выразительная.',
			image: 'https://live.staticflickr.com/8776/28167384213_8f0c19f0d5_z.jpg',
			audio: 'https://zvukipro.com/uploads/files/2019-02/1551343718_bobcat_sound_5.mp3'
		},
		{
			id: 6,
			name: 'Пума',
			species: 'Puma concolor',
			description: 'Пумы встречаются на разной высоте — от равнин до гор высотой 4700 м над уровнем моря, и в самых разных ландшафтах: в горных хвойных лесах, в тропических лесах, на травянистых равнинах, в пампасах, на заболоченных низменностях и вообще в любой местности, которая предоставляет им достаточное количество еды и убежище.',
			image: 'https://live.staticflickr.com/1765/42868109601_c3f1661ea8_z.jpg',
			audio: 'https://zvukipro.com/uploads/files/2019-11/1573201338_a40486dfe603297.mp3'
		}
	],
	[
		{
			id: 1,
			name: 'Антилопа',
			species: 'Antilopinae',
			description: 'У всех антилоп ноги обыкновенно довольно длинные и стройные, хвост оканчивается пучком волос, шерсть короткая и окрашена в живые цвета; у многих антилоп, как у оленей, существуют так называемые слёзные каналы под глазами.',
			image: 'https://live.staticflickr.com/5328/9650718414_1da6dd7dff_z.jpg',
			audio: 'https://zvukipro.com/uploads/files/2019-10/1570083499_klipspringer19031.mp3'
		},
		{
			id: 2,
			name: 'Лось',
			species: 'Alces',
			description: 'Лось распространён в лесной зоне Северного полушария, реже в лесотундре, лесостепи и на окраинах степной зоны. В Европе встречается в Польше, Прибалтике, Чехии, Венгрии, Белоруссии, на севере Украины, в Скандинавии и в европейской части России.',
			image: 'https://live.staticflickr.com/4374/36368205875_3043544d3a.jpg',
			audio: 'https://zvukipro.com/uploads/files/2017-08/1504022544_zvuk-losja-v-lesu.mp3'
		},
		{
			id: 3,
			name: 'Олень',
			species: 'Cervidae',
			description: 'Олени имеют богатое символическое значение и являются в мифах различных культур и народов. Часто олицетворяют благородство, величие, красоту, грацию, быстроту.',
			image: 'https://live.staticflickr.com/3289/3156865197_e6001e86d4.jpg',
			audio: 'https://zvukipro.com/uploads/files/2017-08/1504023664_blagorodnyy-olen-krik-blagorodnogo-olenya.mp3'
		},
		{
			id: 4,
			name: 'Зебра',
			species: 'Hippotigris',
			description: 'Зебру, в отличие от лошади, невозможно приручить, хотя одиночные случаи встречаются. По темпераменту полосатые лошадки сильно отличаются от своих одомашненных собратьев. В их арсенале имеются клыки и копыта, которыми они активно пользуются при возникновении малейшей угрозы.',
			image: 'https://live.staticflickr.com/4885/46341998151_624929746f_z.jpg',
			audio: 'https://zvukipro.com/uploads/files/2018-12/1544446913_zebra6.mp3'
		},
		{
			id: 5,
			name: 'Осёл',
			species: 'Equus asinus asinus',
			description: 'Ослы приспособлены к пустынным землям. В отличие от диких лошадей, дикие ослы в сухих районах ведут одиночный образ жизни и не образуют гаремов. Каждый взрослый осел устанавливает среду обитания; размножение на большой площади может осуществляться одной группой.',
			image: 'https://live.staticflickr.com/7603/16917513045_1d0c0a4425_z.jpg',
			audio: 'https://zvukipro.com/uploads/files/2019-02/1550125842_donkey-sound-2-o.mp3'
		},
		{
			id: 6,
			name: 'Лань',
			species: 'Dama dama',
			description: 'Лань предпочитает жить в лесах с многочисленными лужайками и открытыми местами, но умеет хорошо приспосабливаться к разным сферам обитания и встречается даже на острове Нордерней в Северном море.',
			image: 'https://live.staticflickr.com/5764/21726296228_5ba1225015_c.jpg',
			audio: 'https://zvukipro.com/uploads/files/2019-12/1577131400_022a-w1cdr0001444-1700a0.mp3'
		}
	],
	[
		{
			id: 1,
			name: 'Мартышки',
			species: 'Cercopithecus',
			description: 'Мартышки – это небольшие животные, хорошо развитые физически, достаточно подвижные и весьма интересные. Особый интерес представляет их сообразительность, а также невероятное любопытство.',
			image: 'https://live.staticflickr.com/4114/4880593166_725a0e105c_c.jpg',
			audio: 'https://zvukipro.com/uploads/files/2018-11/1541411058_monkey-chatter-2_z17aqavo1.mp3'
		},
		{
			id: 2,
			name: 'Горилла',
			species: 'Gorilla',
			description: 'Рост взрослых самцов колеблется от 1,65 до 1,75 м. Встречались особи ростом 2 м; считается, что более высокого роста эти приматы не достигают. Однако известный советский зоолог Игорь Акимушкин утверждал, что рост самого крупного самца горной гориллы, убитого охотниками в начале XX века, составлял 2,32 м.',
			image: 'https://live.staticflickr.com/1789/42716116604_96024587ad_k.jpg',
			audio: 'https://zvukipro.com/uploads/files/2019-07/1562832382_eb87f0f579c3ba4.mp3'
		},
		{
			id: 3,
			name: 'Орангутан',
			species: 'Pongo',
			description: 'Орангутаны — крупнейшие древесные обезьяны. Рост взрослых самцов может достигать 1,5 м, масса тела — 50—90 и даже 100 кг. Самки значительно меньше: около 1 м ростом при весе в 30—50 кг.',
			image: 'https://live.staticflickr.com/5706/21443252268_5f404271bb_k.jpg',
			audio: 'https://zvukipro.com/uploads/files/2019-07/1562832780_odi2nji5mta4mjy3mje_quho6nz1eqs.mp3'
		},
		{
			id: 4,
			name: 'Макака',
			species: 'Macaca',
			description: 'акаки — приматы средней величины с крепким туловищем и сильными конечностями. Их густая шерсть окрашена в серо-коричневый цвет, однако порою бывает и чёрной. На продолговатой морде волосяной покров отсутствует.',
			image: 'https://live.staticflickr.com/65535/48263706731_76fab324a8_5k.jpg',
			audio: 'https://zvukipro.com/uploads/files/2020-01/1578069402_596ee2effed961d.mp3'
		},
		{
			id: 5,
			name: 'Гиббоны',
			species: 'Hylobates',
			description: 'Гиббоны (лат. Hylobates) — род человекообразных приматов, обитающих в Юго-Восточной Азии. Один из четырёх родов семейства гиббоновые. Раньше был единственным родом в этом семействе, но недавно в категорию родов были также выделены номаскусы, сиаманги и хулоки.',
			image: 'https://live.staticflickr.com/7445/9484670538_2733972a9d_z.jpg',
			audio: 'https://zvukipro.com/uploads/files/2020-02/1582036405_692202212af40b1.mp3'
		},
		{
			id: 6,
			name: 'Гамадрил',
			species: 'Papio hamadryas',
			description: 'Большая обезьяна, достигающая одного метра длины (старые самцы), причём на хвост приходится 20—25 см; самки вдвое меньше. Общий цвет волос, покрывающих тело гамадрила, серый (цвета сухой травы); у самцов длинные, оригинально расположенные волосы на голове, плечах и груди образуют нечто вроде гривы',
			image: 'https://live.staticflickr.com/8523/29207148875_58cf906c04_b.jpg',
			audio: 'https://zvuki-tut.ru/samples/Gamadril.mp3'
		}
	],
	[
		{
			id: 1,
			name: 'Зайцы',
			species: 'Lepus',
			description: 'Зайцы живут поодиночке или парами. В отличие от кроликов, зайцы не роют нор, а сооружают гнёзда в небольших ямках. Зайчата рождаются развитыми, с шерстью и открытыми глазами, и мать остаётся с ними всего 5—6 дней, а затем лишь иногда прибегает к ним; вследствие этого много зайчат гибнет от врагов.',
			image: 'https://live.staticflickr.com/4810/46713847241_018ef13ac1_3k.jpg',
			audio: 'https://zvukipro.com/uploads/files/2018-11/1542655490_lyuboznayki_-z_uki-zhi_otnyh-krik-zayca.mp3'
		},
		{
			id: 2,
			name: 'Белки',
			species: 'Sciurus',
			description: 'Одной из широко известных отличительных особенностей многих белок является их способность запасать на зиму орехи. Некоторые виды белок закапывают их в землю, другие — прячут в дуплах деревьев.',
			image: 'https://live.staticflickr.com/4109/5022023605_4b8bfff3f1_k.jpg',
			audio: 'https://zvukipro.com/uploads/files/2020-04/1588141947_persian-squirrel-calls.mp3'
		},
		{
			id: 3,
			name: 'Песец',
			species: 'Vulpes lagopus',
			description: 'Единственный представитель семейства псовых, которому свойственен выраженный сезонный диморфизм окраски. По окраске различают обычного белого (зимой — чисто-белый, летом — грязно-бурый) и голубого песца.',
			image: 'https://live.staticflickr.com/1763/42601535094_1f32930e67_b.jpg',
			audio: 'https://zvuki-tut.ru/samples/Pesecc.mp3'
		},
		{
			id: 4,
			name: 'Волк',
			species: 'Canis lupus',
			description: 'Разнообразие и диапазон частот голосовых средств волков значительно превосходят возможности абсолютного большинства животных (кроме человека и рукокрылых). Волки издают такие звуки, как вой, завывание, хныканье, ворчание, рычание, тявканье, визг, лай. Каждый звук имеет огромное количество вариаций.',
			image: 'https://live.staticflickr.com/4773/40740512342_092255b544_k.jpg',
			audio: 'https://zvukipro.com/uploads/files/2019-06/1559544955_audio_hero_wolf_digic05-01.mp3'
		},
		{
			id: 5,
			name: 'Лисица',
			species: 'Vulpes vulpes',
			description: 'Численность лисиц заметно колеблется по годам. На её состояние влияют такие факторы как количество грызунов, метеорологические условия, наличие в популяции инфекционных заболеваний.',
			image: 'https://live.staticflickr.com/8478/27932564303_f3cec82d08_4k.jpg',
			audio: 'https://zvukipro.com/uploads/files/2018-10/1539110277_zvuk-lisy-ururu.mp3'
		},
		{
			id: 6,
			name: 'Медведь',
			species: 'Ursidae',
			description: 'Обитают в самых разнообразных условиях — от степей до высокогорий, от лесов до арктических льдов, в связи с чем различаются образом жизни и способами питания. Большинство медведей обитает в равнинных или горных лесах умеренных и тропических широт, реже — на безлесных высокогорьях.',
			image: 'https://live.staticflickr.com/65535/49212698543_f4d8007a99_4k.jpg',
			audio: 'https://zvukipro.com/uploads/files/2018-10/1538581767_bear-bear.mp3'
		}
	],
	[
		{
			id: 1,
			name: 'Жираф',
			species: 'Giraffa camelopardalis',
			description: 'Шея у жирафов необычайно длинная, и это несмотря на то, что у них, как и почти у всех других млекопитающих, лишь семь шейных позвонков. Высокий рост увеличивает нагрузку на систему кровообращения, прежде всего в отношении кровоснабжения головного мозга. Поэтому сердце у жирафов особенно сильное.',
			image: 'https://live.staticflickr.com/4055/4444848296_f16d6c4195_4k.jpg',
			audio: 'https://zvukipro.com/uploads/files/2019-06/1561704378_kak-govorit-zhiraf.mp3'
		},
		{
			id: 2,
			name: 'Слон',
			species: 'Elephantidae',
			description: 'Слоны — самые крупные наземные животные на Земле. Обитают они в Юго-Восточной Азии и Африке в тропических лесах и саваннах.',
			image: 'https://live.staticflickr.com/7368/12978345353_574c730718_h.jpg',
			audio: 'https://zvukipro.com/uploads/files/2018-10/1540913446_z_uk-slona.mp3'
		},
		{
			id: 3,
			name: 'Буйвол',
			species: 'Syncerus caffer',
			description: 'Рога африканского буйвола очень своеобразны. Характерной их особенностью является то, что у взрослых быков основания рогов на лбу срастаются, образуя нечто вроде сплошного костного щита, который не всегда может пробить даже винтовочная пуля.',
			image: 'https://live.staticflickr.com/5130/5343539251_ba918da8ff_c.jpg',
			audio: 'https://zvukipro.com/uploads/files/2019-12/1577123335_6266e1214ab5f06.mp3'
		},
		{
			id: 4,
			name: 'Бегемот',
			species: 'Hippopotamus amphibius',
			description: 'Характерной особенностью бегемота является его полуводный образ жизни — бо́льшую часть времени он проводит в воде, выходя на сушу лишь ночью на несколько часов для кормёжки. Бегемот обитает только у пресных водоёмов, хотя может изредка оказываться в море.',
			image: 'https://live.staticflickr.com/7298/12029886846_5884bd3166_k.jpg',
			audio: 'https://zvukipro.com/uploads/files/2018-12/1545214257_begemot-z_uk.mp3'
		},
		{
			id: 5,
			name: 'Ленивец',
			species: 'Folivora Delsuc',
			description: 'Ленивец величиной со среднюю собаку. У него длинная жесткая шерсть, имеющая зеленоватый окрас. Такой оттенок шубе зверя придают сине-зелёные водоросли, которые поселяются в его влажной шерсти.',
			image: 'https://live.staticflickr.com/7761/18243711431_15a4aec84d_c.jpg',
			audio: 'https://zvuki-tut.ru/samples/Lenivecc.mp3'
		},
		{
			id: 6,
			name: 'Верблюд',
			species: 'Camelus',
			description: 'Эти млекопитающие хорошо приспособлены к жизни в суровой и безводной местности. У верблюдов имеются грудная, запястные, локтевые и наколенные мозоли.',
			image: 'https://live.staticflickr.com/64/197743545_eb1f9cbbc5_b.jpg',
			audio: 'https://zvuki-tut.ru/samples/Lenivecc.mp3'
		}
	]
];

export default animalsInfo;