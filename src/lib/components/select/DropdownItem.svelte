<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let component: any;
	export let triggerProps = {};
	export let index = 0;

	let element: HTMLElement;
	const { state, openOnArrows } = getContext<{
		state: Writable<{ show: boolean; index: number; limit: number }>;
		openOnArrows: () => void;
	}>('Dropdown');

	function closeOnESC(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			$state.show = false;
		}
	}
	function updateIndex() {
		$state.index = index;
	}
	$: if ($state.index === index && element) {
		setTimeout(() => {
			element.focus();
		}, 0);
	}
	$: if ($state.limit < index) {
		$state.limit = index;
	}
</script>

<li class="dropdown-item" role="presentation">
	<svelte:component
		this={component}
		role="menuitem"
		bind:this={element}
		{...triggerProps}
		on:keyup={closeOnESC}
		on:keyup={openOnArrows}
		on:click={updateIndex}
		on:click
		on:keydown
		on:keyup
		on:keypress
	>
		<slot />
	</svelte:component>
</li>
