import type { Locale } from '#lib/types/site.d.ts';

export const ui: Record<
	Locale,
	{
		metaDescription: string;
		pages: {
			home: string;
			blog: string;
			projects: string;
			about: string;
			contact: string;
			archive: string;
			tags: string;
		};
		untagged: string;
		footer: {
			source: string;
			basedOn: string;
			builtWith: string;
		};
		error: {
			goHome: string;
		};
		contact: {
			intro: string;
			email: string;
			copy: string;
			copied: string;
			phone: string;
			whatsapp: string;
			whatsappCta: string;
			location: string;
			cv: string;
			socials: string;
			formTitle: string;
			nameLabel: string;
			namePlaceholder: string;
			emailLabel: string;
			emailPlaceholder: string;
			messageLabel: string;
			messagePlaceholder: string;
			send: string;
			sending: string;
			successTitle: string;
			successBody: string;
			sendAnother: string;
			errorBody: string;
		};
	}
> = {
	en: {
		metaDescription: 'Personal blog and portfolio of Andrés Zamora',
		pages: {
			home: 'Home',
			blog: 'Blog',
			projects: 'Projects',
			about: 'About',
			contact: 'Contact',
			archive: 'Archive',
			tags: 'Tags'
		},
		untagged: 'untagged',
		footer: {
			source: 'Source on GitHub',
			basedOn: 'based on',
			builtWith: 'built with'
		},
		error: {
			goHome: 'go back home'
		},
		contact: {
			intro: 'Write about data, ML, music, self-hosting, or whatever you are working on.',
			email: 'Email',
			copy: 'Copy',
			copied: 'Copied',
			phone: 'Phone',
			whatsapp: 'WhatsApp',
			whatsappCta: 'Message on WhatsApp',
			location: 'Location',
			cv: 'CV / Resume',
			socials: 'Elsewhere',
			formTitle: 'Leave a message',
			nameLabel: 'Your name',
			namePlaceholder: 'Ada Lovelace',
			emailLabel: 'Your email',
			emailPlaceholder: 'you@example.com',
			messageLabel: 'Your message',
			messagePlaceholder: 'What are you working on?',
			send: 'Send message',
			sending: 'Sending...',
			successTitle: 'Message sent.',
			successBody: 'Thanks for writing. I will get back to you soon.',
			sendAnother: 'Send another message',
			errorBody: 'Something went wrong sending the form. Please email me directly instead.'
		}
	},
	es: {
		metaDescription: 'Blog y portafolio personal de Andrés Zamora',
		pages: {
			home: 'Inicio',
			blog: 'Blog',
			projects: 'Proyectos',
			about: 'Sobre mí',
			contact: 'Contacto',
			archive: 'Archivo',
			tags: 'Etiquetas'
		},
		untagged: 'sin etiqueta',
		footer: {
			source: 'Código en GitHub',
			basedOn: 'basado en',
			builtWith: 'hecho con'
		},
		error: {
			goHome: 'volver al inicio'
		},
		contact: {
			intro: 'Escríbeme sobre datos, ML, música, self-hosting o lo que estés trabajando.',
			email: 'Correo',
			copy: 'Copiar',
			copied: 'Copiado',
			phone: 'Teléfono',
			whatsapp: 'WhatsApp',
			whatsappCta: 'Escribir por WhatsApp',
			location: 'Ubicación',
			cv: 'Hoja de vida',
			socials: 'En otros lados',
			formTitle: 'Déjame un mensaje',
			nameLabel: 'Tu nombre',
			namePlaceholder: 'Juanito Alimaña',
			emailLabel: 'Tu correo',
			emailPlaceholder: 'elmalo@gmail.com',
			messageLabel: 'Tu mensaje',
			messagePlaceholder: 'La calle es una selva de cemento',
			send: 'Enviar mensaje',
			sending: 'Enviando...',
			successTitle: 'Mensaje enviado.',
			successBody: 'Gracias por escribir. Te respondo pronto.',
			sendAnother: 'Enviar otro mensaje',
			errorBody: 'Hubo un problema al enviar el formulario. Escríbeme directo al correo.'
		}
	}
};
