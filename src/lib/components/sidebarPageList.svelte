<script lang="ts">
	import { page } from '$app/state';
	import { lang } from '#lib/stores/lang.ts';
	import type { PageDefinition } from '#lib/types/site.d.ts';

	let { pages }: { pages: PageDefinition[] } = $props();

	let currentPath = $derived(page.url.pathname);

	const inOnlyShowIn = (pag: PageDefinition) => {
		const showIn = pag.onlyShowIn?.map((p) => p.replace('/', ''));
		return showIn?.includes(currentPath.split('/')[1]);
	};

	const inCurrentPath = (pag: PageDefinition) => {
		if (pag.path === '/') {
			return pag.path === currentPath;
		}
		return currentPath.includes(pag.path);
	};
</script>

<ul class="list-none m-0 p-0">
	{#each pages as pag (pag.path)}
		{#if !pag.onlyShowIn || inOnlyShowIn(pag) || inCurrentPath(pag)}
			<li class="nav-item inline-block text-secondary text-sm">
				<a
					class="transition-colors hover:text-primary {inCurrentPath(pag)
						? 'text-primary font-semibold'
						: ''}"
					href={pag.path}
				>
					{pag.title[$lang].toLowerCase()}
				</a>
			</li>
		{/if}
	{/each}
</ul>

<style>
	.nav-item {
		&::before {
			content: '/ ';
			margin-left: 0.25rem;
			opacity: 0.6;
		}

		&:first-child::before {
			content: '';
			margin-left: 0;
		}
	}
</style>
