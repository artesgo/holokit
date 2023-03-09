<script lang="ts">
	import { onDestroy, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let name;
	export let label = '';
	export let value = '';

	const selectedValue = writable(value);
	$: $selectedValue = value;
	setContext('RadioGroup', {
		selectedValue,
		name
	});
	const unsub = selectedValue.subscribe((val) => {
		value = val;
	});
	onDestroy(unsub);
</script>

<fieldset class="holo-radio-group">
	<legend>{label}</legend>
	<slot />
</fieldset>

<style>
	.holo-radio-group {
		border: none;
	}
</style>