<script>
	import { Input, Button } from "$lib";
  let value = 'test';
</script>

<h1>Inputs</h1>

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
