<script lang="ts">
	import { Button, Dropdown, DropdownItem, Link, Card, Flex, Checkbox, Title, Modal } from '$lib';
	import Prism from '../prism/Prism.svelte';

	let code = `let triggerProps = { width: '200px' };

<Dropdown bind:value component={Button} {...triggerProps}>
  <DropdownItem value="one" component={Button} {...triggerProps}>
    Item 1
  </DropdownItem>
  <DropdownItem value="two" component={Button} {...triggerProps}>
    Item 2
  </DropdownItem>
  <DropdownItem value="three" component={Button} {...triggerProps}>
    Item 3
  </DropdownItem>
  <!-- restProps bound to the Button,
    produces same result as above DropdownItem -->
  <DropdownItem value="four" component={Button} width="200px">
    Button from this library contains width prop
  </DropdownItem>
</Dropdown>
<!-- If you use your own trigger components with this Dropdown, 
  consult your component library on available props -->
`;

	function popup() {
		alert('hi');
	}

	let value = '';
	let open = false;
	let triggerProps = { width: '200px' };
  let backdrop = false;
</script>

<svelte:head>
	<title>Holokit Dropdown Menus</title>
</svelte:head>

<Title id="heading">Dropdown Menus</Title>
<Flex row gap={1}>
	<Card grow>
		<h2>Dropdown Props</h2>
		<Checkbox id={'chk-1'} reverse>component</Checkbox>
		<Checkbox id={'chk-2'} bind:checked={backdrop} reverse>backdrop</Checkbox>
		<Checkbox id={'chk-3'} reverse>position</Checkbox>
		<Checkbox id={'chk-4'} reverse>value</Checkbox>

		<h2>DropdownItem Props</h2>
		<Checkbox id={'chk-5'} reverse>component</Checkbox>
		<Checkbox id={'chk-6'} reverse>value</Checkbox>
	</Card>
	<Flex gap={2}>
		<Card>
			<Dropdown bind:backdrop label="Dropdown" bind:value component={Button} width="200px">
				<DropdownItem value="one" component={Button} {...triggerProps}>Item 1</DropdownItem>
				<DropdownItem value="two" component={Button} {...triggerProps}>Item 2</DropdownItem>
				<DropdownItem value="three" component={Button} {...triggerProps}>Item 3</DropdownItem>
				<DropdownItem value="four" component={Button} {...triggerProps}>Item 4</DropdownItem>
			</Dropdown>
			<div>... Other Content</div>

			<Dropdown label="Alternate Template" bind:value component={Button} {...triggerProps} backdrop>
				<DropdownItem value="one" component={Link} underline="true" href="/select" on:click={popup}>
					Item 1
				</DropdownItem>
				<DropdownItem value="two" component={Link} underline="true" href="/select"
					>Item 2</DropdownItem
				>
				<DropdownItem value="three" component={Link} underline="true" href="/select"
					>Item 3</DropdownItem
				>
			</Dropdown>
			<div>... More Content</div>

			<Button on:click={() => (open = !open)}>Open Modal</Button>
			<Modal bind:open duration={500}>
				<span slot="header">Modal Header</span>
				Modal with Dropdown
        <div>
          <Dropdown label="Modal Dropdown" bind:value component={Button} {...triggerProps} backdrop>
            <DropdownItem value="one" component={Button} {...triggerProps}>Item 1</DropdownItem>
            <DropdownItem value="two" component={Button} {...triggerProps}>Item 2</DropdownItem>
            <DropdownItem value="three" component={Button} {...triggerProps}>Item 3</DropdownItem>
            <DropdownItem value="four" component={Button} {...triggerProps}>Item 4</DropdownItem>
          </Dropdown>
        </div>
			</Modal>
		</Card>
		<Card>
			<Prism language="html" {code} />
		</Card>
	</Flex>
</Flex>
