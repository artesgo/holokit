<script lang="ts">
	import { getContext } from 'svelte';
	import { fade } from 'svelte/transition';

	import type { IRadioProps } from './radio.types';
	import type { FocusManagerContext } from '$lib/stores';

	export let id: IRadioProps['id'] = '';
	export let value: IRadioProps['value'] = '';
	export let reverse: IRadioProps['reverse'] = false;
	export let apart: IRadioProps['apart'] = false;
	export let group: IRadioProps['group'] = '';

	const focusManager = getContext<FocusManagerContext>('focus');
	let element: HTMLElement;
	$: if (element && focusManager && !!$focusManager.focused && $focusManager.focused === id) {
		element.focus();
	}

	let focused = false;	
	function focus() {
		focused = true;
	}
	function blur() {
		focused = false;
	}
</script>

<label class:reverse class="holo-radio">
	<slot />
	<span class="spacer" class:apart />
	<svg
		class:focused
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 256 256"
		fill="none"
	>
		{#if group === value}
			<slot name="icon">
				<g transition:fade={{ duration: 100 }}>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M46 127.706C52.1971 88.2106 86.3764 58 127.612 58C168.847 58 203.026 88.2106 209.223 127.706C203.026 167.201 168.847 197.412 127.612 197.412C86.3764 197.412 52.1971 167.201 46 127.706Z"
						fill="#222111"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M64.7767 128C69.5775 97.4037 96.0556 74 128 74C159.944 74 186.423 97.4037 191.223 128C186.423 158.596 159.944 182 128 182C96.0556 182 69.5775 158.596 64.7767 128Z"
						fill="#FF0000"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M74 120.218C78.1089 94.0308 100.771 74 128.112 74C155.452 74 178.114 94.0308 182.223 120.218C178.114 146.404 155.452 166.435 128.112 166.435C100.771 166.435 78.1089 146.404 74 120.218Z"
						fill="#222111"
					/>
					<circle cx="128" cy="103" r="16" fill="#FF0000" />
				</g>
			</slot>
		{/if}
	</svg>
	<input
		{id} data-testid={id}
		{value}
		bind:group
		type="radio"
		class="sr-only"
		bind:this={element}
		on:mouseover={focus}
		on:focus={focus}
		on:blur={blur}
		on:mouseout={blur}
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
	/>
</label>

<style lang="scss">
	.holo-radio {
		color: var(--color);
		display: flex;
		margin-bottom: var(--margin-v-s);
		font-weight: var(--font-weight-s);
	}
	.reverse {
		flex-direction: row-reverse;
		justify-content: flex-end;
	}
	.spacer.apart {
		flex-grow: 1;
	}
	.spacer {
		width: var(--padding-h-m);
	}
	svg {
		border: var(--border);
		border-width: var(--border-width-m);
		border-radius: var(--border-radius-rounded);
		background: var(--background-color);
		&.focused {
			outline: 1px solid var(--outline-color);
			outline-offset: var(--outline-offset);
		}
	}
</style>
