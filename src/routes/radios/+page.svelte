<script lang="ts">
	import { Radio, RadioGroup, Card, Grid, GridItem } from '$lib';
	let value = 'item 1';
</script>

<h1>Checkbox</h1>

<Grid columnTemplate="1fr 1fr 1fr 1fr" unpadded>
	<GridItem col={1} row={1}>
		<Card>
			<h2>Standard</h2>
			<RadioGroup name="g" bind:value>
				<Radio value="item 1">Item 1</Radio>
				<Radio value="item 2">Item 2</Radio>
				<Radio value="item 3">Item 3</Radio>
			</RadioGroup>
		</Card>
	</GridItem>
	<GridItem col={2} row={1}>
		<Card>
			<h2>Reversed</h2>
			<RadioGroup name="g" bind:value>
				<Radio value="item 1" reverse>Item 1</Radio>
				<Radio value="item 2" reverse>Item 2</Radio>
				<Radio value="item 3" reverse>Item 3</Radio>
			</RadioGroup>
		</Card>
	</GridItem>
	<GridItem col={3} row={1}>
		<Card>
			<h2>Apart</h2>
			<RadioGroup name="g" bind:value>
				<Radio value="item 1" apart>Item 1</Radio>
				<Radio value="item 2" apart>Item 2</Radio>
				<Radio value="item 3" apart>Item 3</Radio>
			</RadioGroup>
		</Card>
	</GridItem>
	<GridItem col={4} row={1}>
		<Card>
			<h2>Reversed/Apart</h2>
			<RadioGroup name="g" bind:value>
				<Radio value="item 1" apart reverse>Item 1</Radio>
				<Radio value="item 2" apart reverse>Item 2</Radio>
				<Radio value="item 3" apart reverse>Item 3</Radio>
			</RadioGroup>
		</Card>
	</GridItem>
</Grid>

<Card>
	Selected Option : {value}
</Card>
