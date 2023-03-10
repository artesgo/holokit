<script lang="ts">
	import { Alert, Card, Flex, Theme } from "$lib";
  import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import Prism from "../prism/Prism.svelte";
	let theme = getContext<Writable<'void' | 'light'>>('theme');
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

<Flex row={false} gap={1}>
  <Theme grow theme={$theme} override={{ color: '#fef' }}>
    <Alert type="neutral">Welcome</Alert>
  </Theme>
  <Theme grow theme={$theme} override={{ color: '#fef' }}>
    <Alert>To</Alert>
  </Theme>
  <Theme grow theme={$theme} override={{ color: '#333' }}>
    <Alert type="info">The</Alert>
  </Theme>
  <Theme grow theme={$theme} override={{ color: '#fef' }}>
    <Alert type="warning">Holokit</Alert>
  </Theme>
  <Theme grow theme={$theme} override={{ color: '#fef' }}>
    <Alert type="danger">Library<div slot="body">Stay as long as you like...</div></Alert>
  </Theme>
</Flex>

<br />
<Card>
  Depending on your theme, you may need to provide overrides for font color
	<Prism language="html" {code} />
</Card>
