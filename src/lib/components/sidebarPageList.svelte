<script lang="ts">
	import { page } from '$app/stores';
	import type { PageDefinition } from '$lib/types/page';

	export let pages: PageDefinition[];

	$: currentPath = $page.url.pathname;
	$: in_current_path = (pag: PageDefinition) => {
		if (pag.path == '/') {
			return pag.path == currentPath;
		}
		return currentPath.includes(pag.path);
	};
</script>

<ul class="list-none m-0 p-0">
	{#each pages as pag}
		{#if !pag.onlyShowIn || pag.onlyShowIn?.includes(currentPath) || in_current_path(pag)}
			<li class="nav-item inline-block text-secondary text-sm">
				<a
					class="hover:brightness-125 {in_current_path(pag) ? 'text-primary font-bold' : ''}"
					href={pag.path}>{pag.title.toLowerCase()}&nbsp</a
				>
			</li>
		{/if}
	{/each}
</ul>

<style>
	.nav-item::before {
		content: '/ ';
	}

	.nav-item:first-child::before {
		content: '';
	}
</style>
