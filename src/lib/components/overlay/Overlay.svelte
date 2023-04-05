<script>
	export let backdrop = false;
</script>

<button tabindex="-1" class="overlay" on:click class:backdrop />

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