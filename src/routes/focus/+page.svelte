<script lang="ts">
  import {
    Button,
    Card,
    Flex,
    Title,
    Link,
    Dropdown,
    DropdownItem,
    RadioGroup,
    Radio,
    Slider,
    Input
  } from '$lib';
  import type { FocusManagerContext } from '$lib/stores';
  import { getContext } from 'svelte';
  import Highlight from 'svelte-highlight';
  import xml from 'svelte-highlight/languages/xml';
  import typescript from 'svelte-highlight/languages/typescript';

  const focusManager = getContext<FocusManagerContext>('focus');
  const code = `<script lang="ts">
  import type { FocusManagerContext } from 'artesgo-holokit';
  import { getContext } from "svelte";
  const focusManager = getContext<FocusManagerContext>('focus');
  ...`;
  const html = `<Button on:click={() => focusManager.focus("focus-4")}>
  Focus 4</Button>
<Button on:click={() => focusManager.focus("focus-5")}>
  Focus 5</Button>
<Button on:click={() => focusManager.focus("focus-6")}>
  Focus 6</Button>

<Button id="focus-4">4</Button>
<Button id="focus-5">5</Button>
<Button id="focus-6">6</Button>
`;
  const own = `import type { FocusManagerContext } from 'artesgo-holokit';
import { getContext } from 'svelte';
const focusManager = getContext<FocusManagerContext>('focus');
let element: HTMLElement; // bind:this={element} for element that wants focus
$: if (element && !!$focusManager.focused && $focusManager.focused === id) {
  element.focus();
}`;

  let value = '';
</script>

<svelte:head>
  <title>Focus Management</title>
</svelte:head>

<Title id="heading">Focus Management Utility</Title>
<Flex row gap={1}>
  <Card grow>
    <Flex gap={1}>
      <Title l={2} id="demo">Demo</Title>
      <Button id="focus-1" on:click={() => focusManager.focus('focus-4')}>Focus 4</Button>
      <Button id="focus-2" on:click={() => focusManager.focus('focus-5')}>Focus 5</Button>
      <Button id="focus-3" on:click={() => focusManager.focus('focus-6')}>Focus 6</Button>
      <Button id="focus-3" on:click={() => focusManager.focus('focus-7')}>Focus 7</Button>
      <Button id="focus-3" on:click={() => focusManager.focus('focus-8')}>Focus 8</Button>
      <Button id="focus-3" on:click={() => focusManager.focus('focus-9')}>Focus 9</Button>
      <Button id="focus-3" on:click={() => focusManager.focus('focus-10')}>Focus 10</Button>

      <Title l={2} id="targets">Focus Targets</Title>
      <Button id="focus-4">4</Button>
      <Link id="focus-5" href="">5</Link>
      <Dropdown id="focus-6" label="Dropdown" bind:value component={Button} width="100%">
        <DropdownItem value="one" component={Button}>Item 1</DropdownItem>
        <DropdownItem value="two" component={Button}>Item 2</DropdownItem>
        <DropdownItem value="three" component={Button}>Item 3</DropdownItem>
      </Dropdown>
      <RadioGroup name="focus-7">
        <Radio id="focus-7" value="yes">Yes</Radio>
        <Radio id="focus-8" value="no">No</Radio>
      </RadioGroup>
      <Slider id="focus-9" label={'Volume'} />
      <Input id="focus-10">Label For Input</Input>
    </Flex>
  </Card>
  <Flex gap={2}>
    <Card grow>
      <Highlight language={typescript} {code} />
    </Card>
    <Card grow>
      <Highlight language={xml} code={html} />
    </Card>
    <Card grow>
      <!-- TODO: Create vanilla js tab -->
      <Title l={2} id="own">Want to use this for your own components?</Title>
      <Highlight language={typescript} code={own} />
    </Card>
  </Flex>
</Flex>
