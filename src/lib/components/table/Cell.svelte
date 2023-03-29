<script lang="ts">
	import type { Scope } from './scope';
	export let scope: Scope | undefined = undefined;
	let props = {};
	$: element = scope ? 'th' : 'td';
	$: {
		if (scope) {
			props = { scope }
		}
	}
</script>

<svelte:element this={element} {...props}
	class="holo-cell" class:holo-cell-header={element === 'th'}
	{...$$restProps}>
  <slot />
</svelte:element>

<style>
  .holo-cell {
		padding-left: var(--padding-h-s);
		padding-right: var(--padding-h-s);
		padding-top: var(--padding-v-s);
		padding-bottom: var(--padding-v-s);
		font-weight: var(--font-weight-s);
  }
	.holo-cell.holo-cell-header {
		font-weight: var(--font-weight-m);
	}
</style>