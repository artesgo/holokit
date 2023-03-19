<script lang="ts">
	import { Radio, RadioGroup, Card, Flex, Checkbox, Title } from '$lib';
	let value = 'item 1';
	let apart = false;
	let reverse = false;
</script>

<svelte:head>
	<title>Holokit Radio</title>
</svelte:head>

<Title id="heading">Radio</Title>
<Flex gap={1}>
	<Flex row gap={1}>
		<Card grow>
			<h2>Radio Props</h2>
			<Checkbox id={'chk-1'} reverse bind:checked={reverse}>reverse</Checkbox>
			<Checkbox id={'chk-2'} reverse bind:checked={apart}>apart</Checkbox>
		</Card>

		<Card grow>
			<h2>Reversed/Apart</h2>
			<RadioGroup name="g" bind:value>
				<Radio value="item 1" {apart} {reverse}>Item 1</Radio>
				<Radio value="item 2" {apart} {reverse}>Item 2</Radio>
				<Radio value="item 3" {apart} {reverse}>Item 3</Radio>
			</RadioGroup>
		</Card>
	</Flex>
	<Card>
		Selected Option : {value}
	</Card>
</Flex>