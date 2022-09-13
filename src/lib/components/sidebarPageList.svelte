<script lang="ts">
	import { page } from '$app/stores';
	import type { PageDefinition } from '$lib/types/site';

	export let pages: PageDefinition[];

	$: inOnlyShowIn = (pag: PageDefinition) => {
		let showIn = pag.onlyShowIn?.map((p) => p.replace('/', ''));
		return showIn?.includes(currentPath.split('/')[1]);
	};

	$: currentPath = $page.url.pathname;
	$: inCurrentPath = (pag: PageDefinition) => {
		if (pag.path == '/') {
			return pag.path == currentPath;
		}
		return currentPath.includes(pag.path);
	};
</script>

<ul class="list-none m-0 p-0">
	{#each pages as pag}
		{#if !pag.onlyShowIn || inOnlyShowIn(pag) || inCurrentPath(pag)}
			<li class="nav-item inline-block text-secondary text-sm">
				<a
					class="hover:brightness-150 {inCurrentPath(pag) ? 'text-primary font-bold' : ''}"
					href={pag.path}
				>
					{pag.title.toLowerCase()}&nbsp
				</a>
			</li>
		{/if}
	{/each}
</ul>

<style lang="postcss">
	.nav-item {
		&::before {
			content: '/ ';
		}

		&:first-child::before {
			content: '';
		}
	}
</style>
