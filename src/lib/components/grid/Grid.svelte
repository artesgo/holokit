<script lang="ts">
	export let columnTemplate = '';
	export let rowTemplate = '';
	export let borderless = false;
	export let unpadded = false;
	export let stretch = false;
	export let full = false;
	$: style =
		'grid-template-columns: ' + columnTemplate + ';' + 'grid-template-rows: ' + rowTemplate + ';';
</script>

<section class="holo-grid" class:borderless class:unpadded class:full-height={full} class:stretch {style}>
	<slot />
</section>

<style>
	.holo-grid {
		width: 100%;
		display: grid;
		padding-left: var(--padding-h-s);
		padding-right: var(--padding-h-s);
		padding-top: var(--padding-v-s);
		padding-bottom: var(--padding-v-s);
	}
	.holo-grid.borderless {
		border: none;
	}
	.unpadded {
		padding: 0;
	}
	.stretch {
		height: 100%;
	}
	.full-height,
	.stretch.full-height {
		height: 100vh;
	}
</style>
