<script>
	import { Button, Popover } from "$lib";
	let show = false;
</script>

<h1>Popover</h1>

<Popover bind:show placement={"bottom"}>
	<Button on:click={() => show = !show}>Click for more info!</Button>
	<p slot="content">
		Popover Content
	</p>
</Popover>