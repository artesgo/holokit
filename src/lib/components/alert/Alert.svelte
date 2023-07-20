<script lang="ts">
	import Eyecon from '../../icons/Eyecon.svelte';
	import Flex from '../flex/Flex.svelte';
  import type { IAlertProps } from './alert.types';
  export let id: IAlertProps['id'] = '';
  export let title: IAlertProps['title'] = 'Title';
  export let body: IAlertProps['body'] = '';
  export let theme: IAlertProps['theme'] = 'success';
  export let row: IAlertProps['row'] = false;

  // structure that applies the optional id prop, and does not apply '' as id
  $: props = {
    ...( id ? { id } : {})
  }
</script>

<section
  {...props}
  class="holo-alert"
  class:success={theme === 'success'}
  class:neutral={theme === 'neutral'}
  class:danger={theme === 'danger'}
  class:warning={theme === 'warning'}
  class:info={theme === 'info'}
  tabindex="-1"
>
  <header>
    <Flex {row} gap={1} alignItems="center">
      <slot name="icon">
        {#if theme === 'success'}
          <Eyecon />
        {:else if theme === 'warning'}
          <Eyecon />
        {:else if theme === 'info'}
          <Eyecon />
        {:else if theme === 'danger'}
          <Eyecon />
        {:else}
          <Eyecon />
        {/if}
      </slot>
      <h2>
        <slot>{title}</slot>
      </h2>
    </Flex>
  </header>
  <article>
    <slot name="body">{body}</slot>
  </article>
</section>

<style lang="scss">
  header {
    margin-bottom: var(--margin-v-m);
  }
  .holo-alert {
		padding-left: var(--padding-h-l);
		padding-right: var(--padding-h-l);
		padding-top: var(--padding-v-l);
		padding-bottom: var(--padding-v-l);
		color: var(--color);
		background-color: var(--background-color-alt);
		border: var(--border);
		border-color: var(--border-color-alt);
		border-radius: var(--border-radius);
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