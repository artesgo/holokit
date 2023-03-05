<script>
	import {Grid, GridItem, Card, Theme} from "$lib";
	import Prism from "$lib/components/prism/Prism.svelte";
  import { theme } from '../store';
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

<Card>
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
<br />
<Card>
  <Prism language="html" {code}></Prism>
</Card>