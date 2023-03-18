<script lang="ts">
	import type { ICell } from '$lib/components/table';
	import { Table, Card, Checkbox, Title } from '$lib';
	import Prism from '../prism/Prism.svelte';

  import Template from './cell-template.svelte';
	import { Flex } from '$lib/components/flex';

  let caption = 'Tehble';
  let headers: ICell[] = [{
    header: { scope: 'col' },
    span: { colspan: 1, rowspan: 1 },
    hasTemplate: false,
    value: 'Name',
  },{
    header: { scope: 'col' },
    span: { colspan: 1, rowspan: 1 },
    hasTemplate: false,
    value: 'Email',
  },{
    span: { colspan: 2, rowspan: 1 },
    header: { scope: 'col' },
    hasTemplate: true,
    value: 'Actions',
    // TIP: Consume custom template in table
    template: Template,
    action: () => console.log('hi')
  }];
  let data: ICell[][] = [
    [{ value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
    [{ value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
    [{ value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
    [{ value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
  ];

  let borderless = false;
  let alternate = false;
  let hideCaption = false;

  $: description = `${borderless ? 'Borderless ' : 'Normal '}${alternate ? 'striped ' : ''}${hideCaption ? 'caption hidden' : ''}`;
  $: code = `<Table
  {headers}
  {data}
  {caption}
  ${borderless ? 'borderless' : ''}
  ${alternate ? 'alternate' : ''}
  ${hideCaption ? 'hideCaption' : ''}
/>`;

$:tsCode = `let caption = 'Tehble';
let headers: ICell[] = [{
  header: { scope: 'col' },
  span: { colspan: 1, rowspan: 1 },
  hasTemplate: false,
  value: 'Name',
},{
  header: { scope: 'col' },
  span: { colspan: 1, rowspan: 1 },
  hasTemplate: false,
  value: 'Email',
},{
  span: { colspan: 2, rowspan: 1 },
  header: { scope: 'col' },
  hasTemplate: true,
  value: 'Actions',
  // TIP: Consume custom template in table
  template: Template,
  action: () => console.log('hi')
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

<Flex row gap={1}>
  <Card grow>
    <h2>Table Props</h2>
    <Flex>
      <Checkbox id={'borderless'} reverse bind:checked={borderless}>Borderless</Checkbox>
      <Checkbox id={'stripes'} reverse bind:checked={alternate}>Striped</Checkbox>
      <Checkbox id={'captioned'} reverse bind:checked={hideCaption}>Hide Caption</Checkbox>
      <br />
      <Prism language="html" {code}></Prism>
    </Flex>
  </Card>

  <Card grow>
    <Flex justifyContent="start">
      <h2>{description}</h2>
      <Table {headers} {data} {caption} {alternate} {borderless} {hideCaption}/>
    </Flex>
  </Card>
</Flex>
<br />
<Card>
  <Prism language="javascript" code={tsCode}></Prism>
</Card>