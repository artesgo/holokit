<script>
	import {Grid, GridItem, Card, Theme} from "$lib";
</script>

<h1>Grid</h1>

<Card>
  <Grid columnTemplate='1fr 3fr 1fr' rowTemplate='1fr 3fr 1fr'>
    <GridItem col={1} row={1}>
      <Theme theme={{ backgroundColorAlt: '#F00', color: '#000' }}><Card grow>Hey</Card></Theme>
    </GridItem>
    <GridItem col={2} row={1}>
      <Theme theme={{ backgroundColorAlt: '#FC0', color: '#000' }}><Card>Hey</Card></Theme>
    </GridItem>
    <GridItem col={3} row={1}>
      <Theme theme={{ backgroundColorAlt: '#FF0', color: '#000' }}><Card>Hey</Card></Theme>
    </GridItem>
    <GridItem col={1} row={2}>
      <Theme theme={{ backgroundColorAlt: '#CF0', color: '#000' }} stretch><Card flex grow stretch>Hey</Card></Theme>
    </GridItem>
    <GridItem col={2} row={2}>
      <Theme theme={{ backgroundColorAlt: '#0F0', color: '#000' }}><Card grow>Hey</Card></Theme>
    </GridItem>
    <GridItem col={3} row={2}>
      <Theme theme={{ backgroundColorAlt: '#0FC', color: '#000' }}><Card grow>Hey</Card></Theme>
    </GridItem>
    <GridItem col={1} row={3}>
      <Theme theme={{ backgroundColorAlt: '#0FF', color: '#000' }}><Card grow>Hey</Card></Theme>
    </GridItem>
    <GridItem col={2} row={3} colSpan={2}>
      <Theme theme={{ backgroundColorAlt: '#0CF', color: '#000' }}><Card>Hey</Card></Theme>
    </GridItem>
  </Grid>
</Card>