<script>
	import { page } from '$app/stores';
</script>

<div class="text-center flex place-content-center flex-col h-screen">
	<h1 class="text-8xl text-primary font-mono">{$page.status}</h1>
	<p class="font-mono">{$page.error?.message}</p>
	<a href="/" class="text-secondary hover:brightness-150 my-8">please go back home</a>
</div>
