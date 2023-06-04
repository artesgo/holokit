<script lang="ts">
	export let col: number | undefined = undefined;
	export let colSpan: number | undefined = undefined;
	export let row: number | undefined = undefined;
	export let rowSpan: number | undefined = undefined;
	$: style =
		(col ? 'grid-column-start: ' + col + ';' : '') +
		(colSpan ? 'grid-column-end: span ' + colSpan + ';' : '') +
		(row ? 'grid-row-start: ' + row + ';' : '') +
		(rowSpan ? 'grid-row-end: span ' + rowSpan + ';' : '');
</script>

<section class="grid-item" {style}><slot /></section>

<style>
	.grid-item {
		background-color: var(--background-color-alt);
	}
</style>
