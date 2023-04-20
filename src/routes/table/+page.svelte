<script lang="ts">
	import type { ICell } from '$lib/components/table';
	import { Table, Card, Checkbox, Title, Button, Link } from '$lib';

  import Highlight from "svelte-highlight";
  import xml from "svelte-highlight/languages/xml";
  import typescript from "svelte-highlight/languages/typescript";

	import { Flex } from '$lib/components/flex';

  let caption = 'Tehble';
  let headers: ICell[] = [{
    value: 'Name',
  },{
    value: 'Email',
  },{
    span: { colspan: 2, rowspan: 1 },
    value: 'Actions',
  }];
  let data: ICell[][] = [
    [{ scope: 'row', value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
    [{ scope: 'row', value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
    [{ scope: 'row', value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
    [{ scope: 'row', value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
  ];

  let borderless = false;
  let alternate = false;
  let hideCaption = false;

  $: description = `${borderless ? 'Borderless ' : 'Normal '}${alternate ? 'striped ' : ''}${hideCaption ? 'caption hidden' : ''}`;
  $: code = `<Table {headers} {data} {caption} {alternate} {borderless} {hideCaption} />

// to override the cell templates
<Table {headers} {data} {caption} {alternate} {borderless} {hideCaption}>
  <svelte:fragment slot="header" let:header>
    {#if header && header.value === 'Actions'}
      <Button on:click={() => console.log(header)}>
        {header.value}
      </Button>
    {:else}
      {header.value}
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="cell" let:cell let:row let:header let:index let:rowIndex>
    {#if header && header.value === 'Actions'}
      <Button on:click={() => console.log(cell)}>
        {cell.value}
      </Button>
    {:else if header && header.value === 'Name'}
      <Link href='' on:click={() => console.log(rowIndex, row)}>
        {cell.value}
      </Link>
    {:else}
      {cell.value}
    {/if}
  </svelte:fragment>
</Table>`;

$:tsCode = `let caption = 'Tehble';
let headers: IHeader[] = [{
  scope: 'col',
  value: 'Name',
},{
  scope: 'col',
  value: 'Name',
},{
  scope: 'col',
  value: 'Email',
},{
  span: { colspan: 2, rowspan: 1 },
  scope: 'col',
  value: 'Actions',
}];
let data: ICell[][] = [
  [{ value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
  [{ value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
  [{ value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
  [{ value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
];`
</script>

<svelte:head>
	<title>Holokit Table</title>
</svelte:head>

<Title id="heading">Table</Title>

<Flex gap={1}>
  <Flex row gap={1}>
    <Card grow>
      <h2>Table Props</h2>
      <Flex>
        <Checkbox id={'headers'} reverse>headers</Checkbox>
        <Checkbox id={'data'} reverse>data</Checkbox>
        <Checkbox id={'caption'} reverse>caption</Checkbox>
        <Checkbox id={'stripes'} reverse bind:checked={alternate}>Striped</Checkbox>
        <Checkbox id={'borderless'} reverse bind:checked={borderless}>Borderless</Checkbox>
        <Checkbox id={'captioned'} reverse bind:checked={hideCaption}>Hide Caption</Checkbox>
      </Flex>
    </Card>

    <Card grow>
      <Flex justifyContent="start">
        <h2>{description}</h2>
        <Table {headers} {data} {caption} {alternate} {borderless} {hideCaption}>
          <svelte:fragment slot="header" let:header>
            {#if header && header.value === 'Actions'}
              <Button on:click={() => console.log(header)}>
                {header.value}
              </Button>
            {:else}
              {header.value}
            {/if}
          </svelte:fragment>

          <svelte:fragment slot="cell" let:cell let:row let:header let:index let:rowIndex>
            {#if header && header.value === 'Actions'}
              <Button on:click={() => console.log(cell)}>
                {cell.value}
              </Button>
            {:else if header && header.value === 'Name'}
              <Link href='' on:click={() => console.log(rowIndex, row)}>
                {cell.value}
              </Link>
            {:else}
              {cell.value}
            {/if}
          </svelte:fragment>
        </Table>
      </Flex>
    </Card>
  </Flex>
  <Card>
    <Title id="html" l={2}>html</Title>
    <Highlight language={xml} {code}></Highlight>
  </Card>
  <Card>
    <Title id="script" l={2}>script</Title>
    <Highlight language={typescript} code={tsCode}></Highlight>
  </Card>
</Flex>