<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	export let value = '';
  export let apart = false;
	const { selectedValue, name } = getContext<{ selectedValue: Writable<string>; name: string }>(
		'RadioGroup'
	);
</script>

<label>
	<slot />
	<span class="spacer" class:apart/>
	<input type="radio" {name}
    checked={$selectedValue === value}
    on:click={() => $selectedValue = value}
  />
</label>

<style>
	.spacer.apart {
		flex-grow: 1;
	}
</style>
