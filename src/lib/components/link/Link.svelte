<script lang="ts">
	import type { FocusManagerContext } from '$lib';
	import { getContext } from 'svelte';
	import type { LinkProps } from "./link.types";
	export let id: LinkProps['id'] = '';
	export let type: LinkProps['type'] = 'success';
	export let size: LinkProps['size'] = 'm';
	export let href: LinkProps['href'];
	export let target: LinkProps['target'] = undefined;
	export let rel: LinkProps['rel'] = undefined;
	export let underline: LinkProps['underline'] = false;


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
</script>

<a
	{id} data-testid={id}
	{href} {rel} {target}
	{...$$restProps}
	bind:this={element}
	class="holo-link"
	class:underline
	class:focused
	class:holo-success={type === 'success'}
	class:holo-warning={type === 'warning'}
	class:holo-info={type === 'info'}
	class:holo-danger={type === 'danger'}
	class:holo-neutral={type === 'neutral'}
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
		color: var(--color);
		text-decoration: none;
		white-space: nowrap;
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
</style>
