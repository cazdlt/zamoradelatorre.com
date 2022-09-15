<script lang="ts">
	import { reviews2021 } from '$lib/data/reviews';
	import Fa from 'svelte-fa';
	import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
	import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

	const sortedReviews = reviews2021.reverse();

	const getStars = (score: number) => {
		const number = Math.max(0, Math.min(10, score));
		return Array(10)
			.fill(0)
			.map((_, i) => (i < number ? faStarSolid : faStarRegular));
	};
</script>

<div class="gallery">
	{#each sortedReviews as review, idx}
		<div class="review">
			<img class="album-cover" src="/img/posts/reviews/{review.cover}" alt="{review.album} cover" />
			<div class="title">
				{review.artist} - {review.album} ({review.year})
			</div>
			<ul class="genre">
				{#each review.genres as genre}
					<li>{genre}</li>
				{/each}
			</ul>
			<div id="review{idx}">
				{#each getStars(review.score) as starIcon}
					<Fa icon={starIcon} />
				{/each}
			</div>
			<div class="review-text">{review.review}</div>
			<div class="review-date">{review.date}</div>
		</div>
	{/each}
</div>
