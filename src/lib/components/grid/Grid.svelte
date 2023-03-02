<script lang="ts">
	export let columnTemplate = '';
	export let rowTemplate = '';
	export let borderless = false;
	export let unpadded = false;
	export let stretch = false;
	$: style =
		'grid-template-columns: ' + columnTemplate + ';' + 'grid-template-rows: ' + rowTemplate + ';';
</script>

<section class="grid" class:borderless class:unpadded class:stretch {style}>
	<slot />
</section>

<style>
	.grid {
		display: grid;
    color: var(--color);
    border: var(--border);
    border-color: var(--border-color);
		background-color: var(--background-color);
		padding-left: var(--padding-h-s);
		padding-right: var(--padding-h-s);
		padding-top: var(--padding-v-s);
		padding-bottom: var(--padding-v-s);
	}
	.borderless {
		border: none;
	}
	.unpadded {
		padding: 0;
	}
	.stretch {
		height: 100%;
	}
</style>
