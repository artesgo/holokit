<script lang="ts">
	export let col: number | undefined = undefined;
	export let colSpan: number | undefined = undefined;
	export let row: number | undefined = undefined;
	export let rowSpan: number | undefined = undefined;
	export let padded = false;
	$: style =
		(col ? 'grid-column-start: ' + col + ';' : '') +
		(colSpan ? 'grid-column-end: span ' + colSpan + ';' : '') +
		(row ? 'grid-row-start: ' + row + ';' : '') +
		(rowSpan ? 'grid-row-end: span ' + rowSpan + ';' : '');
</script>

<section class="grid-item" {style} class:padded><slot /></section>

<style>
	.grid-item {
		background-color: var(--background-color-alt);
	}
	.padded {
		padding-left: var(--padding-h-s);
		padding-right: var(--padding-h-s);
		padding-bottom: var(--padding-v-s);
		padding-top: var(--padding-v-s);
	}
</style>
