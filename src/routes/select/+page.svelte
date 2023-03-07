<script lang="ts">
	import { Prism, Button, Dropdown, DropdownItem, Link, Card, Flex, Checkbox } from "$lib";

  let code = `<Dropdown component={Button} triggerProps={{width: '200px'}}>
  <DropdownItem component={Button} triggerProps={{width: '200px'}}>
    Item 1
  </DropdownItem>
  <DropdownItem component={Button} triggerProps={{width: '200px'}}>
    Item 2
  </DropdownItem>
  <DropdownItem component={Button} triggerProps={{width: '200px'}}>
    Item 3
  </DropdownItem>
</Dropdown>
<div>
  ...
  Other Content
</div>

<Dropdown component={Link} triggerProps={{underline: true}} backdrop>
  <DropdownItem component={Link}
    triggerProps={{underline: true}}
    on:click={alert}>One</DropdownItem>
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
<Flex row gap={1}>
  <Card grow>
    <h2>Dropdown Props</h2>
    <Checkbox id={'chk-1'} reverse>component</Checkbox>
    <Checkbox id={'chk-2'} reverse>triggerProps</Checkbox>
    <Checkbox id={'chk-3'} reverse>backdrop</Checkbox>
    <Checkbox id={'chk-4'} reverse>position</Checkbox>

    <h2>DropdownItem Props</h2>
    <Checkbox id={'chk-5'} reverse>component</Checkbox>
    <Checkbox id={'chk-6'} reverse>triggerProps</Checkbox>
		<!-- <Checkbox id={'chk-1'} reverse bind:checked={reverse}>reverse</Checkbox>
		<Checkbox id={'chk-2'} reverse bind:checked={apart}>apart</Checkbox> -->
  </Card>
  <Flex gap={2}>
    <Card>
      <Dropdown component={Button} triggerProps={{width: '200px'}}>
        <DropdownItem component={Button} triggerProps={{width: '200px'}}>Item 1</DropdownItem>
        <DropdownItem component={Button} triggerProps={{width: '200px'}}>Item 2</DropdownItem>
        <DropdownItem component={Button} triggerProps={{width: '200px'}}>Item 3</DropdownItem>
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
    <Card>
      <Prism language="html" {code}></Prism>
    </Card>
  </Flex>
</Flex>