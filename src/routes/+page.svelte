<script lang="ts">
	import type { PageDefinition } from '#lib/types/site.d.ts';
	import { pages } from '#lib/data/site.ts';
	import { title } from '#lib/stores/title.ts';
	import { lang } from '#lib/stores/lang.ts';

	type WithHome = { home: NonNullable<PageDefinition['home']> };
	const homePages = pages.filter((p): p is PageDefinition & WithHome => p.home !== undefined);

	title.reset();
</script>

<div class="home-grid xl:px-20 py-10 max-w-[1160px] mx-auto min-h-screen">
	{#each homePages as pag (pag.path)}
		<a href={pag.path} class="grid-item group relative block aspect-[4/3] overflow-hidden bg-light">
			<img
				alt={pag.home.description}
				class="h-full w-full object-cover transition-all duration-300 group-hover:grayscale"
				src={pag.home.img}
			/>
			<div class="scrim absolute inset-0 transition-opacity duration-300" aria-hidden="true"></div>
			<div class="absolute inset-x-0 bottom-0 flex items-baseline justify-between gap-2 px-4 py-3">
				<span class="text-white text-lg md:text-xl font-normal tracking-wide drop-shadow-xs">
					{pag.title[$lang]}
				</span>
				<span class="text-white/80 text-xs md:text-sm font-light drop-shadow-xs">
					{pag.home.description}
				</span>
			</div>
		</a>
	{/each}
</div>

<style>
	.home-grid {
		display: grid;
		gap: 0.6rem;
		grid-template-columns: 1fr;
		align-content: center;

		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.scrim {
		background: linear-gradient(
			to top,
			hsla(0, 0%, 0%, 0.52) 0%,
			hsla(0, 0%, 0%, 0.14) 36%,
			transparent 65%
		);
	}

	.grid-item:hover .scrim {
		background: linear-gradient(
			to top,
			hsla(0, 0%, 0%, 0.62) 0%,
			hsla(0, 0%, 0%, 0.28) 50%,
			hsla(0, 0%, 0%, 0.18) 100%
		);
	}
</style>
