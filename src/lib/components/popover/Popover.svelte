<script lang="ts">
	import { scale } from 'svelte/transition';
	import Overlay from '../overlay/Overlay.svelte';
	export let show: boolean = false;
	export let placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
	export let offset = 5;
	export let id = '';
	let hostElement: HTMLElement;
	let popper: HTMLElement;
	let style = '';
	$: if (hostElement && popper) {
		const hostRect = hostElement.getBoundingClientRect();
		// may want to use this to center the popover later on
		// const popperRect = popper.getBoundingClientRect();
		let top, left;
		switch (placement) {
			case 'top':
				top = hostRect.top - hostRect.height - (offset * 2) + 'px';
				left = hostRect.left + 'px';
				break;
			case 'bottom':
				top = hostRect.top + hostRect.height + offset + 'px';
				left = hostRect.left + 'px';
				break;
			case 'left':
				top = hostRect.top + 'px';
				left = hostRect.left - hostRect.width - offset + 'px';
				break;
			case 'right':
				top = hostRect.top + 'px';
				left = hostRect.left + hostRect.width + offset + 'px';
				break;
		}

		style = `left: ${left}; top: ${top};`;
	}
</script>

<section class="host" bind:this={hostElement}>
	<slot />
</section>

{#if show}
	<Overlay on:click={() => (show = false)} />
	<section class="holo-popover"
		{id} data-testid={id}
		{style} bind:this={popper} transition:scale={{
			duration: 100,
			start: 2,
		}}>
		<slot name="content" />
	</section>
{/if}

<style>
	.host {
		position: relative;
		display: inline-block;
	}

	.holo-popover {
		position: absolute;
		background-color: var(--background-color-alt);
		color: var(--color);
		border: var(--border);
		border-color: var(--border-color);
		padding: var(--padding-v-m);
		box-shadow: 2px 2px var(--box-shadow) rgba(0, 0, 0, 0.3);
		box-sizing: border-box;
		font-weight: var(--font-weight-s);
	}
</style>
