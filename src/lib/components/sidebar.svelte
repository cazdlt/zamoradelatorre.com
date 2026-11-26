<script lang="ts">
	import SidebarPageList from './sidebarPageList.svelte';
	import { site, pages } from '#lib/data/site.ts';
	import { lang } from '#lib/stores/lang.ts';

	const mainPages = pages.filter((p) => p.mainSidebar);
	const subpages = pages.filter((p) => !p.mainSidebar);
</script>

<aside
	class="flex flex-col bg-light min-h-full px-8 py-6 lg:py-16 lg:items-end justify-center text-center lg:text-right"
>
	<a href="/" class="text-3xl font-normal text-primary my-2">
		{site.author.name.toLowerCase()}
	</a>
	{#if site.author.job}
		<span class="text-sm text-dark/70">{site.author.job[$lang].toLowerCase()}</span>
	{/if}
	<nav aria-label="Primary">
		<SidebarPageList pages={mainPages} />
		<SidebarPageList pages={subpages} />
	</nav>
</aside>
