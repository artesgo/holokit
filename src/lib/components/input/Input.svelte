<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { InputProps } from './input.types';

	export let id: InputProps['id'] = '';
	export let value: InputProps['value'] = '';
	export let size: InputProps['size'] = 'm';
	export let type: InputProps['type'] = 'success';
	export let placeholder: InputProps['placeholder'] = '';
	export let inline: InputProps['inline'] = false;
	export let apart: InputProps['apart'] = false;
	export let integrated: InputProps['integrated'] = false;

	const dispatch = createEventDispatcher();
</script>

<label class="holo-input-container" class:integrated class:justify-between={apart} class:inline>
	<span class='holo-input-label'>
		<slot />
	</span>

	<input
		{id} data-testid={id}
		class="holo-input"
		class:holo-success={type === 'success'}
		class:holo-warning={type === 'warning'}
		class:holo-info={type === 'info'}
		class:holo-danger={type === 'danger'}
		class:holo-neutral={type === 'neutral'}
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
		{placeholder}
	/>
</label>

<style lang="scss">
	.holo-input-container{
		display: flex;
		flex-direction: column;
		margin-bottom: var(--margin-v-s);
		font-weight: var(--font-weight-s);
	}
	.holo-input-container.inline{
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--padding-h-m);
	}
	.holo-input-container.integrated {
		position: relative;
		& .holo-input-label {
			position: absolute;
			top: 0;
			bottom: 0;
			color: var(--dark);
			font-weight: var(--font-weight-m);
			width: 50%;
		  height: 50%;
			margin: auto;
			padding-left: var(--padding-h-s);
			padding-right: var(--padding-h-s);
		}
		& .holo-input {
			padding-left: 50%;
		}
	}
	.holo-input {
		border: var(--control-border);
		border-color: var(--control-border-color);
		border-radius: var(--control-border-radius);
		min-width: var(--control-min-width);
		transition: var(--transition);
		&:focus {
			outline: 1px solid var(--outline-color);
			outline-offset: var(--outline-offset);
		}
	}
	.holo-success {
		background: var(--success-lightest);
		&:hover {
			background: var(--success-lighter);
		}
	}
	.holo-warning {
		background: var(--warning-lightest);
		&:hover {
			background: var(--warning-lighter);
		}
	}
	.holo-info {
		background: var(--info-lightest);
		&:hover {
			background: var(--info-lighter);
		}
	}
	.holo-danger {
		background: var(--danger-lightest);
		&:hover {
			background: var(--danger-lighter);
		}
	}
	.holo-neutral {
		background: var(--neutral-lightest);
		&:hover {
			background: var(--neutral-lighter);
		}
	}
	.holo-padding-s {
		padding-left: var(--padding-h-s);
		padding-right: var(--padding-h-s);
		padding-top: var(--padding-v-s);
		padding-bottom: var(--padding-v-s);
	}
	.holo-padding-m {
		padding-left: var(--padding-h-m);
		padding-right: var(--padding-h-m);
		padding-top: var(--padding-v-m);
		padding-bottom: var(--padding-v-m);
	}
	.holo-padding-l {
		padding-left: var(--padding-h-l);
		padding-right: var(--padding-h-l);
		padding-top: var(--padding-v-l);
		padding-bottom: var(--padding-v-l);
	}
</style>
