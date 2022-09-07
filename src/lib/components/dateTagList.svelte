<script lang="ts">
	export let tags: string[] = [];
	export let date: Date;
	import { formatInTimeZone } from 'date-fns-tz';
</script>

<div class="text-sm my-1">
	<a href="/archive/#{date.getFullYear()}" class="inline-block text-secondary hover:brightness-150">
		{formatInTimeZone(date, 'UTC', 'yyyy-MM-dd')}
	</a>
	{#if tags.length > 0}
		<span class="inline-block">•</span>
		<ul class="list-none inline-block">
			{#each tags as tag}
				<li class="tag-item inline-block">
					<a class="text-primary hover:brightness-150" href="/tags/{tag}">{tag}&nbsp</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style lang="postcss">
	.tag-item {
		&::before {
			content: '/ ';
		}

		&:first-child::before {
			content: '';
		}
	}
</style>
