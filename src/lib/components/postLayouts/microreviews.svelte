<script lang="ts">
	import { allReviews } from '$lib/data/reviews';
	import Fa from 'svelte-fa';
	import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
	import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
	import type { PostMetadata } from '$lib/types/post';

	export let metadata: PostMetadata;

	const reviews = allReviews[metadata.date.getFullYear().toString()].reverse();

	const getStars = (score: number) => {
		const number = Math.max(0, Math.min(10, score));
		return Array(10)
			.fill(0)
			.map((_, i) => (i < number ? faStarSolid : faStarRegular));
	};
</script>

<div class="gallery mb-16 px-4 md:px-12">
	{#each reviews as review, idx}
		<div class="w-full text-center p-4 border-b-2 border-gray-200">
			<img
				class="w-full border border-gray-100 mb-4"
				src="/img/posts/reviews/{review.cover}"
				alt="{review.album} cover"
			/>
			<div class="mb-2 text-black">
				<div class="text-2xl font-bold">{review.album}</div>
				<div class="text-xl">{review.artist} ({review.year})</div>
				<ul class="list-none uppercase text-xs font-semibold tracking-wider leading-7">
					{#each review.genres as genre}
						<li class="after:content-['/'] after:mx-2 inline-block after:last:content-[]">{genre}</li>
					{/each}
				</ul>
			</div>
			
			
			<div>{review.review}</div>
			<div>
				{#each getStars(review.score) as starIcon}
					<Fa class="inline-block my-2" icon={starIcon} />
				{/each}
			</div>
			<div class="uppercase text-gray-500 my-2 text-xs tracking-wider font-semibold">
				{review.date}
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	.gallery {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
</style>
