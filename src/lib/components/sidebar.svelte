<script lang="ts">
	import SidebarPageList from './sidebarPageList.svelte';
	import { site, pages } from '$lib/data/site';

	const mainPages = pages.filter((p) => p.mainSidebar);
	const subpages = pages.filter((p) => !p.mainSidebar);
</script>

<div class="bg-light min-h-full px-8 my-auto">
	<div class="flex flex-col justify-center h-screen text-right">
		<a href="/" class="text-3xl text-primary my-2">{site.author.name.toLowerCase()}</a>
		{#if 'job' in site.author}
			<span class="text-sm">{site.author.job?.toLowerCase()}</span>
		{/if}
		<SidebarPageList pages={mainPages} />
		<SidebarPageList pages={subpages} />
	</div>
</div>
