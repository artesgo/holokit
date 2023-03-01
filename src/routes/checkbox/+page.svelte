<script lang="ts">
	import { Checkbox, Card } from '$lib';

	function bindings() {
		console.log('fire bindings');
	}
</script>

<h1>Checkbox</h1>

<div class='flex justify-between gap'>
	<Card grow>
		<Checkbox
			id={'chk-1'}
			on:click={bindings}
			on:mouseover={bindings}
			on:keypress={bindings}
		>
			Regular Position
		</Checkbox>
		<Checkbox
			id={'chk-2'}
			reverse
			on:click={bindings}
			on:mouseover={bindings}
			on:keypress={bindings}
		>
			Reversed Position
		</Checkbox>
	</Card>
	
	<Card grow>
		<Checkbox
			id={'chk-3'}
			apart={true}
			on:click={bindings}
			on:mouseover={bindings}
			on:keypress={bindings}
		>
			Spaced Apart
		</Checkbox>
		<Checkbox
			id={'chk-4'}
			reverse
			apart={true}
			on:click={bindings}
			on:mouseover={bindings}
			on:keypress={bindings}
		>
			Spaced Apart Reversed
		</Checkbox>
	</Card>
</div>

<style>
	.gap {
		column-gap: var(--margin-h-s);
		gap: var(--margin-v-s);
		flex-wrap: wrap;
	}
</style>