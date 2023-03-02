<script lang="ts">
	export let grow = false;
	export let flex = false;
	export let stretch = false;
	export let between = false;
</script>

<section class:grow class:flex class:stretch class:justify-between={between}>
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
	.stretch {
		height: 100%;
	}
</style>
