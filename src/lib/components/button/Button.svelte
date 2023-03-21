<script lang="ts">
	import type { FocusManagerContext } from '$lib';
	import { getContext } from 'svelte';
	import type { ButtonProps } from './button.types';
	export let id: ButtonProps['id'] = '';
	export let theme: ButtonProps['theme'] = 'success';
	export let size: ButtonProps['size'] = 'm';
	export let width: ButtonProps['width'] = undefined;
	export let align: ButtonProps['align'] = undefined;
	export let wrap: ButtonProps['wrap'] = false;
	export let type: ButtonProps['type'] = "button";
	export let disabled: ButtonProps['disabled'] = false;
	
	const focusManager = getContext<FocusManagerContext>('focus');
	let element: HTMLElement;
	$: if (element && !!$focusManager.focused && $focusManager.focused === id) {
		element.focus();
	}
	$: style = () => {
		let styles = '';
		if (width !== undefined) {
			styles = 'width: ' + width + ';';
		}
		if (align !== undefined) {
			styles = styles + 'align-self: ' + align + ';';
		}
		return styles;
	};
</script>

<button
	class="holo-btn"
	style={style()}
	{type} {disabled}
	{id} data-testid={id}
	class:holo-success={theme === 'success'}
	class:holo-warning={theme === 'warning'}
	class:holo-info={theme === 'info'}
	class:holo-danger={theme === 'danger'}
	class:holo-neutral={theme === 'neutral'}
	class:holo-padding-s={size === 's'}
	class:holo-padding-m={size === 'm'}
	class:holo-padding-l={size === 'l'}
	class:holo-wrap={wrap}
	{...$$restProps}
	bind:this={element}
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
>
	<slot />
</button>

<style lang="scss">
	.holo-btn {
		font-weight: var(--font-weight-m);
		border: var(--border);
		border-color: var(--border-color);
		border-radius: var(--control-border-radius);
		box-sizing: border-box;
		transition: var(--transition);
		white-space: nowrap;

		&:focus {
			outline: 1px solid var(--outline-color);
			outline-offset: var(--outline-offset);
		}
	}
	.holo-wrap {
		white-space: wrap;
	}
	.holo-success {
		background: var(--success);
		text-shadow: -1px -1px 4px var(--success-lighter), 1px -1px 4px var(--success-lighter),
			-1px 1px 4px var(--success-lighter), 1px 1px 4px var(--success-lighter),
			-2px 0 4px var(--success-lighter), 2px 0 4px var(--success-lighter),
			0 2px 4px var(--success-lighter), 0 -2px 4px var(--success-lighter);
		&:hover {
			background: var(--success-darker);
		}
	}
	.holo-warning {
		background: var(--warning);
		text-shadow: -1px -1px 4px var(--warning-lighter), 1px -1px 4px var(--warning-lighter),
			-1px 1px 4px var(--warning-lighter), 1px 1px 4px var(--warning-lighter),
			-2px 0 4px var(--warning-lighter), 2px 0 4px var(--warning-lighter),
			0 2px 4px var(--warning-lighter), 0 -2px 4px var(--warning-lighter);
		&:hover {
			background: var(--warning-darker);
		}
	}
	.holo-info {
		background: var(--info);
		text-shadow: -1px -1px 4px var(--info-lighter), 1px -1px 4px var(--info-lighter),
			-1px 1px 4px var(--info-lighter), 1px 1px 4px var(--info-lighter),
			-2px 0 4px var(--info-lighter), 2px 0 4px var(--info-lighter), 0 2px 4px var(--info-lighter),
			0 -2px 4px var(--info-lighter);
		&:hover {
			background: var(--info-darker);
		}
	}
	.holo-danger {
		background: var(--danger);
		color: white;
		text-shadow: -1px -1px 4px var(--danger-darker), 1px -1px 4px var(--danger-darker),
			-1px 1px 4px var(--danger-darker), 1px 1px 4px var(--danger-darker),
			-2px 0 4px var(--danger-darker), 2px 0 4px var(--danger-darker),
			0 2px 4px var(--danger-darker), 0 -2px 4px var(--danger-darker);
		&:hover {
			background: var(--danger-darker);
		}
	}
	.holo-neutral {
		background: var(--neutral);
		color: white;
		text-shadow: -1px -1px 4px var(--neutral-darker), 1px -1px 4px var(--neutral-darker),
			-1px 1px 4px var(--neutral-darker), 1px 1px 4px var(--neutral-darker),
			-2px 0 4px var(--neutral-darker), 2px 0 4px var(--neutral-darker),
			0 2px 4px var(--neutral-darker), 0 -2px 4px var(--neutral-darker);
		&:hover {
			background: var(--neutral-darker);
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
