<script lang="ts">
	import { Checkbox } from "$lib";
	import Card from "$lib/components/card/Card.svelte";

  let checked = true;
  
  function bindings() {
    console.log('fire bindings');
  }
</script>

<h1>Checkbox</h1>
<Card>
  <Checkbox id={"chk-1"} bind:checked on:click={bindings} on:mouseover={bindings} on:keypress={bindings}>
    Regular Position
  </Checkbox>
  <Checkbox id={"chk-2"} bind:checked reverse on:click={bindings} on:mouseover={bindings} on:keypress={bindings}>
    Reversed Position
  </Checkbox>
  
  <Checkbox id={"chk-3"} bind:checked apart={true} on:click={bindings} on:mouseover={bindings} on:keypress={bindings}>
    Spaced Apart
  </Checkbox>
  <Checkbox id={"chk-3"} bind:checked reverse apart={true} on:click={bindings} on:mouseover={bindings} on:keypress={bindings}>
    Spaced Apart Reversed
  </Checkbox>
</Card>