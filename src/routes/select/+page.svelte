<script lang="ts">
	import { Button, Dropdown, DropdownItem, Link, Card } from "$lib";
	import Prism from "$lib/components/prism/Prism.svelte";
  let code = `<Dropdown component={Button}>
  <DropdownItem component={Button}>Item 1</DropdownItem>
  <DropdownItem component={Button}>Item 2</DropdownItem>
  <DropdownItem component={Button}>Item 3</DropdownItem>
</Dropdown>
<div>
  ...
  Other Content
</div>

<Dropdown component={Link} triggerProps={{underline: true}} backdrop>
  <DropdownItem component={Link} triggerProps={{underline: true}} on:click={alert}>One</DropdownItem>
  <DropdownItem component={Link}>Item 2</DropdownItem>
  <DropdownItem component={Link}>Item 3</DropdownItem>
</Dropdown>
<div>
  ...
  More Content
</div>`;

  function popup() {
    alert('hi');
  }
</script>

<h1>Dropdown Menus</h1>
<Card>
  <Dropdown component={Button}>
    <DropdownItem component={Button}>Item 1</DropdownItem>
    <DropdownItem component={Button}>Item 2</DropdownItem>
    <DropdownItem component={Button}>Item 3</DropdownItem>
  </Dropdown>
  <div>
    ...
    Other Content
  </div>

  <Dropdown component={Link} triggerProps={{underline: true}} backdrop>
    <DropdownItem component={Link} triggerProps={{underline: true}} on:click={popup}>Item 1</DropdownItem>
    <DropdownItem component={Link}>Item 2</DropdownItem>
    <DropdownItem component={Link}>Item 3</DropdownItem>
  </Dropdown>
  <div>
    ...
    More Content
  </div>
</Card>
<br />
<Card>
  <Prism language="html" {code}></Prism>
</Card>