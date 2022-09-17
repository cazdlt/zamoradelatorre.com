type Microreview = {
	album: string;
	artist: string;
	cover: string;
	year: number;
	score: number;
	review: string;
	genres: string[];
	date: string;
};


const reviews2021: Microreview[] = [
	{
		album: 'Voltaje Raizal',
		artist: 'Rizomagic',
		cover: 'voltaje raizal.jpg',
		year: 2020,
		score: 6,
		review: 'Música tropical colombiana pero el único instrumento en el mundo es un Nintendo 64',
		genres: ['Cumbia', 'Electrónica'],
		date: 'Enero 10'
	},
	{
		album: 'West of Eden',
		artist: 'HMLTD',
		cover: 'west of eden.jpg',
		year: 2020,
		score: 4,
		review: 'Ingleses dramáticos',
		genres: ['Glam Rock', 'Pop'],
		date: 'Enero 11'
	},
	{
		album: 'Sextant',
		artist: 'Herbie Hancock',
		cover: 'sextant.jpg',
		year: 1973,
		score: 8,
		review: 'Publicado en 1973 pero grabado en 2973',
		genres: ['Jazz Funk'],
		date: 'Enero 12'
	},
	{
		album: 'Cumbias Chichadelicas: Peruvian Psychedelic Chicha',
		artist: 'Varios',
		cover: 'chicha.webp',
		year: 2014,
		score: 5,
		review: 'Kusa',
		genres: ['Cumbia Peruana', 'Chicha'],
		date: 'Enero 12'
	},
	{
		album: 'songs',
		artist: 'Adrianne Lenker',
		cover: 'songs.webp',
		year: 2020,
		score: 9,
		review: 'Moscas en la casa',
		genres: ['Folk', 'Cantautor'],
		date: 'Enero 14'
	},
	{
		album: 'PONG',
		artist: 'Piel Camaleón',
		cover: 'pong.webp',
		year: 2020,
		score: 6,
		review: '*Dies from cringe (while dancing)*',
		genres: ['Funky Pop'],
		date: 'Enero 15'
	},
	{
		album: 'Circles',
		artist: 'Mac Miller',
		cover: 'circles.webp',
		year: 2020,
		score: 8,
		review: 'Muy triste pero todo bien',
		genres: ['Mellow Pop'],
		date: 'Enero 20'
	},
	{
		album: 'Shabrang',
		artist: 'Sevdaliza',
		cover: 'shabrang.webp',
		year: 2020,
		score: 8,
		review: 'Autotuned bliss',
		genres: ['Art Pop', 'Trip-Hop'],
		date: 'Enero 20'
	},
	{
		album: 'Canciones Crudas',
		artist: 'La Muchacha',
		cover: 'canciones crudas.webp',
		year: 2020,
		score: 8,
		review: 'La música que me gustaría que tocara el pana que lleva la guitarra al paseo',
		genres: ['Cantautor', 'Colombia'],
		date: 'Enero 20'
	},
	{
		album: 'Miss Colombia',
		artist: 'Lido Pimienta',
		cover: 'miss colombia.webp',
		year: 2020,
		score: 9,
		review: 'El Mal Querer en el caribe colombiano',
		genres: ['Art Pop'],
		date: 'Enero 20'
	},
	{
		album: 'Thriller',
		artist: 'Michael Jackson',
		cover: 'thriller.webp',
		year: 1982,
		score: 10,
		review: 'clásico/10',
		genres: ['Pop'],
		date: 'Enero 23'
	},
	{
		album: 'Gaiteros y Tamboleros',
		artist: 'Bajeros de la Montaña',
		cover: 'gaiteros y tamboleros.jpg',
		year: 2006,
		score: 7,
		review: 'la muerte suena bueno',
		genres: ['Cumbia', 'Gaita'],
		date: 'Enero 27'
	},
	{
		album: "Oil of Every Pearl's Un-Insides",
		artist: 'SOPHIE',
		cover: 'sophie.webp',
		year: 2018,
		score: 9,
		review:
			"Is it cold in the water? <br> (I'm swimming, I'm breathing, evaporating) <br> Is it cold in the water? <br> (I'm liquid, I'm floating into the blue)",
		genres: ['Pop', 'Glitch'],
		date: 'Enero 31'
	},
	{
		album: 'Big Fish Theory',
		artist: 'Vince Staples',
		cover: 'big fish theory.webp',
		year: 2017,
		score: 7,
		review: 'the 🐡 go hard',
		genres: ['Hip-Hop'],
		date: 'Febrero 1'
	},
	{
		album: 'We Will Always Love You',
		artist: 'The Avalanches',
		cover: 'we will always love you.webp',
		year: 2020,
		score: 8,
		review: 'a smooth multicolor experience',
		genres: ['Neo-psychedelia'],
		date: 'Febrero 10'
	},
	{
		album: 'Galguerías',
		artist: 'El Kalvo',
		cover: 'galguerias.jpg',
		year: 2020,
		score: 6,
		review: 'no más polombia',
		genres: ['Hip-Hop'],
		date: 'Febrero 15'
	},
	{
		album: 'Bitute',
		artist: 'El Kalvo',
		cover: 'bitute.jpg',
		year: 2020,
		score: 8,
		review: 'mucho mejor',
		genres: ['Hip-Hop'],
		date: 'Febrero 15'
	},
	{
		album: 'Miles',
		artist: 'Blu & Exile',
		cover: 'miles.webp',
		year: 2020,
		score: 7,
		review: 'first half: sick beats second half: sick bars',
		genres: ['Hip-Hop'],
		date: 'Febrero 20'
	},
	{
		album: 'La Hora de la Ira de la Era',
		artist: 'Sociedad para el Cuidado de uno Mismo (SCUM)',
		cover: 'lhdlidle.webp',
		year: 2020,
		score: 7,
		review: 'Geriatras Observan Nenes Oníricos, Ratas Representan a Energúmenos Animales',
		genres: ['Hip-Hop'],
		date: 'Febrero 28'
	},
	{
		album: 'After Hours',
		artist: 'The Weeknd',
		cover: 'after hours.webp',
		year: 2020,
		score: 4,
		review: 'me dijeron que era bueno',
		genres: ['R&B'],
		date: 'Marzo 3'
	},
	{
		album: 'Innervisions',
		artist: 'Stevie Wonder',
		cover: 'innervisions.webp',
		year: 1973,
		score: 8,
		review: 'almost his highest ground',
		genres: ['Soul'],
		date: 'Marzo 7'
	},
	{
		album: 'EL ÚLTIMO TOUR DEL MUNDO',
		artist: 'Bad Bunny',
		cover: 'ultimotour.webp',
		year: 2020,
		score: 7,
		review: 'book her tea',
		genres: ['Reguetón', 'Trap'],
		date: 'Marzo 8'
	},
	{
		album: 'You Will Never Know Why',
		artist: 'Sweet Trip',
		cover: 'ywnkw.webp',
		year: 2009,
		score: 8,
		review: 'noisy synthy pop with a nice bass',
		genres: ['Dream Pop'],
		date: 'Marzo 8'
	},
	{
		album: 'Hypnic Jerks',
		artist: 'The Spirit of the Beehive',
		cover: 'Hypnic Jerks.webp',
		year: 2018,
		score: 6,
		review: 'what is hypnagogic pop even supposed to mean',
		genres: ['Psychedelic Pop'],
		date: 'Abril 11'
	},
	{
		album: 'Tomboy',
		artist: 'Panda Bear',
		cover: 'tomboy.webp',
		year: 2011,
		score: 8,
		review: 'i know, i know',
		genres: ['Psychedelic Pop'],
		date: 'Abril 16'
	},
	{
		album: 'Pueblos Futuros',
		artist: 'Animal Blanco',
		cover: 'pueblos futuros.jpg',
		year: 2021,
		score: 7,
		review: 'lindo disco por uno de mis profesores favoritos en la universidad',
		genres: ['Cantautor'],
		date: 'Abril 17'
	},
	{
		album: 'Cera Perdida',
		artist: 'Frente Cumbiero',
		cover: 'cera perdida.webp',
		year: 2021,
		score: 7,
		review: 'jazz con guacharaca y bombardino',
		genres: ['Jazz', 'Cumbia'],
		date: 'Abril 26'
	},
	{
		album: 'Promises',
		artist: 'Floating Points, Pharoah Sanders & The London Symphony Orchestra',
		cover: 'promises.webp',
		year: 2021,
		score: 9,
		review: 'escuchar este disco hizo que me fuera bien durante las siguientes dos semanas',
		genres: ['Jazz'],
		date: 'Abril 29'
	},
	{
		album: 'Black Messiah',
		artist: "D'Angelo",
		cover: 'black messiah.webp',
		year: 2014,
		score: 9,
		review: 'soul delicioso',
		genres: ['Soul'],
		date: 'Mayo 14'
	},
	{
		album: 'Verdor',
		artist: 'N. Hardem',
		cover: 'verdor.webp',
		year: 2021,
		score: 9,
		review: 'nos enferman los números',
		genres: ['Hip-Hop'],
		date: 'Mayo 14'
	},
	{
		album: 'Batea',
		artist: 'Bejuco',
		cover: 'batea.webp',
		year: 2021,
		score: 7,
		review: 'música del pacífico 2021',
		genres: ['pacífico', 'currulao'],
		date: 'Mayo 27'
	},
	{
		album: 'Empyrean Isles',
		artist: 'Herbie Hancock',
		cover: 'empyrean isles.webp',
		year: 1964,
		score: 8,
		review: 'En Javeriana Estéreo: j a z z.',
		genres: ['Jazz'],
		date: 'Junio 2'
	},
	{
		album: 'SOUR',
		artist: 'Olivia Rodrigo',
		cover: 'sour.webp',
		year: 2021,
		score: 7,
		review: 'mi hermana no para de poner good 4 u y me gusta',
		genres: ['Pop', 'Rock'],
		date: 'Junio 4'
	},
	{
		album: 'Jubilee',
		artist: 'Japanese Breakfast',
		cover: 'jubilee.webp',
		year: 2021,
		score: 6,
		review:
			'nostalgia de estar escuchando psychopomp en un pueblito del magdalena medio en el 2016',
		genres: ['Indie Rock'],
		date: 'Junio 4'
	},
	{
		album: 'Euphanasia',
		artist: 'Buhodermia 夜',
		cover: 'euphanasia.webp',
		year: 2020,
		score: 4,
		review: 'el que ponga gemidos en sus canciones pierde automáticamente sus derechos humanos',
		genres: ['Hip-Hop'],
		date: 'Junio 18'
	},
	{
		album: 'Afrique Victime',
		artist: 'Mdou Moctar',
		cover: 'afrique victime.webp',
		year: 2021,
		score: 8,
		review: 'rock is alive but only in mali',
		genres: ['Desert Blues'],
		date: 'Julio 19'
	},
	{
		album: 'Punisher',
		artist: 'Phoebe Bridgers',
		cover: 'punisher.webp',
		year: 2020,
		score: 7,
		review: 'en otro estado mental este album me destruye',
		genres: ['Folk Pop'],
		date: 'Agosto 24'
	},
	{
		album: 'CALL ME IF YOU GET LOST',
		artist: 'Tyler, The Creator',
		cover: 'cmiygl.gif',
		year: 2021,
		score: 7,
		review: 'lo escuché en desorden y así me gustó',
		genres: ['Alt Hip-Hop'],
		date: 'Agosto 24'
	},
	{
		album: 'Rican Struction',
		artist: 'Ray Barretto',
		cover: 'rican struction.jpg',
		year: 1979,
		score: 8,
		review: 'durísimas las manos de este tipo',
		genres: ['Salsa'],
		date: 'Agosto 25'
	},
	{
		album: 'Cosa Nuestra',
		artist: 'Willie Colón',
		cover: 'cosa nuestra.webp',
		year: 1969,
		score: 7,
		review: 'DIRECTOR: Francis Ford Coppola',
		genres: ['Salsa'],
		date: 'Agosto 26'
	},
	{
		album: 'Gaita Negra',
		artist: 'Paíto y los Gaiteros de Punta Brava',
		cover: 'gaita negra.webp',
		year: 2007,
		score: 8,
		review: 'porque todo viene cuando se encariña a la música',
		genres: ['Gaita', 'Cumbia'],
		date: 'Agosto 26'
	},
	{
		album: 'Vol. III: Que suene la flauta',
		artist: 'Pacheco y su Charanga',
		cover: 'que suene la flauta.webp',
		year: 1962,
		score: 4,
		review: 'acuyuyé',
		genres: ['Charanga'],
		date: 'Agosto 28'
	},
	{
		album: 'Solar Power',
		artist: 'Lorde',
		cover: 'solar power.webp',
		year: 2021,
		score: 6,
		review: 'le faltó un banger pero muy tranqui y sólido',
		genres: ['Pop', 'Cantautor'],
		date: 'Septiembre 19'
	},
	{
		album: 'Yo soy Eustiquia',
		artist: 'Eustiquia Amaranto Santana',
		cover: 'yo soy eustiquia.jpg',
		year: 2021,
		score: 6,
		review: 'ese palo no lo conozco venga y muéstremelo usted',
		genres: ['Bullerengue'],
		date: 'Septiembre 22'
	},
	{
		album: 'Happier Than Ever',
		artist: 'Billie Eilish',
		cover: 'happier than ever.webp',
		year: 2021,
		score: 8,
		review: 'facilito pop aotysf',
		genres: ['Alt-Pop'],
		date: 'Septiembre 22'
	},
	{
		album: 'Apollo Sound 6',
		artist: 'Roberto Roena',
		cover: 'apollo sound 6.webp',
		year: 2021,
		score: 7,
		review: 'hace falta el que vendrá',
		genres: ['Salsa'],
		date: 'Octubre 5'
	},
	{
		album: 'Fôrça Bruta',
		artist: 'Jorge Ben Jor',
		cover: 'forca bruta.webp',
		year: 1970,
		score: 7,
		review: 'genio ben jor pero las letras muy normalitas',
		genres: ['MPB'],
		date: 'Octubre 12'
	},
	{
		album: 'Rastilho',
		artist: 'Kiko Dinucci',
		cover: 'rastilho.webp',
		year: 2020,
		score: 7,
		review: 'sambita medio pop medio experimental muy creativa',
		genres: ['Samba', 'Experimental'],
		date: 'Octubre 12'
	},
	{
		album: 'Ancestras',
		artist: 'Petrona Martínez',
		cover: 'ancestras.webp',
		year: 2021,
		score: 9,
		review: 'el que come y da, come dos veces',
		genres: ['Bullerengue', 'Jazz', 'Cumbia'],
		date: 'Octubre 21'
	},
	{
		album: 'Almas Conectadas',
		artist: 'Quantic & Nidia Góngora',
		cover: 'almas conectadas.webp',
		year: 2021,
		score: 6,
		review:
			'la maestra nidia canta muy lindo pero acá la mayoría son canciones normalitas de influencia cubana',
		genres: ['Electrónica', 'Caribe'],
		date: 'Octubre 21'
	},
	{
		album: 'Donda',
		artist: 'Kanye West',
		cover: 'donda.webp',
		year: 2021,
		score: 7,
		review: 'a kanye realmente le gustó tanto Jail que la puso dos veces',
		genres: ['Hip-Hop'],
		date: 'Octubre 31'
	},
	{
		album: 'Isles',
		artist: 'Bicep',
		cover: 'isles.webp',
		year: 2021,
		score: 3,
		review: 'no sé por qué escuché esto',
		genres: ['Electrónica'],
		date: 'Noviembre 4'
	},
	{
		album: 'VOLCANIC BIRD ENEMY AND THE VOICED CONCERN',
		artist: 'LIL UGLY MANE',
		cover: 'vbeatvc.webp',
		year: 2021,
		score: 7,
		review:
			'el tipo de música que mi mamá salta cuando suena en el carro (excepto por 2 canciones)',
		genres: ['Neo-psychedelia'],
		date: 'Noviembre 5'
	},
	{
		album: 'LP!',
		artist: 'JPEGMAFIA',
		cover: 'lp.webp',
		year: 2021,
		score: 7,
		review: 'debería ser buena música de gimnasio pero no',
		genres: ['Hip-hop'],
		date: 'Noviembre 5'
	},
	{
		album: 'Metiendo Mano!',
		artist: 'Willie Colón & Rubén Blades',
		cover: 'metiendo mano.webp',
		year: 1977,
		score: 7,
		review: 'preparando la siembra definitivamente',
		genres: ['Salsa'],
		date: 'Noviembre 13'
	},
	{
		album: 'An Evening With Silk Sonic',
		artist: 'Silk Sonic',
		cover: 'silk sonic.webp',
		year: 2021,
		score: 8,
		review: 'los dos sencillos son top 10 temas del año',
		genres: ['Soul', 'Funk'],
		date: 'Noviembre 20'
	},
	{
		album: 'Sometimes I Might Be Introvert',
		artist: 'Little Simz',
		cover: 'simbi.webp',
		year: 2021,
		score: 8,
		review: 'strong vibes right here',
		genres: ['UK Hip-Hop'],
		date: 'Noviembre 22'
	},
	{
		album: 'Oddments',
		artist: 'King Gizzard & The Lizard Wizard',
		cover: 'oddments.webp',
		year: 2014,
		score: 6,
		review: 'ABABCdEFG',
		genres: ['Rock'],
		date: 'Noviembre 29'
	},
	{
		album: 'Stand for Myself',
		artist: 'Yola',
		cover: 'stand for myself.webp',
		year: 2021,
		score: 6,
		review: 'demasiado gringo para mí',
		genres: ['Soul', 'Country'],
		date: 'Diciembre 12'
	},
	{
		album: 'Mercurial World',
		artist: 'Magdalena Bay',
		cover: 'mercurial world.webp',
		year: 2021,
		score: 9,
		review: 'some real uwu stuff',
		genres: ['Dance Pop'],
		date: 'Diciembre 13'
	},
	{
		album: 'Mood Valiant',
		artist: 'Hiatus Kaiyote',
		cover: 'mood valiant.webp',
		year: 2021,
		score: 8,
		review: 'esto me hubiera encantado cuando estaba en la universidad',
		genres: ['Indie', 'Soul'],
		date: 'Diciembre 19'
	},
	{
		album: 'Heaux Tales',
		artist: 'Jazmine Sullivan',
		cover: 'heaux tales.webp',
		year: 2021,
		score: 8,
		review: 'girl boss shit done right',
		genres: ['R&B'],
		date: 'Diciembre 20'
	},
	{
		album: 'Nurture',
		artist: 'Porter Robinson',
		cover: 'nurture.webp',
		year: 2021,
		score: 5,
		review: 'definitivamente no me gusta la mayoría de electrónica',
		genres: ['Electropop'],
		date: 'Diciembre 25'
	},
	{
		album: "Navy's Reprise",
		artist: 'Navy Blue',
		cover: 'navys reprise.webp',
		year: 2021,
		score: 7,
		review: 'buen rap para poner de fondo y echar cuento cuando navy blue tire referencias cubanas',
		genres: ['Hip-hop'],
		date: 'Diciembre 25'
	},
	{
		album: 'Zeta Once',
		artist: 'Babelgam',
		cover: 'zeta once.webp',
		year: 2021,
		score: 7,
		review: 'SUBA PTE',
		genres: ['Hyperpop'],
		date: 'Diciembre 26'
	},
	{
		album: 't.i.a.p.f.y.h.',
		artist: 'Left at London',
		cover: 'tiapfyh.webp',
		year: 2021,
		score: 6,
		review: 'disquito con buenas ideas (y par temas) pero no con mis vibras',
		genres: ['Indie Rock', 'Indie Pop'],
		date: 'Diciembre 26'
	},
	{
		album: 'Templo Komodo',
		artist: 'Briela Ojeda',
		cover: 'templo komodo.webp',
		year: 2021,
		score: 9,
		review: 'El ritmo me lo dio el caudal',
		genres: ['Cantautora', 'Colombia'],
		date: 'Diciembre 26'
	}
];

export const allReviews: {[key: string]: Microreview[]} = {
	'2021': reviews2021
};
