<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte';
	import type { IInputProps } from './input.types';
	import type { FocusManagerContext } from '$lib/stores';

	export let id: IInputProps['id'] = '';
	export let name: IInputProps['name'] = '';
	export let value: IInputProps['value'] = '';
	export let size: IInputProps['size'] = 'm';
	export let theme: IInputProps['theme'] = 'success';
	export let placeholder: IInputProps['placeholder'] = '';
	export let inline: IInputProps['inline'] = false;
	export let apart: IInputProps['apart'] = false;
	export let integrated: IInputProps['integrated'] = false;
	export let readonly: IInputProps['readonly'] = false;

	const dispatch = createEventDispatcher();
	const focusManager = getContext<FocusManagerContext>('focus');
	let element: HTMLElement;
	$: if (element && !!$focusManager.focused && $focusManager.focused === id) {
		element.focus();
	}
</script>

<label class="holo-input-container" class:integrated class:justify-between={apart} class:inline>
	<span class='holo-input-label'>
		<slot />
	</span>

	<input
		{id} data-testid={id} {name} {readonly}
		class="holo-input"
		class:holo-success={theme === 'success'}
		class:holo-warning={theme === 'warning'}
		class:holo-info={theme === 'info'}
		class:holo-danger={theme === 'danger'}
		class:holo-neutral={theme === 'neutral'}
		class:holo-padding-s={size === 's'}
		class:holo-padding-m={size === 'm'}
		class:holo-padding-l={size === 'l'}
		on:blur
		on:click
		on:contextmenu
		on:dblclick
		on:focus
		on:mousedown
		on:mouseenter
		on:mouseleave
		on:mouseup
		on:mousemove
		on:mouseout
		on:mouseover
		on:keydown
		on:keyup
		on:keypress
		on:change={() => dispatch('change', value)}
		bind:value
		bind:this={element}
		{placeholder}
	/>
</label>

<style lang="scss">
	@import './input';
</style>
