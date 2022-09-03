<script lang="ts">
	export let tags: string[] = [];
	export let date: Date;

	function formatDate(date: Date): string {
		return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
	}
</script>

<div class="text-sm my-1">
	<span class="inline-block text-secondary">{formatDate(date)}</span>

	{#if tags.length > 0}
		<span class="inline-block">•</span>
		<ul class="list-none inline-block">
			{#each tags as tag}
				<li class="tag-item inline-block">
					<a class="text-primary" href="/tags/{tag}">{tag}&nbsp</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.tag-item::before {
		content: '/ ';
	}

	.tag-item:first-child::before {
		content: '';
	}
</style>
