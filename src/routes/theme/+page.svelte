<script lang="ts">
	import { Card, Table, Theme } from "$lib";
	import type { ICell } from '$lib/components/table';
	import Button from "$lib/components/button/Button.svelte";

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
  }];
  let caption = 'Tehble';
</script>

<h1>Theme</h1>

<h2>Overrides</h2>
<Theme theme='void' override={{ color: '#F00', paddingHL: '64px', backgroundColorAlt: '#333' }}>
  <Card>Hi</Card>
</Theme>
<Theme theme='void' override={{ color: '#FC0', paddingHL: '32px', backgroundColorAlt: '#333' }}>
  <Card>Hello</Card>
</Theme>
<Theme theme='void' override={{ color: '#FF0', paddingHL: '16px', backgroundColorAlt: '#333' }}>
  <Card>Welcome</Card>
</Theme>
<Theme theme='void' override={{ color: '#CF0', paddingHL: '8px', backgroundColorAlt: '#333' }}>
  <Card>To</Card>
</Theme>
<Theme theme='void' override={{ color: '#0F0', paddingHL: '4px', backgroundColorAlt: '#333' }}>
  <Card>The</Card>
</Theme>
<Theme theme='void' override={{ color: '#0FC', paddingHL: '8px', backgroundColorAlt: '#333' }}>
  <Card>Rainbow</Card>
</Theme>
<Theme theme='void' override={{ color: '#0FF', paddingHL: '16px', backgroundColorAlt: '#333' }}>
  <Card>Road</Card>
</Theme>
<Theme theme='void' override={{ color: '#0CF', paddingHL: '32px', backgroundColorAlt: '#333' }}>
  <Card>Show</Card>
</Theme>
<Theme theme='void' override={{ color: '#00F', paddingHL: '64px', backgroundColorAlt: '#333' }}>
  <Card>!</Card>
</Theme>

<h2>Invalid Theme</h2>
<Theme theme='void' override={{ color: 'something wrong', paddingHL: '64px' }}>
  <Card>Bad Props, doesn't break, but also doesn't default back to working variable</Card>
</Theme>

<h2>Named Themes</h2>
<Theme theme="light">
  <Card>
    Use The Other Theme
    <Table {headers} {data} {caption} />
  </Card>
</Theme>