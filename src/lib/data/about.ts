import type { Locale } from '#lib/types/site.d.ts';

export type TextRun =
	string | { em: string } | { link: { label: string; href: string; external?: boolean } };

export type FocusArea = {
	title: string;
	body: TextRun[];
};

export type AboutContent = {
	kicker: string;
	intro: TextRun[][];
	cvNote: string;
	nowHeading: string;
	now: FocusArea[];
	personalHeading: string;
	personal: string[];
	contactPrompt: string;
	contactLinkLabel: string;
};

export const about: Record<Locale, AboutContent> = {
	en: {
		kicker: 'Camilo Andrés Zamora de la Torre · Bogotá, Colombia',
		intro: [
			[
				"I'm an electronic engineer from Cali living in Bogotá. ",
				{ em: 'I never quite figured out what to study' },
				', and ended up spending 7+ years building data, ML, and software systems.'
			],
			[
				'At Mercado Libre since 2022, I started with demand forecasting and inventory optimization, moved to large-scale product matching, and now lead data strategy for training in-house LLMs. Before that I worked at Frubana, built BI systems freelance, and automated IAM security at Delta IT.'
			]
		],
		cvNote: 'For the formal timeline, education, and IEEE papers:',
		nowHeading: 'Currently',
		now: [
			{
				title: 'Self-hosting & homelab',
				body: [
					'An old laptop in my apartment runs Immich for photos, Jellyfin for movies and music, Wealthfolio for finances, and Home Assistant for lights and sensors, backed up automatically to the cloud.'
				]
			},
			{
				title: 'Personal apps',
				body: [
					'I build small tools for my own day-to-day. ',
					{
						link: {
							label: 'Strtchy',
							href: 'https://github.com/cazdlt/strtchy',
							external: true
						}
					},
					' guides my mobility routines, Telar is a local-first Markdown editor for my notes, and zamOS is the home dashboard I use to open everything.'
				]
			},
			{
				title: 'LLMs & RL',
				body: [
					'At work I focus on training data, post-training (SFT and RL), and evals. On the side I have been playing with RL agents for NES Tetris.'
				]
			},
			{
				title: 'Outside',
				body: [
					'I hunt for records, spin vinyl, practice a few instruments (',
					{ em: 'none very well' },
					'), and mess around with sample-based beats. Otherwise I am running, riding my bike on Sundays around Bogotá, lifting, trying to dance, or traveling.'
				]
			}
		],
		personalHeading: 'In short',
		personal: [
			'Lives with cats.',
			'Walks slow, gets around by bike.',
			'Speaks Spanish and English, gets by in Portuguese, and took two Japanese classes in college.'
		],
		contactPrompt: 'Say hi or send a message.',
		contactLinkLabel: 'Contact'
	},
	es: {
		kicker: 'Camilo Andrés Zamora de la Torre · Bogotá, Colombia',
		intro: [
			[
				'Soy ingeniero electrónico caleño viviendo en Bogotá. ',
				{ em: 'Nunca supe bien qué estudiar' },
				', y terminé pasando más de 7 años construyendo sistemas de datos, ML y software.'
			],
			[
				'En Mercado Libre desde 2022 arranqué con pronóstico de demanda e inventarios, pasé a matching de productos a gran escala y ahora lidero la estrategia de datos para entrenar LLMs internos. Antes trabajé en Frubana, armé sistemas de BI como freelance y automaticé seguridad IAM en Delta IT.'
			]
		],
		cvNote: 'Para la trayectoria formal, educación y publicaciones en IEEE:',
		nowHeading: 'Ahora',
		now: [
			{
				title: 'Self-hosting y homelab',
				body: [
					'Un portátil viejo en el apartamento corre Immich para fotos, Jellyfin para películas y música, Wealthfolio para finanzas y Home Assistant para luces y automatizaciones, con backups automáticos a la nube.'
				]
			},
			{
				title: 'Apps propias',
				body: [
					'Hago herramientas pequeñas para usar todos los días. ',
					{
						link: {
							label: 'Strtchy',
							href: 'https://github.com/cazdlt/strtchy',
							external: true
						}
					},
					' guía mis rutinas de movilidad, Telar es un editor local-first en Markdown para mis notas y zamOS es el dashboard desde donde abro todo.'
				]
			},
			{
				title: 'LLMs y RL',
				body: [
					'En el trabajo me enfoco en datos de entrenamiento, post-entrenamiento (SFT y RL) y evaluaciones. Por fuera, estoy probando agentes de RL para NES Tetris.'
				]
			},
			{
				title: 'Afuera',
				body: [
					'Busco discos, pongo vinilos, practico varios instrumentos (',
					{ em: 'ninguno muy bien' },
					') y cacharreo haciendo beats con samples. El resto del tiempo corro, salgo en ciclovía los domingos en Bogotá, entreno fuerza, intento bailar o viajo.'
				]
			}
		],
		personalHeading: 'En corto',
		personal: [
			'Vive con gatos.',
			'Camina lento pero se mueve en bicicleta.',
			'Habla español e inglés, se defiende en portugués y vio dos clases de japonés en la universidad.'
		],
		contactPrompt: 'Si quieres conversar, escríbeme.',
		contactLinkLabel: 'Contacto'
	}
};
