<script lang="ts">
	import { Checkbox, Card, Flex, Title } from '$lib';
  import Highlight from "svelte-highlight";
  import xml from "svelte-highlight/languages/xml";
	function bindings() {
		console.log('fire bindings');
	}
  let reverse = false;
  let apart = false;
  let checked = false;
	let code = `<Checkbox id='chk-1' bind:checked${reverse ? ' reverse' : ''}>
  Regular Position
</Checkbox>`;
</script>

<svelte:head>
	<title>Holokit Checkbox</title>
</svelte:head>

<Title id="heading">Checkbox</Title>
<Flex justifyContent='between' row={true} gap={1}>
	<Card grow>
    <h2>Props</h2>
		<Checkbox id={'chk-1'} reverse bind:checked={reverse}>reverse</Checkbox>
		<Checkbox id={'chk-2'} reverse bind:checked={apart}>apart</Checkbox>
    <br />
		<Highlight language={xml} {code} />
	</Card>

	<Card grow>
		<Checkbox
			id={'chk-3'}
			{apart}
			{reverse}
      bind:checked
			on:click={bindings}
			on:mouseover={bindings}
			on:keypress={bindings}
		>
			Checked{checked ? '' : '?'}
		</Checkbox>
	</Card>
</Flex>
