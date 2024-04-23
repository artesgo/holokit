<script lang="ts">
	import { Button, Popover, Card, Flex, Radio, Title } from '$lib';
	
  import Highlight from "svelte-highlight";
  import xml from "svelte-highlight/languages/xml";
	
	let show = false;
	let value: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
	let code = `<Popover bind:show placement={value}>
  <Button on:click={togglePopover}>Trigger</Button>
  <p slot="content">Popover Content</p>
</Popover>`;
</script>

<svelte:head>
	<title>Holokit Popover</title>
</svelte:head>

<Title id="heading">Popover</Title>

<Flex gap={1}>
	<Flex row gap={1}>
		<Card grow>
			<h2>Radio Props</h2>
			<Radio bind:group={value} value="top" reverse>top</Radio>
			<Radio bind:group={value} value="bottom" reverse>bottom</Radio>
			<Radio bind:group={value} value="left" reverse>left</Radio>
			<Radio bind:group={value} value="right" reverse>right</Radio>
		</Card>
		<Card grow>
			<Popover bind:show placement={value}>
				<Button on:click={() => (show = !show)}>Click for more info!</Button>
				<p slot="content">Popover Content</p>
			</Popover>
		</Card>
	</Flex>

	<Card>
		<h2>Code Sample</h2>
		<Highlight language={xml} {code} />
	</Card>
</Flex>
