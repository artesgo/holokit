<script lang="ts">
	import type { ICardProps } from './card.types';
	export let grow: ICardProps['grow'] = false;
	export let flex: ICardProps['flex'] = false;
	export let stretch: ICardProps['stretch'] = 'none';
	export let between: ICardProps['between'] = false;
	export let fullWidth: ICardProps['fullWidth'] = false;
</script>

<section class="holo-card" class:grow class:flex
	class:stretch-element={stretch === 'element'}
	class:stretch-window={stretch === 'window'}
	class:justify-between={between}
	class:fullWidth
	{...$$restProps}
>
	<slot />
</section>

<style>
	.holo-card {
		font-weight: var(--font-weight-s);
		padding-left: var(--padding-h-l);
		padding-right: var(--padding-h-l);
		padding-top: var(--padding-v-l);
		padding-bottom: var(--padding-v-l);
		background-color: var(--background-color-alt);
		border: var(--border);
		border-color: var(--border-color-alt);
		border-radius: calc(var(--border-radius) * 2);
	}
	.grow {
		flex-grow: 1;
	}
	.fullWidth {
		width: 100%;
	}
</style>
