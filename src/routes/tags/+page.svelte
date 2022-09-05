<script lang="ts">
	import type { PageData } from './$types';
	import * as _ from 'lodash-es';
	export let data: PageData;
	import { formatInTimeZone } from 'date-fns-tz';

	let { blog, projects } = data;
	const posts = blog.concat(projects);
	const categories = _.uniq(posts.map((p) => (p.tags ? p.tags : null)).flat());
	const posts_by_category = _.sortBy(
		categories.map((c) => ({
			category: c ?? 'untagged',
			posts: _.sortBy(
				posts.filter((p) => (c ? p.tags?.includes(c) : !p.tags)),
				['date']
			)
		})),
		['category']
	);
</script>

<div class="my-12 mx-12">
	<h1 class="text-4xl font-bold my-8">Tags</h1>
	{#each posts_by_category as { category, posts }}
		<div class="text-left my-8">
			<span id={category} class="year relative text-2xl font-bold px-4 text-primary">
				{category}
			</span>
			<ul class="list-none px-12">
				{#each posts as post}
					<li class="mx-4 my-2">
						<span>{formatInTimeZone(post.date, 'UTC', 'yyyy-MM-dd')}</span>
						<a class="hover:brightness-150 inline-block px-4 text-secondary" href={post.path}>
							{post.title}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
