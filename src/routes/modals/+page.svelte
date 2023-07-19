<script lang="ts">
	import { Button, Modal, Card, Flex, Checkbox, Alert, Title } from '$lib';
  import Highlight from "svelte-highlight";
  import xml from "svelte-highlight/languages/xml";
	let open = false;
	let open2 = false;
	let simple = `<Modal bind:open on:close={onClose}>
  <span slot="header">Modal Header</span>
  Modal Content With Close Button
</Modal>`;
	let complex = `<Modal bind:open={open2} escapeable={false} duration={1000}>
  <span slot="header">Modal Header</span>
  Modal Content
  <Flex row gap={2} slot="footer">
    <Button on:click={cancel} type="info">Cancel</Button>
    <Button on:click={accept} type="success">Accept</Button>
    <Button on:click={decline} type="danger">Decline</Button>
  </Flex>
</Modal>`;
let alertModal = `<Modal bind:open={alert} on:close={onClose} duration={300}>
  <Alert type="warning" slot="alert">Modal Header</Alert>
  Modal content With built-in close button
  <Flex row gap={2} slot="footer">
    <Button on:click={cancel} type="info" width={'100%'}>Cancel</Button>
    <Button on:click={accept} type="success" width={'100%'}>Confirm</Button>
  </Flex>
</Modal>`
	function cancel() {
		open2 = false;
		alert = false;
	}
	function accept() {
		open2 = false;
		alert = false;
	}
	function decline() {
		open2 = false;
		alert = false;
	}

	function onClose() {
		console.log('something closed me');
	}
	let alert = false;
</script>

<svelte:head>
	<title>Holokit Modal</title>
</svelte:head>

<Title id="heading">Modal Demo</Title>

<Flex gap={2}>
	<Flex row gap={1}>
		<Card>
			<h2>Modal Props</h2>
			<Checkbox id="chk-1" reverse>open</Checkbox>
			<Checkbox id="chk-2" reverse>escapeable</Checkbox>
			<h2>Modal Animation Props</h2>
			<Checkbox id="chk-3" reverse>duration</Checkbox>
			<Checkbox id="chk-4" reverse>start</Checkbox>
			<Checkbox id="chk-5" reverse>easing</Checkbox>
			<h2>Modal Output Events</h2>
			<Checkbox id="chk-6" reverse>close</Checkbox>
		</Card>

		<Card grow>
			<div class="modal-demo">
				<Button on:click={() => (open = !open)}>Open Modal</Button>
				<Button on:click={() => (open2 = !open2)}>Open Non-Esc Modal</Button>
				<Button on:click={() => (alert = !alert)}>Open Alert Modal</Button>
				<Modal bind:open on:close={onClose} duration={500}>
					<span slot="header">Modal Header</span>
					Modal content With built-in close button
				</Modal>

				<Modal bind:open={open2} escapeable={false} duration={1000}>
					<span slot="header">Modal Header</span>
					Hitting Escape will not close this modal
					<Flex row gap={2} slot="footer">
						<Button on:click={cancel} theme="info" width={'100%'}>Cancel</Button>
						<Button on:click={decline} theme="danger" width={'100%'}>Decline</Button>
						<Button on:click={accept} theme="success" width={'100%'}>Accept</Button>
					</Flex>
				</Modal>

				<Modal bind:open={alert} on:close={onClose} duration={300}>
					<Alert theme="warning" slot="alert">Modal Header</Alert>
					Modal content With built-in close button
					<Flex row gap={2} slot="footer">
						<Button on:click={cancel} theme="info" width={'100%'}>Cancel</Button>
						<Button on:click={accept} theme="success" width={'100%'}>Confirm</Button>
					</Flex>
				</Modal>
			</div>
		</Card>
	</Flex>

	<Card>
		<h2>Modal Sample Usage</h2>
		<Highlight language={xml} code={simple} />
		<h2>Modal Additional Props</h2>
		<Highlight language={xml} code={complex} />
		<h2>Modal with Alert</h2>
		<Highlight language={xml} code={alertModal} />
	</Card>
</Flex>

<style lang="scss">
	.modal-demo {
		/* Demo variable override method of updating child components */
		--modal-width: 50%;
		--modal-max-width: 750px;
		
		@media (max-width: 768px) {
			--modal-width: 90%;
		}
	}
</style>
