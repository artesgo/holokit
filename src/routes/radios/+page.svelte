<script lang="ts">
	import { Radio, RadioGroup, Card } from '$lib';
	let value = 'item1';
</script>

<h1>Checkbox</h1>
<Card>
	<RadioGroup name="g" bind:value>
		<Radio value="item1">Item 1</Radio>
		<Radio value="item2">Item 2</Radio>
		<Radio value="item3">Item 3</Radio>
	</RadioGroup>
</Card>

{value}
