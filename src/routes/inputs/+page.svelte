<script lang="ts">
	import { Input, Button, Card, Prism } from '$lib';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	let theme = getContext<Writable<'void' | 'light'>>('theme');
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
  <Prism theme={$theme} language="html" {code}></Prism>
</Card>