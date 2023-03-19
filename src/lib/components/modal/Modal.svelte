<script lang="ts">
	import Button from '../button/Button.svelte';
	import { scale } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { createEventDispatcher } from 'svelte';

	export let id = '';
	export let open = false;
	export let escapeable = true;
	export let duration = 0;
	export let easing = cubicInOut;
	export let start = 2;

	let dispatcher = createEventDispatcher();
	let header: HTMLElement;

	function closeModal(event: MouseEvent | Event) {
		if (event.target instanceof HTMLElement && event.target.className === 'holo-modal') {
			event.stopPropagation();
			return;
		} else {
			open = false;
		}
	}

	function escapeHandler(event: Event) {
		if (escapeable && (event as KeyboardEvent).key === 'Escape') {
			closeModal(event);
		}
	}

	function goToStart() {
		header?.focus();
	}
	$: if (!open) {
		dispatcher('close');
	}
</script>

<svelte:window on:keydown={escapeHandler} />

{#if open}
	<!-- ignore a11y, add keyboard controls for achieving the same -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		{id} data-testid={id}
		class="holo-modal-overlay"
		role="dialog"
		aria-labelledby="holo-modal"
		on:click={closeModal}
		transition:scale={{
			duration,
			easing,
			start,
		}}
		on:introend={goToStart}
	>
		<button on:focus={goToStart}></button>
		<div class="holo-modal" on:click|stopPropagation>
			<header class="holo-modal-header" class:alert-header={$$slots.alert} id="holo-modal" bind:this={header} tabindex="-1">
				{#if $$slots.alert}
					<slot name="alert"></slot>
				{:else}
					<slot name="header">Default header</slot>
				{/if}
			</header>
			<section class="holo-modal-body">
				<slot>Default body</slot>
			</section>
			<footer class="holo-modal-footer">
				<slot name="footer">
					<Button on:click={closeModal}>Close</Button>
				</slot>
			</footer>
			<button class="sr-only" on:focus={goToStart}></button>
		</div>
	</div>
{/if}

<style>
	.holo-modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 999;
	}

	.holo-modal {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: var(--background-color-alt);
		color: var(--color);
		border: var(--border);
		border-radius: var(--border-radius);
		box-shadow: 0px 0px var(--box-shadow) var(--color);
		width: 80%;
		max-width: var(--modal-width);
		z-index: 1000;
		padding: var(--padding-h-m);
		font-weight: var(--font-weight-s);
	}

	.holo-modal-header {
		--border: none;
		--margin-v-m: 4px;
		margin-bottom: var(--margin-v-m);
		font-weight: var(--font-weight-m);
		font-size: var(--font-size-l);
	}

	.alert-header {
		margin: 0 calc(var(--padding-h-m) * -1);
		margin-top: calc(var(--padding-h-m) * -1);
		margin-bottom: var(--padding-h-m);
	}

	.holo-modal-footer {
		margin-top: var(--margin-v-m);
		padding-top: var(--padding-v-m);
		border-top: 1px solid #eee;
		width: 100%;
	}
</style>
