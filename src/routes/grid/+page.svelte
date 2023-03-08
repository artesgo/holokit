<script lang="ts">
	import {Grid, GridItem, Card, Theme, Flex, Checkbox, Prism} from "$lib";
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	let theme = getContext<Writable<'void' | 'light'>>('theme');

  let code = `<Grid columnTemplate='1fr 3fr 1fr' rowTemplate='1fr 3fr 1fr' borderless>
  <GridItem col={1} row={1}>
    <Theme theme={$theme} override={{ backgroundColorAlt: '#F00', color: '#000' }}>
      <Card grow>Hey</Card>
    </Theme>
  </GridItem>
  <GridItem col={2} row={1}>
    <Theme theme={$theme} override={{ backgroundColorAlt: '#FF3D00', color: '#000' }}>
      <Card>Hey</Card>
    </Theme>
  </GridItem>
  ...
</Grid>`
</script>

<h1>Grid</h1>

<Flex row gap={1}>
  <Card grow>
    <h2>Grid Props</h2>
    <Checkbox id="chk-1" reverse>columnTemplate</Checkbox>
    <Checkbox id="chk-2" reverse>rowTemplate</Checkbox>
    <Checkbox id="chk-3" reverse>borderless</Checkbox>
    <h2>GridItem Props</h2>
    <Checkbox id="chk-4" reverse>col</Checkbox>
    <Checkbox id="chk-5" reverse>colSpan</Checkbox>
    <Checkbox id="chk-6" reverse>row</Checkbox>
    <Checkbox id="chk-7" reverse>rowSpan</Checkbox>
  </Card>
  <Card grow>
    <Grid columnTemplate='1fr 3fr 1fr' rowTemplate='1fr 3fr 1fr' borderless>
      <GridItem col={1} row={1}>
        <Theme theme={$theme} override={{ backgroundColorAlt: '#F00', color: '#000' }}><Card grow>Hey</Card></Theme>
      </GridItem>
      <GridItem col={2} row={1}>
        <Theme theme={$theme} override={{ backgroundColorAlt: '#FF3D00', color: '#000' }}><Card>Hey</Card></Theme>
      </GridItem>
      <GridItem col={3} row={1}>
        <Theme theme={$theme} override={{ backgroundColorAlt: '#FF0', color: '#000' }}><Card>Hey</Card></Theme>
      </GridItem>
      <GridItem col={1} row={2}>
        <Theme theme={$theme} override={{ backgroundColorAlt: '#CF0', color: '#000' }} stretch><Card flex grow stretch>Hey</Card></Theme>
      </GridItem>
      <GridItem col={2} row={2}>
        <Theme theme={$theme} override={{ backgroundColorAlt: '#0F0', color: '#000' }}><Card grow>Hey</Card></Theme>
      </GridItem>
      <GridItem col={3} row={2}>
        <Theme theme={$theme} override={{ backgroundColorAlt: '#0FC', color: '#000' }}><Card grow>Hey</Card></Theme>
      </GridItem>
      <GridItem col={1} row={3}>
        <Theme theme={$theme} override={{ backgroundColorAlt: '#0FF', color: '#000' }}><Card grow>Hey</Card></Theme>
      </GridItem>
      <GridItem col={2} row={3} colSpan={2}>
        <Theme theme={$theme} override={{ backgroundColorAlt: '#0CF', color: '#000' }}><Card>Hey</Card></Theme>
      </GridItem>
    </Grid>
  </Card>
</Flex>

<br />
<Card>
  <Prism theme={$theme} language="html" {code}></Prism>
</Card>