<script lang="ts">
  export let show = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export let component: any;
  export let triggerProps = {};
  export let backdrop = false;
  export let position: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  function toggle() {
    show = !show;
  }
</script>

<section>
  <svelte:component this={component} {...triggerProps} on:click={toggle}>
    <slot name="trigger">Menu</slot>
  </svelte:component>
  {#if show}
    <ul role="menu"
      class:backdrop
      class:top={position === "top"}
      class:left={position === "left"}
      class:right={position === "right"}
      class:bottom={position === "bottom"}
    >
      <slot />
    </ul>
  {/if}
</section>

<style>
  section {
    position: relative;
  }

  ul {
    list-style: none;
    position: absolute;
    z-index: 900;
  }

  .backdrop {
    background-color: var(--background-color-alt);
  }
</style>