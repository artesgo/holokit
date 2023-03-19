<script lang="ts">
	import { Button, Card, Flex, Title } from "$lib";
	import type { FocusManagerContext } from '$lib/stores';
	import { getContext } from "svelte";
	import Prism from "../prism/Prism.svelte";

	const focusManager = getContext<FocusManagerContext>('focus');
  const code = `<script lang="ts">
  import type { FocusManagerContext } from 'artesgo-holokit';
  import { getContext } from "svelte";
  const focusManager = getContext<FocusManagerContext>('focus');
  ...`;
  const html = `<Button id="focus-1" on:click={() => focusManager.focus("focus-4")}>Focus 4</Button>
<Button id="focus-2" on:click={() => focusManager.focus("focus-5")}>Focus 5</Button>
<Button id="focus-3" on:click={() => focusManager.focus("focus-6")}>Focus 6</Button>
<div>
  <Button id="focus-4">4</Button>
  <Button id="focus-5">5</Button>
  <Button id="focus-6">6</Button>
</div>`;
  const own = `import type { FocusManagerContext } from 'artesgo-holokit';
import { getContext } from 'svelte';
const focusManager = getContext<FocusManagerContext>('focus');
let element: HTMLElement; // bind:this={element} for element that wants focus
$: if (element && !!$focusManager.focused && $focusManager.focused === id) {
  element.focus();
}`;
</script>

<svelte:head>
	<title>Focus management</title>
</svelte:head>

<Title id="heading">Focus management Utility</Title>
<Flex row gap={1}>
	<Card grow>
    <Button id="focus-1" on:click={() => focusManager.focus("focus-4")}>Focus 4</Button>
    <Button id="focus-2" on:click={() => focusManager.focus("focus-5")}>Focus 5</Button>
    <Button id="focus-3" on:click={() => focusManager.focus("focus-6")}>Focus 6</Button>
    <div>
      <Button id="focus-4">4</Button>
      <Button id="focus-5">5</Button>
      <Button id="focus-6">6</Button>
    </div>
	</Card>
  <Flex gap={2}>
    <Card grow>
      <Prism language="javascript" {code} />
    </Card>
    <Card grow>
      <Prism language="html" code={html} />
    </Card>
    <Card grow>
      <Prism language="javascript" code={own} />
    </Card>
  </Flex>
</Flex>