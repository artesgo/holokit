<script>
	import { Button, Modal, Card } from '$lib';
	let open = true;
	let open2 = false;
</script>

<h1>Modal Demo</h1>

<Card>
	<div class="modal-demo">
		<Button on:click={() => (open = !open)}>Open Modal</Button>
		<Button on:click={() => (open2 = !open2)}>Open Non-Esc Modal</Button>
		<Modal bind:open>
			<span slot="header">Modal Header</span>
			Modal Content With Close Button
		</Modal>

		<Modal bind:open={open2} escapeable={false}>
			<span slot="header">Modal Header</span>
			Modal Content
			<div slot="footer" class="flex">
				<Button on:click={() => (open2 = false)} type="success" width={'100%'}>Click</Button>
				<Button on:click={() => (open2 = false)} type="info" width={'100%'}>Click</Button>
				<Button on:click={() => (open2 = false)} type="neutral" width={'100%'}>Click</Button>
			</div>
		</Modal>
	</div>
</Card>

<style>
	.modal-demo {
		/* Demo variable override method of updating child components */
		--modal-width: 750px;
	}
</style>
