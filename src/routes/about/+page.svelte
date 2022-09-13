<script lang="ts">
	import PageTitle from '$lib/components/pageTitle.svelte';
	import { about } from '$lib/data/about';

	const { descriptionItems, learning, summary } = about;

	const getFrase = async () => {
		let response = await fetch("/api/whatTheySay")
		let result = await response.json()
		return JSON.stringify(result);
	};

	let whatTheySayPromise: Promise<string>;
	const handleButton = () => {
		whatTheySayPromise = getFrase();
	};
</script>

<PageTitle title="About" />
<div class="italic">{summary}</div>

<div>
	<ul class="list-disc list-inside">
		{#each descriptionItems as description}
			<li>{description}</li>
		{/each}
	</ul>
</div>

<div>
	{#each learning as skill}
		<span class="font-bold">{skill.what}</span>
		<ul>
			{#each skill.why as idea}
				<li>{idea}</li>
			{/each}
		</ul>
	{/each}
</div>

<div>
	<button on:click={handleButton}> ¿Qué dicen de mí? </button>
	{#await whatTheySayPromise}
		...
	{:then whatTheySay}
		{#if !!whatTheySay}
			{whatTheySay}
		{/if}
	{:catch error}
		<p class="text-red-600">{error.message}</p>
	{/await}
</div>
