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
<table class:borderless class="holo-table">
  <caption class:sr-only={hideCaption}>{caption}</caption>
  <thead>
    <Row>
      {#each headers as header}
        <Cell {...header.span} scope={'col'}>
          <slot name="header" {header}>
            {header.value}
          </slot>
        </Cell>
      {/each}
    </Row>
  </thead>
  <tbody>
    {#each data as row, index}
      <Row {index} {alternate}>
        {#each row as cell, i}
          <Cell {...cell.span} scope={cell.scope}>
            <slot
              name="cell"
              {cell}
              {row}
              index={i}
              rowIndex={index}
              header={headers[i]}
            >
              {cell.value}
            </slot>
          </Cell>
        {/each}
      </Row>
    {/each}
  </tbody>
</table>

<style>
  table {
    color: var(--color);
    background-color: var(--background-color);
    border: var(--border);
		font-weight: var(--font-weight-s);
  }

  .borderless {
    border: none;
  }
</style>