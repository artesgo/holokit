<script lang="ts">
	import { Grid, GridItem, Card, Theme, Flex, Checkbox, Title, isBreakpoint } from '$lib';
	import type { MediaContext } from '$lib';
  import Highlight from "svelte-highlight";
  import xml from "svelte-highlight/languages/xml";
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
</Grid>`;

	let mc = getContext<MediaContext>('media');
	$: gridTemplateCols = isBreakpoint($mc).atLeastTablet() ? '1fr 3fr 1fr' : '1fr';
	$: gridTemplateRows = isBreakpoint($mc).atLeastTablet() ? '1fr 3fr 1fr' : undefined;
	$: atLeastTablet = isBreakpoint($mc).atLeastTablet();
</script>

<svelte:head>
	<title>Holokit Grid</title>
</svelte:head>

<Title id="heading">Grid</Title>

<Flex gap={1}>
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
			<Grid columnTemplate={gridTemplateCols} rowTemplate={gridTemplateRows} borderless>
				<GridItem col={ atLeastTablet ? 1 : undefined } row={ atLeastTablet ? 1 : undefined }>
					<Theme theme={$theme} override={{ backgroundColorAlt: '#F00', color: '#000' }}>
						<Card grow>One</Card>
					</Theme>
				</GridItem>
				<GridItem col={ atLeastTablet ? 2 : undefined } row={ atLeastTablet ? 1 : undefined }>
					<Theme theme={$theme} override={{ backgroundColorAlt: '#FF3D00', color: '#000' }}>
						<Card grow>Two</Card>
					</Theme>
				</GridItem>
				<GridItem col={ atLeastTablet ? 3 : undefined } row={ atLeastTablet ? 1 : undefined }>
					<Theme theme={$theme} override={{ backgroundColorAlt: '#FF0', color: '#000' }}>
						<Card grow>Three</Card>
					</Theme>
				</GridItem>
				<GridItem col={ atLeastTablet ? 1 : undefined } row={ atLeastTablet ? 2 : undefined }>
					<Theme theme={$theme} override={{ backgroundColorAlt: '#CF0', color: '#000' }} stretch="element">
						<Card grow stretch="element">Four</Card>
					</Theme>
				</GridItem>
				<GridItem col={ atLeastTablet ? 2 : undefined } row={ atLeastTablet ? 2 : undefined }>
					<Theme theme={$theme} override={{ backgroundColorAlt: '#0F0', color: '#000' }} stretch="element">
						<Card grow stretch="element">Five</Card>
					</Theme>
				</GridItem>
				<GridItem col={ atLeastTablet ? 3 : undefined } row={ atLeastTablet ? 2 : undefined }>
					<Theme theme={$theme} override={{ backgroundColorAlt: '#0FC', color: '#000' }} stretch="element">
						<Card grow stretch="element">Six</Card>
					</Theme>
				</GridItem>
				<GridItem col={ atLeastTablet ? 1 : undefined } row={ atLeastTablet ? 3 : undefined }>
					<Theme theme={$theme} override={{ backgroundColorAlt: '#0FF', color: '#000' }}>
						<Card grow>Seven</Card>
					</Theme>
				</GridItem>
				<GridItem col={ atLeastTablet ? 2 : undefined } row={ atLeastTablet ? 3 : undefined } colSpan={ atLeastTablet ? 2 : undefined }>
					<Theme theme={$theme} override={{ backgroundColorAlt: '#0CF', color: '#000' }}>
						<Card grow>Eight</Card>
					</Theme>
				</GridItem>
			</Grid>
		</Card>
	</Flex>

	<Card>
		<Highlight language={xml} {code} />
	</Card>
</Flex>