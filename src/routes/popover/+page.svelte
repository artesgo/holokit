<script lang="ts">
	import { Button, Popover, Card, Flex, RadioGroup, Radio, Prism } from '$lib';
	let show = false;
	let value: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
	let code = `<Popover bind:show placement={value}>
  <Button on:click={togglePopover}>Trigger</Button>
  <p slot="content">Popover Content</p>
</Popover>`;
</script>

<h1>Popover</h1>

<Flex gap={1}>
	<Flex row gap={1}>
		<Card grow>
			<h2>Radio Props</h2>
			<RadioGroup name="g" bind:value>
				<Radio value="top" reverse>top</Radio>
				<Radio value="bottom" reverse>bottom</Radio>
				<Radio value="left" reverse>left</Radio>
				<Radio value="right" reverse>right</Radio>
			</RadioGroup>
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
		<Prism language="html" {code}></Prism>
	</Card>
</Flex>
