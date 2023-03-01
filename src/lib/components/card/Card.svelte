<script lang="ts">
	export let grow = false;
</script>

<section class:grow>
	<slot />
</section>

<style>
	section {
		padding-left: var(--padding-h-l);
		padding-right: var(--padding-h-l);
		padding-top: var(--padding-v-l);
		padding-bottom: var(--padding-v-l);
		color: var(--color);
		background-color: var(--background-color-alt);
		border: var(--border);
		border-color: var(--border-color-alt);
		border-radius: calc(var(--border-radius) * 2);
	}
	.grow {
		flex-grow: 1;
	}
</style>
