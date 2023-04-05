<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let component: any;
	export let value: string;

	let index = 0;
	let id = '';

	let element: HTMLElement;
	const { state, onArrow } = getContext<{
		state: Writable<{ value: string; show: boolean; index: number; limit: number, dropdownList: number[] }>;
		onArrow: () => void;
	}>('Dropdown');

	function closeOnESC(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			$state.show = false;
		}
	}
	function prevent(event: KeyboardEvent) {
		if (event.key.includes('Arrow')) {
			event.preventDefault();
			event.stopPropagation();
		}
	}
	function updateIndex() {
		$state.index = index;
		$state.value = value;
		$state.show = false;
	}
	$: if ($state.limit < index) {
		$state.limit = index;
	}
	onMount(() => {
		const [last] = [...$state.dropdownList].reverse();
		const _last = (last || 0) + 1;
		$state.dropdownList = [...$state.dropdownList, _last];
		id = 'dropdown-'+ _last;
		if ($state.limit < _last) {
			$state.limit = _last;
		}
	});
	
	function onTab(event: KeyboardEvent) {
		if (event.key === 'Tab') {
			if ($state.index < $state.limit && event.shiftKey) {
				$state.index--;
			}
			if ($state.index > 0 && !event.shiftKey) {
				$state.index++;
			}
			if ($state.index > $state.limit) {
				$state.show = false;
			}
		}
	}
</script>

<li class="dropdown-item" role="presentation">
	<svelte:component
		this={component}
		role="menuitem"
		bind:this={element}
		{...$$restProps}
		{id}
		on:keyup={closeOnESC}
		on:keyup={onArrow}
		on:click={updateIndex}
		on:keydown={onTab}
		on:keydown={prevent}
		on:click
		on:keydown
		on:keyup
		on:keypress
	>
		<slot />
	</svelte:component>
</li>
