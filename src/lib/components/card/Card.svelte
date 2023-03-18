<script lang="ts">
	import type { Stretch } from '../common';
	export let grow = false;
	export let flex = false;
	export let stretch: Stretch = 'none';
	export let between = false;
</script>

<section class="holo-card" class:grow class:flex
	class:stretch-element={stretch === 'element'}
	class:stretch-window={stretch === 'window'}
	class:justify-between={between}
	{...$$restProps}
>
	<slot />
</section>

<style>
	.holo-card {
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
