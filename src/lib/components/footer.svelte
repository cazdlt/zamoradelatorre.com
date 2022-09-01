<script lang="ts">
	import { site } from '$lib/config';
	import Socials from './socials.svelte';
	const current_year = new Date().getFullYear();
</script>

<footer class="text-center h-auto text-xs px-4">
	<hr />
	<Socials />
	<div class="flex flex-col space-y-1">
		<span>
			{site.author.fullName}, {current_year}.
			<a class="text-secondary" href="/contacto"> {site.author.email} </a>
		</span>
		<span>
			Basado en:
			<a href="http://github.com/renyuanz/leonids/" target="_blank" rel="noopener noreferrer">
				leonids theme.
			</a>

			Usando
			<a
				class="inline-block text-[#ff3e00]"
				href="https://kit.svelte.dev/"
				target="_blank"
				rel="noopener noreferrer"
			>
				SvelteKit.
			</a>
		</span>
	</div>
</footer>
