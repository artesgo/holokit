<script lang="ts">
	import { Card, Table, Theme, Flex, Checkbox, Title } from "$lib";

  import Highlight from "svelte-highlight";
  import xml from "svelte-highlight/languages/xml";

	import type { ICell } from '$lib/components/table';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	let theme = getContext<Writable<'void' | 'light'>>('theme');

  let data: ICell[][] = [
    [{ value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
    [{ value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
    [{ value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
    [{ value: 'data 1' }, { value: 'data 2' }, { value: 'data 3' }, { value: 'data 4' }],
  ];
  let headers: ICell[] = [{
    span: { colspan: 1, rowspan: 1 },
    value: 'Name',
  },{
    span: { colspan: 1, rowspan: 1 },
    value: 'Email',
  },{
    span: { colspan: 2, rowspan: 1 },
    value: 'Actions',
  }];
  let caption = 'Tehble';
  $: alternate = $theme === 'light' ? 'void' : 'light'
  let code = `<Theme theme={$theme} override={{ color: '#F00', paddingHL: '64px' }}>
  <Card>Hi</Card>
</Theme>
<Theme theme={$theme} override={{ color: '#FF3D00', paddingHL: '32px' }}>
  <Card>Hello</Card>
</Theme>`;
</script>

<svelte:head>
	<title>Holokit Theme</title>
</svelte:head>

<Title id="heading">Theme</Title>

<Flex gap={1}>
  <Flex row gap={1}>
    <Card>
      <h2>Theme Props</h2>
      <Checkbox id={'chk-1'} reverse>theme</Checkbox>
      <Checkbox id={'chk-2'} reverse>override</Checkbox>
      <Checkbox id={'chk-3'} reverse>padded</Checkbox>
    </Card>
    <Flex gap={1}>
      <Card><h2>Named Themes</h2>
        <Theme theme={$theme} padded>
          <Card>
            Current Theme
            <Table {headers} {data} {caption} />
          </Card>
        </Theme>
        <Theme theme={alternate} padded>
          <Card>
            Use The Other Theme
            <Table {headers} {data} {caption} />
          </Card>
        </Theme>
      </Card>
      <Card><h2>Overrides</h2>
        <Theme theme={$theme} override={{ color: '#F00', paddingHL: '64px' }}>
          <Card>Hi</Card>
        </Theme>
        <Theme theme={$theme} override={{ color: '#FF3D00', paddingHL: '32px' }}>
          <Card>Hello</Card>
        </Theme>
        <Theme theme={$theme} override={{ color: '#FF0', paddingHL: '16px' }}>
          <Card>Welcome</Card>
        </Theme>
        <Theme theme={$theme} override={{ color: '#CF0', paddingHL: '8px' }}>
          <Card>To</Card>
        </Theme>
        <Theme theme={$theme} override={{ color: '#0F0', paddingHL: '4px' }}>
          <Card>The</Card>
        </Theme>
        <Theme theme={$theme} override={{ color: '#0FC', paddingHL: '8px' }}>
          <Card>Rainbow</Card>
        </Theme>
        <Theme theme={$theme} override={{ color: '#0FF', paddingHL: '16px' }}>
          <Card>Road</Card>
        </Theme>
        <Theme theme={$theme} override={{ color: '#0CF', paddingHL: '32px' }}>
          <Card>Show</Card>
        </Theme>
        <Theme theme={$theme} override={{ color: '#00F', paddingHL: '64px' }}>
          <Card>!</Card>
        </Theme>
        
        <h2>Invalid Override Props</h2>
        <Theme theme={$theme} override={{ color: 'something wrong', paddingHL: '64px' }}>
          <Card>Bad Props, doesn't break, but also doesn't default back to working variable</Card>
        </Theme>
      </Card>
      <Card>
        <h2>Usage</h2>
        <Highlight language={xml} {code} />
      </Card>
    </Flex>
  </Flex>
</Flex>