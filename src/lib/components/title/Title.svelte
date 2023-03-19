<script lang="ts">
	import type { FocusManagerContext } from '$lib';
	import { getContext } from 'svelte';
	export let l: 1 | 2 | 3 | 4 | 5 | 6 = 1;
	export let id: string;
	export let outline = false;

	const focusManager = getContext<FocusManagerContext>('focus');
	let element: HTMLElement;
	$: if (element && !!$focusManager.focused && $focusManager.focused === id) {
		element.focus();
	}
</script>

<svelte:element {id} this={'h' + l} bind:this={element} {...$$restProps} class:outline tabindex="-1">
	<slot />
</svelte:element>

<style>
  .outline:focus {
    outline: 1px solid var(--outline-color);
    outline-offset: var(--outline-offset);
  }
</style>