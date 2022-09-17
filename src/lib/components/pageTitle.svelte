<script lang="ts">
	import { title as headTitle } from '$lib/stores/title';
	export let title: string;
	headTitle.set(title);
</script>

<h1 class="text-4xl font-bold my-8">{title}</h1>
