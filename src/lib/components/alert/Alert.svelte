<script lang="ts">
	import Eyecon from '../../icons/Eyecon.svelte';
	import Flex from '../flex/Flex.svelte';
  import type { AlertProps } from './alert.types';
  type $$props = AlertProps;

  export let title: $$props['title'] = 'Title';
  export let type: $$props['type'] = 'success';
  export let row = false;
  export let dark = false;
</script>

<section
  class:success={type === 'success'}
  class:neutral={type === 'neutral'}
  class:danger={type === 'danger'}
  class:warning={type === 'warning'}
  class:info={type === 'info'}
>
  <header>
    <Flex {row} gap={1} alignItems="center">
      <slot name="icon">
        {#if type === 'success'}
          <Eyecon />
        {:else if type === 'warning'}
          <Eyecon />
        {:else if type === 'info'}
          <Eyecon />
        {:else if type === 'danger'}
          <Eyecon />
        {:else}
          <Eyecon />
        {/if}
      </slot>
      <h2>
        <slot name="title">{title}</slot>
      </h2>
    </Flex>
  </header>
  <article>
    <slot />
  </article>
</section>

<style lang="scss">
  header {
    margin-bottom: var(--margin-v-m);
  }
  section {
		padding-left: var(--padding-h-l);
		padding-right: var(--padding-h-l);
		padding-top: var(--padding-v-l);
		padding-bottom: var(--padding-v-l);
		color: var(--color);
		background-color: var(--background-color-alt);
		border: var(--border);
		border-color: var(--border-color-alt);
		border-radius: calc(var(--border-radius) * 2);
    width: 100%;
  }
  h2 {
    margin-bottom: 0;
    font-size: var(--font-size-l);
  }
  .info {
    background-color: var(--info-darkest);
  }
  .danger {
    background-color: var(--danger-darkest);
  }
  .warning {
    background-color: var(--warning-darkest);
  }
  .success {
    background-color: var(--success-darkest);
  }
  .neutral {
    background-color: var(--neutral-darkest);
  }
</style>