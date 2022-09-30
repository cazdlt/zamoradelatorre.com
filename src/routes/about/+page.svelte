<script lang="ts">
	import PageTitle from '$lib/components/pageTitle.svelte';
	import { about } from '$lib/data/about';

	const { descriptionItems, learning, summary } = about;

	const getFrase = async () => {
		let response = await fetch('/api/whatTheySay');
		let result = await response.json();
		return result;
	};

	let whatTheySayPromise: Promise<any>;
	const handleButton = () => {
		whatTheySayPromise = getFrase();
	};
</script>

<div class="m-4 md:m-12">
	<PageTitle title="About" />
	<div class="italic">{summary}</div>

	<div>
		<ul class="list-disc list-inside p-4">
			{#each descriptionItems as description}
				<li>{description}</li>
			{/each}
		</ul>
	</div>

	<div>
		<div class="font-bold text-2xl py-4">Aprendiendo</div>
		{#each learning as skill}
			<span class="font-bold text-lg">{skill.what}</span>
			<ul class="list-disc list-inside px-4">
				{#each skill.why as idea}
					<li>{@html idea}</li>
				{/each}
			</ul>
		{/each}
	</div>

	<div class="w-full text-center pt-8">
		<button on:click={handleButton} class="bg-secondary text-white px-6 py-2 rounded text-md">
			{#if !whatTheySayPromise}
				¿Qué dicen de mí?
			{:else}
				¿Qué más?
			{/if}
		</button>
		{#if !!whatTheySayPromise}
		<div class="h-8 pt-6">
			{#await whatTheySayPromise}
				...
			{:then whatTheySay}
				{#if !!whatTheySay}
					{whatTheySay.frase}
				{/if}
			{:catch error}
				<span class="text-red-600">{error.message}</span>
			{/await}
		</div>
		{/if}
	</div>
</div>
