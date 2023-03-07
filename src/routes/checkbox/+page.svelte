<script lang="ts">
	import { Checkbox, Card, Prism, Flex } from '$lib';

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

<h1>Checkbox</h1>
<Flex justifyBetween row={true} gap={1}>

	<Card grow>
    <h2>Props</h2>
		<Checkbox id={'chk-1'} reverse bind:checked={reverse}>reverse</Checkbox>
		<Checkbox id={'chk-2'} reverse bind:checked={apart}>apart</Checkbox>
    <br />
		<Prism language="html" {code} />
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
