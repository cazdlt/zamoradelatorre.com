<script lang="ts">
	import type { PageData } from './$types';
	import * as _ from 'lodash-es';
	export let data: PageData;
	import { formatInTimeZone } from 'date-fns-tz/esm';
	import PageTitle from '$lib/components/pageTitle.svelte';

	const { posts } = data;
	let posts_by_year = _.groupBy(posts, (p) => p.date.getFullYear());
	let sorted_posts_by_year = Object.entries(posts_by_year)
		.map(([year, posts]) => ({
			year: parseInt(year),
			posts: _.sortBy(posts, ['date'])
		}))
		.sort((a, b) => b.year - a.year);
</script>

<div class="m-12">
	<PageTitle title="Archive" />
	<div class="timeline relative">
		{#each sorted_posts_by_year as { year, posts }}
			<div class="text-left my-8">
				<span id={year.toString()} class="year relative text-2xl font-bold px-4 text-primary">
					{year}
				</span>
				<ul class="list-none px-12">
					{#each posts as post}
						<li class="mx-4 my-2">
							<span>{formatInTimeZone(post.date, 'UTC', 'MMM dd')}</span>
							<a class="hover:brightness-150 inline-block px-4 text-secondary" href={post.path}>
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
		left: -2px;
		height: 100%;
		width: 4px;
		background: lightgray;
	}

	.year::before {
		content: ' ';
		position: absolute;
		left: 0;
		top: 50%;
		margin-left: -4px;
		margin-top: -4px;
		width: 8px;
		height: 8px;
		background: gray;
		border-radius: 50%;
	}
</style>
