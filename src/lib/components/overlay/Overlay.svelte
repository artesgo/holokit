<script>
	import { fade } from "svelte/transition";

	export let backdrop = false;
	export let duration = 300;
</script>

<button tabindex="-1" class="overlay" on:click class:backdrop transition:fade={{ duration }}/>

<style>
  .overlay {
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		background: transparent;
		border: none;
	}

	.backdrop {
		background-color: var(--background-color-alt);
		opacity: 0.5;
	}
</style>