<script lang="ts">
	import { Button, Modal, Card, Flex, Prism, Checkbox } from '$lib';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	let theme = getContext<Writable<'void' | 'light'>>('theme');
	let open = false;
	let open2 = false;
	let simple = `<Modal bind:open on:close={onClose}>
  <span slot="header">Modal Header</span>
  Modal Content With Close Button
</Modal>`;
	let complex = `<Modal bind:open={open2} escapeable={false}>
  <span slot="header">Modal Header</span>
  Modal Content
  <Flex row gap={2} slot="footer">
    <Button on:click={cancel} type="info">Cancel</Button>
    <Button on:click={accept} type="success">Accept</Button>
    <Button on:click={decline} type="danger">Decline</Button>
  </Flex>
</Modal>`
	function cancel() {
		open2 = false;
	}
	function accept() {
		open2 = false;
	}
	function decline() {
		open2 = false;
	}

	function onClose() {
		console.log('something closed me')
	}
</script>

<h1>Modal Demo</h1>

<Flex gap={2}>
	<Flex row gap={1}>
		<Card>
			<h2>Modal Props</h2>
			<Checkbox id="chk-1" reverse>open</Checkbox>
			<Checkbox id="chk-2" reverse>escapeable</Checkbox>
			<h2>Modal Animation Props</h2>
			<Checkbox id="chk-3" reverse>duration</Checkbox>
			<Checkbox id="chk-4" reverse>start</Checkbox>
			<Checkbox id="chk-4" reverse>easing</Checkbox>
			<h2>Modal Output Events</h2>
			<Checkbox id="chk-5" reverse>close</Checkbox>
		</Card>

		<Card grow>
			<div class="modal-demo">
				<Button on:click={() => (open = !open)}>Open Modal</Button>
				<Button on:click={() => (open2 = !open2)}>Open Non-Esc Modal</Button>
				<Modal bind:open on:close={onClose}>
					<span slot="header">Modal Header</span>
					Modal content With built-in close button
				</Modal>
		
				<Modal bind:open={open2} escapeable={false}>
					<span slot="header">Modal Header</span>
					Hitting Escape will close this modal
					<Flex row gap={2} slot="footer">
						<Button on:click={cancel} type="info" width={'100%'}>Cancel</Button>
						<Button on:click={decline} type="danger" width={'100%'}>Decline</Button>
						<Button on:click={accept} type="success" width={'100%'}>Accept</Button>
					</Flex>
				</Modal>
			</div>
		</Card>
	</Flex>

	<Card>
		<h2>Modal Sample Usage</h2>
		<Prism theme={$theme} language="html" code={simple}></Prism>
		<h2>Modal Additional Props</h2>
		<Prism theme={$theme} language="html" code={complex}></Prism>
	</Card>
</Flex>

<style>
	.modal-demo {
		/* Demo variable override method of updating child components */
		--modal-width: 750px;
	}
</style>
