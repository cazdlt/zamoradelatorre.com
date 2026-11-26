<script lang="ts">
	import '#lib/styles/prism-theme.css';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

{@render children()}

<style>
	:global {
		h1,
		h2 {
			.icon-link {
				position: relative;
			}

			.icon-link::before {
				content: '#';
				position: absolute;
				left: -1.5ch;
				top: 0;
				opacity: 0;
				text-decoration: underline;
			}

			&:hover .icon-link::before {
				opacity: 1;
			}
		}
	}
</style>
