<script lang="ts">
	import { site } from '#lib/data/site.ts';
	import Fa from 'svelte-fa';
	import {
		faLinkedinIn,
		faLastfm,
		faGithub,
		faSpotify,
		faTwitter,
		faWhatsapp
	} from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';

	let { exclude = [] }: { exclude?: string[] } = $props();

	type SocialConfig = {
		label: string;
		logo: IconDefinition;
		url: (user: string) => string;
		external: boolean;
	};

	const socialMapping: Record<string, SocialConfig> = {
		linkedin: {
			label: 'LinkedIn',
			logo: faLinkedinIn,
			url: (user) => `https://www.linkedin.com/in/${user}/`,
			external: true
		},
		lastfm: {
			label: 'Last.fm',
			logo: faLastfm,
			url: (user) => `https://www.last.fm/user/${user}`,
			external: true
		},
		github: {
			label: 'GitHub',
			logo: faGithub,
			url: (user) => `https://github.com/${user}`,
			external: true
		},
		spotify: {
			label: 'Spotify',
			logo: faSpotify,
			url: (user) => `https://open.spotify.com/user/${user}`,
			external: true
		},
		twitter: {
			label: 'Twitter',
			logo: faTwitter,
			url: (user) => `https://twitter.com/${user}`,
			external: true
		},
		whatsapp: {
			label: 'WhatsApp',
			logo: faWhatsapp,
			url: (phone) => `https://wa.me/${phone}`,
			external: true
		},
		mail: {
			label: 'Contact',
			logo: faEnvelope,
			url: () => '/contact',
			external: false
		}
	};

	let entries = $derived(
		Object.entries(site.author.socials).filter(
			([social]) => !exclude.includes(social) && social in socialMapping
		)
	);
</script>

{#each entries as [social, user] (social)}
	{@const config = socialMapping[social]}
	<a
		href={config.url(user)}
		target={config.external ? '_blank' : undefined}
		rel={config.external ? 'noreferrer' : undefined}
		aria-label={config.label}
		title={config.label}
		class="transition-colors hover:text-secondary"
	>
		<Fa icon={config.logo} />
	</a>
{/each}
