<script lang="ts">
	import { site } from '$lib/config';
	import Fa from 'svelte-fa';
	import {
		faLinkedinIn,
		faLastfm,
		faGithub,
		faSpotify,
		faTwitter
	} from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';

	type SocialMappings = {
		[key: string]: {
			logo: IconDefinition;
			url: (user: string) => string;
		};
	};
	const socialMapping: SocialMappings = {
		linkedin: {
			logo: faLinkedinIn,
			url: (user) => `https://www.linkedin.com/in/${user}/`
		},
		lastfm: {
			logo: faLastfm,
			url: (user) => `https://www.last.fm/es/user/${user}`
		},
		github: {
			logo: faGithub,
			url: (user) => `https://github.com/${user}`
		},
		spotify: {
			logo: faSpotify,
			url: (user) => `https://open.spotify.com/user/${user}`
		},
		twitter: {
			logo: faTwitter,
			url: (user) => `https://twitter.com/${user}`
		},
		mail: {
			logo: faEnvelope,
			url: (user) => '/contacto'
		}
	};
</script>

<div class="text-sm flex flex-row justify-center space-x-4 my-2">
	{#each Object.entries(site.author.socials) as [social, user]}
		<a href={socialMapping[social].url(user)} target="_blank" aria-label="social" rel="noopener">
			<Fa icon={socialMapping[social].logo} />
		</a>
	{/each}
</div>
