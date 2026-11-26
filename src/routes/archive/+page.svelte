<script lang="ts">
	import type { PageData } from './$types';
	import { formatMonthDay } from '#lib/utils/date.ts';
	import PageTitle from '#lib/components/pageTitle.svelte';
	import { lang } from '#lib/stores/lang.ts';
	import { ui } from '#lib/data/i18n.ts';

	let { data }: { data: PageData } = $props();

	let sortedPostsByYear = $derived.by(() => {
		const postsByYear = Object.groupBy(data.posts, (p) => p.date.getFullYear());
		return Object.entries(postsByYear)
			.map(([year, posts]) => ({
				year: parseInt(year),
				posts: (posts ?? []).toSorted((a, b) => b.date.getTime() - a.date.getTime())
			}))
			.toSorted((a, b) => b.year - a.year);
	});
</script>

<div class="max-w-3xl mx-auto my-8 md:my-12 px-2">
	<PageTitle title={ui[$lang].pages.archive} />
	<div class="timeline relative pl-4">
		{#each sortedPostsByYear as { year, posts } (year)}
			<div class="text-left my-8">
				<span id={year.toString()} class="year relative text-2xl font-bold pl-4 text-primary">
					{year}
				</span>
				<ul class="list-none pl-4 md:pl-8 mt-3 space-y-2">
					{#each posts as post (post.path)}
						<li class="flex flex-wrap items-baseline gap-x-4 gap-y-0.5">
							<span class="text-sm text-dark/60 w-16 shrink-0">
								{formatMonthDay(post.date, $lang)}
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
</div>

<style>
	.timeline::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 3px;
		background: color-mix(in srgb, var(--dark-color) 18%, transparent);
	}

	.year::before {
		content: '';
		position: absolute;
		left: -1rem;
		top: 50%;
		margin-left: -3.5px;
		margin-top: -5px;
		width: 10px;
		height: 10px;
		background: var(--primary-color);
		border-radius: 50%;
	}
</style>
