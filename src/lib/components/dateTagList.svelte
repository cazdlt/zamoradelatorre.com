<script lang="ts">
	import { formatIsoDate } from '#lib/utils/date.ts';

	let { tags = [], date }: { tags?: string[]; date: Date } = $props();
</script>

<div class="text-sm my-1 flex flex-wrap items-center gap-x-2 gap-y-1">
	<a href="/archive/#{date.getFullYear()}" class="text-secondary hover:underline">
		{formatIsoDate(date)}
	</a>
	{#if tags.length > 0}
		<span class="text-dark/40" aria-hidden="true">•</span>
		<ul class="list-none inline-flex flex-wrap m-0 p-0">
			{#each tags as tag (tag)}
				<li class="tag-item inline-block">
					<a class="text-primary hover:underline" href="/tags#{tag}">{tag}</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.tag-item {
		&::before {
			content: '/ ';
			margin-left: 0.35rem;
			opacity: 0.5;
		}

		&:first-child::before {
			content: '';
			margin-left: 0;
		}
	}
</style>
