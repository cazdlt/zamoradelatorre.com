<script lang="ts">
	import DateTagList from '$lib/components/dateTagList.svelte';
	import type { Post } from '$lib/types/post';
	export let posts: Post[];
</script>

<div class="flex flex-col items-center">
	{#if posts.length > 0}
		{#each posts as post}
			<div class="flex flex-col text-center my-12 items-center">
				<DateTagList tags={post.tags} date={post.date} />
				<a class="text-4xl font-bold my-1 hover:brightness-150" href={post.path}> {post.title} </a>
				<span class="text-lg my-1 text-slate-500">{post.description}</span>

				{#if post.thumbnail}
					<img class="max-w-[50%]" alt={post.description} src={post.thumbnail} />
				{/if}
			</div>
		{/each}
	{/if}
</div>
