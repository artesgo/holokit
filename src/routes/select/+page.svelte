<script>
	import { Button, Dropdown, DropdownItem, Link, Card } from "$lib";
</script>

<h1>Dropdown Menus</h1>
<Card>
  <Dropdown component={Button}>
    <DropdownItem component={Button}>Wut</DropdownItem>
    <DropdownItem component={Button}>Me Gusta</DropdownItem>
    <DropdownItem component={Button}>Wut</DropdownItem>
  </Dropdown>
  ...
  Other Content


  <Dropdown component={Link} triggerProps={{underline: true}} backdrop>
    <DropdownItem component={Link} triggerProps={{underline: true}} on:click={() => alert('wut')}>Wut</DropdownItem>
    <DropdownItem component={Link}>Me Gusta</DropdownItem>
    <DropdownItem component={Link}>Wut</DropdownItem>
  </Dropdown>
  ...
  More Content
</Card>