<script lang="ts">
	import type { FocusManagerContext } from '$lib';
	import { getContext } from 'svelte';
	import type { ILinkProps } from "./link.types";
	export let id: ILinkProps['id'] = '';
	export let theme: ILinkProps['theme'] = 'success';
	export let size: ILinkProps['size'] = 'm';
	export let href: ILinkProps['href'];
	export let target: ILinkProps['target'] = undefined;
	export let rel: ILinkProps['rel'] = undefined;
	export let underline: ILinkProps['underline'] = false;
	export let width: ILinkProps['width'] = undefined;
	export let padded: ILinkProps['padded'] = false;
	export let block: ILinkProps['block'] = false;

	const focusManager = getContext<FocusManagerContext>('focus');
	let element: HTMLElement;
	$: if (element && !!$focusManager.focused && $focusManager.focused === id) {
		element.focus();
	}

	let focused = false;
	function focusing() {
		focused = true;
	}
	function blur() {
		focused = false;
	}

	let props = {};
	let style = '';
	$: {
		if (width !== undefined) {
			style = 'width: ' + width + ';';
		}
	};
	$: {
		if (id) {
			props = { ...props, id, 'data-testid': id };
		}
		if (rel) {
			props = { ...props, rel }
		}
		if (target) {
			props = { ...props, target }
		}
		if (style) {
			props = { ...props, style }
		}
	}
</script>

<a
	{href}
	{...props}
	{...$$restProps}
	bind:this={element}
	class="holo-link"
	class:underline
	class:focused
	class:padded
	class:block
	class:holo-success={theme === 'success'}
	class:holo-warning={theme === 'warning'}
	class:holo-info={theme === 'info'}
	class:holo-danger={theme === 'danger'}
	class:holo-neutral={theme === 'neutral'}
	class:holo-padding-s={size === 's'}
	class:holo-padding-m={size === 'm'}
	class:holo-padding-l={size === 'l'}
	on:mouseover={focusing}
	on:focus={focusing}
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
>
	<slot />
</a>

<style lang="scss">
	.holo-link {
		display: inline-block;
		color: var(--color);
		text-decoration: none;
		white-space: nowrap;
		font-weight: var(--font-weight-s);
	}
	.holo-wrap {
		white-space: wrap;
	}
	.underline {
		text-decoration: underline;
	}
	.focused {
		outline: 1px solid var(--outline-color);
		outline-offset: var(--outline-offset);
	}
	.padded {
		padding-left: var(--padding-h-s);
		padding-top: var(--padding-v-s);
		padding-right: var(--padding-h-s);
		padding-bottom: var(--padding-v-s);
	}
	.block {
		display: block;
	}
</style>
