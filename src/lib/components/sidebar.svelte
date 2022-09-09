<script lang="ts">
	import SidebarPageList from './sidebarPageList.svelte';
	import { site } from '$lib/config';
	import { pages } from '$lib/config';

	const mainPages = pages.filter((p) => p.level == 0);
	const subpages = pages.filter((p) => p.level == 1);

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
