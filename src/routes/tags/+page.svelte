<script lang="ts">
	import type { PageData } from './$types';
	import { formatIsoDate } from '#lib/utils/date.ts';
	import PageTitle from '#lib/components/pageTitle.svelte';

	let { data }: { data: PageData } = $props();

	let posts_by_category = $derived.by(() => {
		const categories = [...new Set(data.posts.flatMap((p) => (p.tags ? p.tags : [null])))];
		return categories
			.map((c) => ({
				category: c ?? 'untagged',
				posts: data.posts
					.filter((p) => (c ? p.tags?.includes(c) : !p.tags))
					.toSorted((a, b) => a.date.getTime() - b.date.getTime())
			}))
			.toSorted((a, b) => (a.category < b.category ? -1 : a.category > b.category ? 1 : 0));
	});
</script>

<div class="m-4 md:m-12">
	<PageTitle title="Tags" />
	{#each posts_by_category as { category, posts } (category)}
		<div class="text-left my-8">
			<span id={category} class="year relative text-2xl font-bold px-4 text-primary">
				{category}
			</span>
			<ul class="list-none px-4 md:px-12">
				{#each posts as post (post.path)}
					<li class="mx-4 my-2">
						<span>{formatIsoDate(post.date)}</span>
						<a class="hover:brightness-150 inline-block px-4 text-secondary" href={post.path}>
							{post.title}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
