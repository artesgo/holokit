<script lang="ts">
	import { Input, Card, Flex, Title, Password } from '$lib';
  import Highlight from "svelte-highlight";
  import xml from "svelte-highlight/languages/xml";
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

<Flex gap={1}>
	<Flex row gap={1}>
		<Card grow>
			<Input bind:value theme="success" on:change={change}>Label</Input>
			<Input bind:value theme="warning">Label</Input>
			<Input bind:value theme="info">Label</Input>
			<Input bind:value theme="danger">Label</Input>
			<Input bind:value theme="neutral">Label</Input>
			<p>
				bound value: {value}
			</p>
			<Password bind:value theme="neutral">Random Password Field</Password>
		</Card>
		
		<Card grow>
			<Input inline apart bind:value theme="success">Label</Input>
			<Input inline apart bind:value theme="warning">Label</Input>
			<Input inline apart bind:value theme="info">Label</Input>
			<Input inline apart bind:value theme="danger">Label</Input>
			<Input inline apart bind:value theme="neutral">Label</Input>
			<p>
				bound value: {value}
			</p>
			<Input integrated bind:value theme="success">Label</Input>
			<Input integrated bind:value theme="warning">Label</Input>
			<Input integrated bind:value theme="info">Label</Input>
			<Input integrated bind:value theme="danger">Label</Input>
			<Input integrated bind:value theme="neutral">Label</Input>
			<p>
				bound value: {value}
			</p>
		</Card>
	</Flex>
	<Card>
		<Highlight language={xml} {code} />
	</Card>
</Flex>