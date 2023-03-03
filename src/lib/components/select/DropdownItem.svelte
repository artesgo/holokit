<script lang="ts">
  export let component: any;
  export let triggerProps = {};
</script>

<li role="presentation">
  <svelte:component role="menuitem" this={component} {...triggerProps} on:click>
    <slot />
  </svelte:component>
</li>