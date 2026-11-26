<script lang="ts">
	import { formatIsoDate } from '#lib/utils/date.ts';

	let { tags = [], date }: { tags?: string[]; date: Date } = $props();
</script>

<div class="text-sm my-1">
	<a href="/archive/#{date.getFullYear()}" class="inline-block text-secondary hover:brightness-150">
		{formatIsoDate(date)}
	</a>
	{#if tags.length > 0}
		<span class="inline-block">•</span>
		<ul class="list-none inline-block">
			{#each tags as tag (tag)}
				<li class="tag-item inline-block">
					<a class="text-primary hover:brightness-150" href="/tags#{tag}">{tag}&nbsp</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.tag-item {
		&::before {
			content: '/ ';
		}

		&:first-child::before {
			content: '';
		}
	}
</style>
