<script lang="ts">
	import Cell from "./Cell.svelte";
	import type { ICell } from ".";
  export let alternate = false;
  export let index = 0;
  export let row: ICell[] = [];
</script>

<tr class:alt={alternate && index % 2 === 0}>
  {#each row as cell}
    <Cell {cell} />
  {/each}
</tr>

<style>
  .alt {
    background-color: var(--background-color-alt);
  }
</style>