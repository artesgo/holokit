<script lang="ts">
	import type { Stretch } from "../common";
	export let columnTemplate = '';
	export let rowTemplate = '';
	export let borderless = false;
	export let unpadded = false;
	export let stretch: Stretch = 'none';
	$: style =
		'grid-template-columns: ' + columnTemplate + ';' + 'grid-template-rows: ' + rowTemplate + ';';
</script>

<section class="holo-grid" class:borderless class:unpadded
	class:stretch-element={stretch === 'element'}
	class:stretch-window={stretch === 'window'}
	{style}>
	<slot />
</section>

<style>
	.holo-grid {
		width: 100%;
		display: grid;
		padding-left: var(--padding-h-s);
		padding-right: var(--padding-h-s);
		padding-top: var(--padding-v-s);
		padding-bottom: var(--padding-v-s);
	}
	.holo-grid.borderless {
		border: none;
	}
	.unpadded {
		padding: 0;
	}
</style>
