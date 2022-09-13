<script lang="ts">
	import { pages } from '$lib/data/site';
	import type { PageDefinition } from '$lib/types/site';
	type WithHome = { home: {} };
	const homePages = pages.filter((p): p is PageDefinition & WithHome => p.home !== undefined);
</script>

<div class="grid gap-1 place-content-center home-grid pb-2 w-full">
	{#each homePages as page}
		<div class="relative grid-item">
			<img alt={page.home.description} class="h-full w-full object-cover" src={page.home.img} />
			<span class="bottom-0 right-0 absolute p-1 opacity-0 text-white text-lg">
				{page.home.description}
			</span>

			<a
				href={page.path}
				class="w-full h-full flex items-center justify-center absolute top-0 left-0"
			>
				<span class="opacity-0 text-white font-bold text-3xl"> {page.title} </span>
			</a>
		</div>
	{/each}
</div>

<style lang="postcss">
	.home-grid {
		grid-template-columns: repeat(auto-fill, 44%);
	}

	.grid-item {
		& * {
			transition: all 0.3s;
		}

		&:hover {
			& > img {
				filter: grayscale(100%) blur(1px);
			}

			& > a {
				background: hsla(0, 0%, 0%, 0.4);
			}

			& > span,
			& > a > span {
				opacity: 100;
			}
		}
	}
</style>
