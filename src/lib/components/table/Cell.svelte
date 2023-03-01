<script lang="ts">
  import type { ICell } from '.';
  export let cell: ICell;
  let scope: string;
  let colspan: number;
  let rowspan: number;
  $: if (cell.header) {
    scope = cell.header.scope;
  }

  $: if (cell.span) {
    colspan = cell.span.colspan;
    rowspan = cell.span.rowspan;
  }
</script>

<!-- svelte-ignore a11y-misplaced-scope -->
{#if cell.header}
  <th {scope} {colspan} {rowspan}>
    {#if cell.hasTemplate}
      <svelte:component this={cell.template} on:click={cell.action}>{ cell.value }</svelte:component>
    {:else}
      { cell.value }
    {/if}
  </th>
{:else}
  <td>
    {#if cell.hasTemplate}
      <svelte:component this={cell.template} on:click={cell.action}>{ cell.value }</svelte:component>
    {:else}
      { cell.value }
    {/if}
  </td>
{/if}

<style>
  th, td {
		padding-left: var(--padding-h-s);
		padding-right: var(--padding-h-s);
		padding-top: var(--padding-v-s);
		padding-bottom: var(--padding-v-s);
  }
</style>