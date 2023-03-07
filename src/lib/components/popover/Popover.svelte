<script lang="ts">
	import { scale } from 'svelte/transition';
	export let show: boolean = false;
	export let placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
	export let offset = 5;
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
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<section class="overlay" on:click={() => (show = false)} />
	<section class="popover" {style} bind:this={popper} transition:scale={{
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

	.overlay {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	.popover {
		position: absolute;
		background-color: var(--background-color-alt);
		color: var(--color);
		border: var(--border);
		border-color: var(--border-color);
		padding: var(--padding-v-m);
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
		box-sizing: border-box;
	}
</style>
