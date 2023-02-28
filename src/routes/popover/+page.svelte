<script>
	import { Button, Popover, Card } from "$lib";
	let show = false;
</script>

<h1>Popover</h1>

<Card>
	<Popover bind:show placement={"bottom"}>
		<Button on:click={() => show = !show}>Click for more info!</Button>
		<p slot="content">
			Popover Content
		</p>
	</Popover>
</Card>
