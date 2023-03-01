<script lang="ts">
	import Cell from "./Cell.svelte";
	import Row from "./Row.svelte";
  import type { ICell } from ".";

  export let data: ICell[][] = [];
  export let headers: ICell[];
  export let caption: string;
  export let hideCaption = false;
  export let alternate = false;
  export let borderless = false;
</script>
<table class:borderless>
  <caption class:sr-only={hideCaption}>{caption}</caption>
  <thead>
    {#each headers as cell}
      <Cell {cell} />
    {/each}
  </thead>
  <tbody>
    {#each data as row, index}
      <Row {row} {index} {alternate} />
    {/each}
  </tbody>
</table>

<style>
  table {
    color: var(--color);
    background-color: var(--background-color);
    border: var(--border);
  }

  .borderless {
    border: none;
  }
</style>