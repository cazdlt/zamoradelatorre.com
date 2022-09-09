<script lang="ts">
	import { site } from '$lib/config';
	import Socials from './socials.svelte';
	const current_year = new Date().getFullYear();
</script>

<footer class="text-center h-auto text-xs px-4">
	<hr class="py-2" />
	<Socials />
	<div class="flex flex-col space-y-1">
		<span class="font-bold">
			{site.author.fullName}
		</span>
		<a class="text-secondary" href="/contact"> {site.author.email} </a>
		<span>
			Hecho en el {current_year}, basado en
			<a href="https://github.com/renyuanz/leonids/tree/leonids-jekyll" target="_blank" rel="noopener noreferrer">
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
