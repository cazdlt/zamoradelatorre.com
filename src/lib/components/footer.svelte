<script lang="ts">
	import { site } from '$lib/data/site';
	import Socials from './socials.svelte';
	const current_year = new Date().getFullYear();
</script>

<footer class="text-center h-auto text-xs px-4">
	<hr class="py-2" />
	<div class="text-sm flex flex-row justify-center space-x-4 my-2">
		<Socials />
	</div>
	<div class="flex flex-col space-y-1">
		<span class="font-bold">
			{site.author.fullName}
		</span>
		<a class="text-secondary w-fit mx-auto hover:brightness-150" href="/contact">
			{site.author.email}
		</a>
		<span>
			<a href="https://github.com/cazdlt/zamoradelatorre.com" class="text-primary hover:brightness-150">
				Hecho en el {current_year}
			</a>
			, basado en
			<a
				href="https://github.com/renyuanz/leonids/tree/leonids-jekyll"
				target="_blank"
				rel="noopener noreferrer"
				class="text-primary hover:brightness-150"
			>
				leonids theme.
			</a>

			Usando
			<a
				class="inline-block text-[#ff3e00] hover:brightness-150"
				href="https://kit.svelte.dev/"
				target="_blank"
				rel="noopener noreferrer"
			>
				SvelteKit.
			</a>
		</span>
	</div>
</footer>
