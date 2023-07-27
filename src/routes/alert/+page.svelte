<script lang="ts">
	import { Alert, Card, Flex, Theme, Title } from "$lib";
  import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
  import Highlight from "svelte-highlight";
  import xml from "svelte-highlight/languages/xml";
	let theme = getContext<Writable<'void' | 'light' | 'clear' | 'slate' | 'sapling'>>('theme');
  let code = `<Theme grow theme={$theme}>
  <Alert type="neutral">Hello</Alert>
</Theme>
<Theme grow theme={$theme}>
  <Alert>Hello</Alert>
</Theme>
<Theme grow theme={$theme} override={{ color: '#333' }}>
  <Alert type="info">World</Alert>
</Theme>
<Theme grow theme={$theme}>
  <Alert type="warning">World</Alert>
</Theme>
<Theme grow theme={$theme}>
  <Alert type="danger">World</Alert>
</Theme>`
</script>

<svelte:head>
	<title>Holokit Alerts</title>
</svelte:head>

<Title id="heading">Alert Component Demo</Title>

<Flex gap={1}>
  <Flex row={false} gap={1}>
    <Theme grow theme={$theme} override={{ color: '#fef' }}>
      <Alert id="alert-1" theme="neutral">Welcome</Alert>
    </Theme>
    <Theme grow theme={$theme} override={{ color: '#fef' }}>
      <Alert>To</Alert>
    </Theme>
    <Theme grow theme={$theme} override={{ color: '#333' }}>
      <Alert theme="info">The</Alert>
    </Theme>
    <Theme grow theme={$theme} override={{ color: '#fef' }}>
      <Alert theme="warning">Holokit</Alert>
    </Theme>
    <Theme grow theme={$theme} override={{ color: '#fef' }}>
      <Alert theme="danger">Library<div slot="body">Stay as long as you like...</div></Alert>
    </Theme>
  </Flex>
  
  <Card>
    Depending on your theme, you may need to provide overrides for font color
    <Highlight language={xml} {code} />
  </Card>
</Flex>

