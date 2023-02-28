<script lang="ts">
  export let href = '';
  export let target: string | undefined = undefined;
  export let underline = false;
  let focused = false;
  function focus() {
    focused = true;
  }
  function blur() {
    focused = false;
  }
</script>

<a 
  class="holo-link"
  class:underline
  class:focused
  {...$$restProps}
  {href} {target}
  on:mouseover={focus} on:focus={focus} on:blur={blur} on:mouseout={blur}
>
  <slot />
</a>

<style lang="scss">
  .holo-link {
    color: var(--color);
    text-decoration: none;
  }
  .underline {
    text-decoration: underline;
  }
  .focused {
    outline: 1px solid var(--outline-color);
    outline-offset: var(--outline-offset);
  }
</style>