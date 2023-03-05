<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let component: any;
	export let triggerProps = {};

	const { open, index, openOnArrows } = getContext<{ 
    open: Writable<boolean>, 
    index: Writable<number>,
    openOnArrows: () => void
  }>('Dropdown');

	function closeOnESC(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			$open = false;
		}
	}

	index.subscribe((i) => {
    
  });
</script>

<li role="presentation">
	<svelte:component
		this={component}
		role="menuitem"
		{...triggerProps}
		on:keyup={closeOnESC}
		on:keyup={openOnArrows}
		on:click
		on:keydown
		on:keyup
		on:keypress
	>
		<slot />
	</svelte:component>
</li>
