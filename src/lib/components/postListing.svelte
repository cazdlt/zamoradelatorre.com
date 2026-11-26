<script lang="ts">
	import DateTagList from '#lib/components/dateTagList.svelte';
	import type { Post } from '#lib/types/post.d.ts';

	let { posts }: { posts: Post[] } = $props();
</script>

<div class="divide-y divide-dark/10">
	{#each posts as post (post.path)}
		<article class="py-8 first:pt-2 flex flex-col gap-2">
			<DateTagList tags={post.tags} date={post.date} />
			<a
				class="text-2xl md:text-3xl font-semibold leading-snug text-dark hover:text-primary transition-colors"
				href={post.path}
			>
				{post.title}
			</a>
			{#if post.description}
				<p class="text-base md:text-lg text-dark/65">{post.description}</p>
			{/if}

			{#if post.thumbnail}
				<a href={post.path} class="mt-3 block w-fit">
					<img
						class="max-h-72 max-w-full rounded-xs border border-dark/10 object-cover transition-opacity hover:opacity-90"
						alt={post.description}
						src={post.thumbnail}
					/>
				</a>
			{/if}
		</article>
	{/each}
</div>
