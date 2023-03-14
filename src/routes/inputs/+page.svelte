<script lang="ts">
	import { Input, Card, Flex } from '$lib';
	import Prism from '../prism/Prism.svelte';
	let value = 'test';
	let code = `<Input bind:value type="success">Label</Input>
<Input bind:value type="warning">Label</Input>
<Input bind:value type="info">Label</Input>
<Input bind:value type="danger">Label</Input>
<Input bind:value type="neutral">Label</Input>
buttons sold separately
`;
</script>

<svelte:head>
	<title>Holokit Input</title>
</svelte:head>

<h1>Inputs</h1>

<Flex row gap={1}>
	<Card grow>
		<Input bind:value type="success">Label</Input>
		<Input bind:value type="warning">Label</Input>
		<Input bind:value type="info">Label</Input>
		<Input bind:value type="danger">Label</Input>
		<Input bind:value type="neutral">Label</Input>
		<p>
			start typing: {value}
		</p>
	</Card>
	
	<Card grow>
		<Input inline apart bind:value type="success">Label</Input>
		<Input inline apart bind:value type="warning">Label</Input>
		<Input inline apart bind:value type="info">Label</Input>
		<Input inline apart bind:value type="danger">Label</Input>
		<Input inline apart bind:value type="neutral">Label</Input>
		<p>
			start typing: {value}
		</p>
		<Input integrated bind:value type="success">Label</Input>
		<Input integrated bind:value type="warning">Label</Input>
		<Input integrated bind:value type="info">Label</Input>
		<Input integrated bind:value type="danger">Label</Input>
		<Input integrated bind:value type="neutral">Label</Input>
	</Card>
</Flex>
<br />
<Card>
  <Prism language="html" {code}></Prism>
</Card>