<script lang="ts">
	import { site } from '#lib/data/site.ts';
	import { lang } from '#lib/stores/lang.ts';
	import { ui } from '#lib/data/i18n.ts';
	import Socials from './socials.svelte';

	const currentYear = new Date().getFullYear();
	let copy = $derived(ui[$lang].footer);
</script>

<footer class="text-center h-auto text-xs px-4 py-2 text-dark/75">
	<hr class="border-dark/15 mb-4" />
	<div class="text-sm flex flex-row justify-center space-x-5 my-3 text-dark">
		<Socials />
	</div>
	<div class="flex flex-col space-y-1">
		<span class="font-semibold text-dark">
			© {currentYear} · {site.author.fullName}
		</span>
		<a class="text-secondary w-fit mx-auto hover:underline" href="mailto:{site.author.email}">
			{site.author.email}
		</a>
		<span>
			<a
				href="https://github.com/cazdlt/zamoradelatorre.com"
				target="_blank"
				rel="noreferrer"
				class="text-primary hover:underline"
			>
				{copy.source}
			</a>
			· {copy.basedOn}
			<a
				href="https://github.com/renyuanz/leonids/tree/leonids-jekyll"
				target="_blank"
				rel="noreferrer"
				class="text-primary hover:underline"
			>
				leonids
			</a>
			· {copy.builtWith}
			<a
				class="inline-block text-[#ff3e00] hover:underline"
				href="https://svelte.dev/docs/kit"
				target="_blank"
				rel="noreferrer"
			>
				SvelteKit
			</a>
		</span>
	</div>
</footer>
