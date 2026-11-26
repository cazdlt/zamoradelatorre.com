<script lang="ts">
	import type { PageData } from './$types';
	import { formatIsoDate } from '#lib/utils/date.ts';
	import PageTitle from '#lib/components/pageTitle.svelte';
	import { lang } from '#lib/stores/lang.ts';
	import { ui } from '#lib/data/i18n.ts';

	let { data }: { data: PageData } = $props();

	let postsByCategory = $derived.by(() => {
		const categories = [...new Set(data.posts.flatMap((p) => (p.tags ? p.tags : [null])))];
		return categories
			.map((c) => ({
				category: c ?? ui[$lang].untagged,
				posts: data.posts
					.filter((p) => (c ? p.tags?.includes(c) : !p.tags))
					.toSorted((a, b) => b.date.getTime() - a.date.getTime())
			}))
			.toSorted((a, b) => a.category.localeCompare(b.category));
	});
</script>

<div class="max-w-3xl mx-auto my-8 md:my-12 px-2">
	<PageTitle title={ui[$lang].pages.tags} />
	{#each postsByCategory as { category, posts } (category)}
		<div class="text-left my-8">
			<h2 id={category} class="text-2xl font-bold text-primary">
				{category}
			</h2>
			<ul class="list-none pl-2 md:pl-6 mt-3 space-y-2">
				{#each posts as post (post.path)}
					<li class="flex flex-wrap items-baseline gap-x-4 gap-y-0.5">
						<span class="text-sm text-dark/60 font-mono shrink-0">
							{formatIsoDate(post.date)}
						</span>
						<a class="text-secondary hover:underline" href={post.path}>
							{post.title}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
