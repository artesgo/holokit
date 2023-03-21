<script lang="ts">
	import { onDestroy, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import type { IRadioGroupProps } from './radio.types';
	export let id: IRadioGroupProps['id'] = '';
	export let name: IRadioGroupProps['name'];
	export let label: IRadioGroupProps['label'] = '';
	export let value: IRadioGroupProps['value'] = '';

	const selectedValue = writable<string | undefined>(value);
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