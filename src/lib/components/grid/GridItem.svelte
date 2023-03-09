<script>
	export let col = 1;
	export let colSpan = 1;
	export let row = 1;
	export let rowSpan = 1;
	$: style =
		'grid-column-start: ' +
		col +
		';' +
		'grid-column-end: span ' +
		colSpan +
		';' +
		'grid-row-start: ' +
		row +
		';' +
		'grid-row-end: span ' +
		rowSpan +
		';';
</script>

<section class="grid-item" {style}><slot /></section>

<style>
	.grid-item {
		background-color: var(--background-color-alt);
	}
</style>
