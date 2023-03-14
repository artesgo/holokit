<script lang="ts">
	import { onDestroy, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import type { RadioGroupProps } from './radio.types';
	export let id: RadioGroupProps['id'] = '';
	export let name: RadioGroupProps['name'];
	export let label: RadioGroupProps['label'] = '';
	export let value: RadioGroupProps['value'] = '';

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

<fieldset class="holo-radio-group" {id} data-testid={id}>
	<legend>{label}</legend>
	<slot />
</fieldset>

<style>
	.holo-radio-group {
		border: none;
	}
</style>