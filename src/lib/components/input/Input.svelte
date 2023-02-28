<script lang="ts">
	import type { InputProps } from './input.types';

	type $$props = InputProps;
	export let value: string = '';
	export let size: $$props['size'] = 'm';
	export let type: $$props['type'] = 'success';
</script>

<input
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
	bind:value
/>

<style lang="scss">
	input {
		border: var(--control-border);
		border-left: var(--border-width-m);
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
