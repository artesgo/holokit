<script lang="ts">
	import type { FocusManagerContext } from '$lib/stores';
	import { getContext, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { fade } from 'svelte/transition';

	export let show = false;
	export let component: any;
	export let triggerProps = {};
	export let backdrop = false;
	export let position: 'top' | 'bottom' | 'left' | 'right' = 'bottom';

	const focusManager = getContext<FocusManagerContext>('focus');

	let index = 0;
	function toggle(event: Event) {
		show = !show;
		$state.show = show;
		if ($state.show) {
			focusManager.focus('dropdown-1');
		}
		event.preventDefault();
		event.stopPropagation();
	}
	function closeOnESC(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			show = false;
			$state.show = show;
		}
	}

	function clickOutside() {
		show = false;
		$state.show = show;
	}

	$: if (!show) {
		$state.dropdownList = [];
		focusManager.focus(null);
		$state.index = 1;
	}
	function preventArrowPropagation(event: KeyboardEvent) {
		if (event.key.includes('Arrow')) {
			event.preventDefault();
			event.stopPropagation();
		}
	}
	function onArrow(event: KeyboardEvent) {
		if (event.key.includes('Arrow')) {
			show = true;
			$state.show = true;
		}
		if ((event.key === 'ArrowLeft' || event.key === 'ArrowUp') && $state.index > 1) {
			$state.index--;
			focusManager.focus('dropdown-' + $state.index);
		}
		if ((event.key === 'ArrowRight' || event.key === 'ArrowDown') && $state.index < $state.limit) {
			$state.index++;
			focusManager.focus('dropdown-' + $state.index);
		}
	}
	function onTab(event: KeyboardEvent) {
		if (event.key === 'Tab' && event.shiftKey) {
			show = false;
			$state.show = false;
		}
	}
	const state = writable<{ show: boolean; index: number; limit: number; dropdownList: number[] }>({
		show,
		index,
		limit: 0,
		dropdownList: [],
	});
	setContext('Dropdown', { state, onArrow });
</script>

<svelte:window on:click={clickOutside}/>

<svelte:component
	this={component}
	{...triggerProps}
	on:click={toggle}
	on:keydown={closeOnESC}
	on:keydown={onArrow}
	on:keydown={onTab}
	on:keydown={preventArrowPropagation}
>
	<slot name="trigger">Menu</slot>
</svelte:component>
{#if $state.show}
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

<style>
	ul.holo-dropdown {
		list-style: none;
		position: absolute;
		z-index: 900;
	}

	.backdrop {
		background-color: var(--background-color-alt);
	}
</style>
