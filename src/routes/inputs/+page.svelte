<script lang="ts">
	import { Input, Card, Flex, Title } from '$lib';
	import Prism from '../prism/Prism.svelte';
	let value = 'start typing';
	let code = `<Input bind:value type="success">Label</Input>
<Input bind:value type="warning">Label</Input>
<Input bind:value type="info">Label</Input>
<Input bind:value type="danger">Label</Input>
<Input bind:value type="neutral">Label</Input>
buttons sold separately
`;

function change(value: CustomEvent) {
	console.log(value.detail);
}
</script>

<svelte:head>
	<title>Holokit Input</title>
</svelte:head>

<Title id="heading">Inputs</Title>

<Flex row gap={1}>
	<Card grow>
		<Input bind:value type="success" on:change={change}>Label</Input>
		<Input bind:value type="warning">Label</Input>
		<Input bind:value type="info">Label</Input>
		<Input bind:value type="danger">Label</Input>
		<Input bind:value type="neutral">Label</Input>
		<p>
			bound value: {value}
		</p>
	</Card>
	
	<Card grow>
		<Input inline apart bind:value type="success">Label</Input>
		<Input inline apart bind:value type="warning">Label</Input>
		<Input inline apart bind:value type="info">Label</Input>
		<Input inline apart bind:value type="danger">Label</Input>
		<Input inline apart bind:value type="neutral">Label</Input>
		<p>
			bound value: {value}
		</p>
		<Input integrated bind:value type="success">Label</Input>
		<Input integrated bind:value type="warning">Label</Input>
		<Input integrated bind:value type="info">Label</Input>
		<Input integrated bind:value type="danger">Label</Input>
		<Input integrated bind:value type="neutral">Label</Input>
		<p>
			bound value: {value}
		</p>
	</Card>
</Flex>
<br />
<Card>
  <Prism language="html" {code}></Prism>
</Card>