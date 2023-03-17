<script lang="ts">
	import { clickOutside } from '$lib/actions/clickout';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { fade } from 'svelte/transition';

	export let show = false;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export let component: any;
	export let triggerProps = {};
	export let backdrop = false;
	export let position: 'top' | 'bottom' | 'left' | 'right' = 'bottom';

	let index = 0;
	function toggle(event: Event) {
		show = !show;
		$state.show = show;
		event.preventDefault();
		event.stopPropagation();
	}
	function closeOnESC(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			show = false;
			$state.show = show;
		}
	}
	function openOnArrows(event: KeyboardEvent) {
		if (event.key.includes('Arrow')) {
			show = true;
			$state.show = show;
		}
		// TODO: Navigate through the list
		if ((event.key === 'ArrowLeft' || event.key === 'ArrowUp') && $state.index > 0) {
			$state.index--;
		}
		if ((event.key === 'ArrowRight' || event.key === 'ArrowDown') && $state.index < $state.limit) {
			$state.index++;
		}
	}
	const state = writable<{ show: boolean; index: number; limit: number }>({
		show,
		index,
		limit: 0
	});
	setContext('Dropdown', { state, openOnArrows });
</script>

<span use:clickOutside on:clickedout={() => (show = false)}>
	<svelte:component
		this={component}
		{...triggerProps}
		on:click={toggle}
		on:keyup={closeOnESC}
		on:keyup={openOnArrows}
	>
		<slot name="trigger">Menu</slot>
	</svelte:component>
	{#if show}
		<ul
			class="holo-dropdown"
			role="menu"
			transition:fade={{ duration: 100 }}
			class:backdrop
			class:top={position === 'top'}
			class:left={position === 'left'}
			class:right={position === 'right'}
			class:bottom={position === 'bottom'}
		>
			<slot />
		</ul>
	{/if}
</span>

<style>
	span {
		position: relative;
	}

	ul.holo-dropdown {
		list-style: none;
		position: absolute;
		z-index: 900;
	}

	.backdrop {
		background-color: var(--background-color-alt);
	}
</style>
