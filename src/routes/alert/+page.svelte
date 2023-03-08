<script lang="ts">
	import { Alert, Flex, Theme } from "$lib";
  import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	let theme = getContext<Writable<'void' | 'light'>>('theme');
</script>


<Flex row={false} gap={1}>
  <Theme grow theme={$theme}>
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
  </Theme>
</Flex>