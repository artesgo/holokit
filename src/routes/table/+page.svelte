<script lang="ts">
	import type { ICell } from '$lib/components/table';
	import { Table, Card } from '$lib';
  import Template from './cell-template.svelte';

  let data: ICell[][] = [
    [{ value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
    [{ value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
    [{ value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
    [{ value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
  ];
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
  let caption = 'Tehble';
</script>

<h1>Table</h1>

<Card flex between>
  <div>
    <h2>Plain</h2>
    <Table {headers} {data} {caption} />
  </div>
  <div>
    <h2>Plain Borderless</h2>
    <Table {headers} {data} {caption} borderless />
  </div>
</Card>
<br />
<Card flex between>
  <div>
    <h2>Striped</h2>
    <Table {headers} {data} {caption} alternate />
  </div>
  <div>
    <h2>Striped Borderless</h2>
    <Table {headers} {data} {caption} alternate borderless/>
  </div>
</Card>
<br />
<Card flex between>
  <div>
    <h2>Hidden Caption</h2>
    <Table {headers} {data} {caption} alternate hideCaption />
  </div>
  <div>
    <h2>Hidden Caption Striped Borderless</h2>
    <Table {headers} {data} {caption} alternate borderless hideCaption />
  </div>
</Card>
