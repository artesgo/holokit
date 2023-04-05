<script lang="ts">
	import type { FocusManagerContext } from '$lib/stores';
	import { getContext, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { fade } from 'svelte/transition';
	import Overlay from '../overlay/Overlay.svelte';

	// binds to initial, and updates consumer if they bind to this
	export let show = false;
	export let component: any;
	export let backdrop = false;
	export let position: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
	export let value: string;
	export let label: string;

	const focusManager = getContext<FocusManagerContext>('focus');

	let index = 0;
	function toggle(event: Event) {
		$state.show = !$state.show;
		show = $state.show;
		if ($state.show) {
			focusManager.focus('dropdown-1');
		}
		event.preventDefault();
		event.stopPropagation();
	}
	function closeOnESC(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			show = false;
			$state.show = false;
		}
	}

	function clickOutside() {
		show = false;
		$state.show = false;
	}

	$: if (!$state.show) {
		$state.dropdownList = [];
		focusManager.focus(null);
		$state.index = 1;
		value = $state.value;
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
		if (event.key === 'Tab') {
			if (event.shiftKey) {
				show = false;
				$state.show = false;
			}
			if (!event.shiftKey) {
				$state.index++;
			}
		}
	}
	const state = writable<{ value: string, show: boolean; index: number; limit: number; dropdownList: number[] }>({
		show,
		index,
		limit: 0,
		value,
		dropdownList: [],
	});
	setContext('Dropdown', { state, onArrow });
</script>
{#if $state.show}
	<Overlay bind:backdrop on:click={clickOutside} />
{/if}
<span>
	<svelte:component
		role="menu"
		this={component}
		{...$$restProps}
		on:click={toggle}
		on:keydown={closeOnESC}
		on:keydown={onArrow}
		on:keydown={onTab}
		on:keydown={preventArrowPropagation}
	>
		{#if $$slots.trigger}
			<slot name="trigger">Menu</slot>
		{:else}
			{label}
		{/if}
	</svelte:component>
	{#if $state.show}
		<ul
			class="holo-dropdown"
			transition:fade={{ duration: 100 }}
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
</style>
