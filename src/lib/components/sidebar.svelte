<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { site } from '$lib/config';

	const base_url = '/';
	let pages = [
		{ title: 'home', path: base_url },
		{ title: 'blog', path: '/blog' },
		{ title: 'projects', path: '/projects' },
		{ title: 'about', path: '/about' },
		{ title: 'contact', path: '/contact' }
	];
</script>

<div class="flex flex-col justify-center bg-light min-h-full p-8 my-auto mx-0 text-right">
	<a href={base_url} class="text-3xl text-primary my-2">{site.author.name.toLowerCase()}</a>
	{#if 'job' in site.author}
		<span class="text-sm">{site.author.job?.toLowerCase()}</span>
	{/if}
	<ul class="list-none m-0 p-0">
		{#each pages as pag}
			{@const is_curr_path = $page.url.pathname == pag.path}
			<li class="nav-item inline-block text-secondary text-sm">
				<a
					class="hover:brightness-125 {is_curr_path ? 'text-primary font-bold' : ''}"
					href={pag.path}>{pag.title.toLowerCase()}&nbsp</a
				>
			</li>
		{/each}
	</ul>
</div>

<style>
	.nav-item::before {
		content: '/ ';
	}

	.nav-item:first-child::before {
		content: '';
	}
</style>
