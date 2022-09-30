<script lang="ts">
	import type { PageDefinition } from '$lib/types/site';
	import { pages } from '$lib/data/site';
	import { title } from '$lib/stores/title';

	type WithHome = { home: {} };
	const homePages = pages.filter((p): p is PageDefinition & WithHome => p.home !== undefined);

	title.set('Home');
</script>

<div class="home-grid xl:px-24 py-2 max-w-[1200px] mx-auto min-h-screen">
	{#each homePages as page}
		<div class="relative grid-item">
			<img alt={page.home.description} class="h-full w-full object-cover" src={page.home.img} />
			<span class="bottom-0 right-0 absolute p-1 opacity-0 text-white text-lg px-2">
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
		display: grid;
		gap: 0.5rem;
		grid-template-columns: 1fr;
		grid-auto-rows: 1fr;
		place-content: center;

		@media screen(lg) {
			grid-template-columns: 1fr 1fr;
			grid-auto-rows: auto;
		}
	}

	.grid-item {
		@media (hover: none) {
			span,
			a span {
				opacity: 1;
			}

			img {
				filter: blur(1px);
			}

			a {
				background: hsla(0, 0%, 0%, 0.5);
			}
		}

		* {
			transition: all 0.3s;
		}

		&:hover {
			img {
				filter: grayscale(100%) blur(1px);
			}

			a {
				background: hsla(0, 0%, 0%, 0.4);
			}

			span,
			a span {
				opacity: 100;
			}
		}
	}
</style>
