<script>
	import { Input, Button, Card, Prism } from '$lib';
	let value = 'test';
	let code = `<Input bind:value type="success" />
<Input bind:value type="warning" />
<Input bind:value type="info" />
<Input bind:value type="danger" />
<Input bind:value type="neutral" />
buttons sold separately
`;
</script>

<h1>Inputs</h1>

<Card>
	<div>
		<Input bind:value type="success" /><Button type="success">Submit</Button>
	</div>
	<div>
		<Input bind:value type="warning" /><Button type="warning">Submit</Button>
	</div>
	<div>
		<Input bind:value type="info" /><Button type="info">Submit</Button>
	</div>
	<div>
		<Input bind:value type="danger" /><Button type="danger">Submit</Button>
	</div>
	<div>
		<Input bind:value type="neutral" /><Button type="neutral">Submit</Button>
	</div>
	<p>
		start typing: {value}
	</p>
</Card>

<br />
<Card>
  <Prism language="html" {code}></Prism>
</Card>